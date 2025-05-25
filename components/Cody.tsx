import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';

interface CodyProps {
  onClose: () => void;
}
interface SyntaxMap {
  [key: string]: { syntax?: string; explanation?: string; example?: string; output?: string } | undefined;
}

let offlineData: any = null;
let loadingError: string | null = null;

try {
  offlineData = require('@/assets/offline_data.json');
} catch (e: any) {
  console.error("Failed to load offline data JSON:", e);
  loadingError = "Error: Could not load AI model data. Check console.";
}

const Cody: React.FC<CodyProps> = ({ onClose }) =>
{
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const { theme } = useTheme();

  const preprocess = useCallback((text: string) => {
    return text.toLowerCase().trim().split(/\s+/).filter(token => token.length > 0);
  }, []);

  const classifyLanguage = useCallback((query: string): string | null => {
    if (!offlineData?.model_data || !offlineData?.model_data?.class_priors || !offlineData?.model_data?.feature_log_prob || !offlineData?.model_data?.vocabulary) {
      console.error("Model data not loaded properly.");
      return null;
    }

    const tokens = preprocess(query);
    const featureVector: { [key: number]: number } = {};
    for (const token of tokens) {
      if (offlineData.model_data.vocabulary[token] !== undefined) {
        featureVector[offlineData.model_data.vocabulary[token]] = 1; // Simple presence feature
      }
    }

    const classProbabilities: { [key: string]: number } = {};
    for (const className in offlineData.model_data.class_priors) {
      let logProb = offlineData.model_data.class_priors[className];
      const featureLogProbs = offlineData.model_data.feature_log_prob[className] || {};
      for (const featureIndexStr in featureVector) {
        const featureIndex = parseInt(featureIndexStr);
        const word = Object.keys(offlineData.model_data.vocabulary).find(key => offlineData.model_data.vocabulary[key] === featureIndex);
        if (word && featureLogProbs[word] !== undefined) {
          logProb += featureLogProbs[word];
        }
      }
      classProbabilities[className] = logProb;
    }

    let bestClass: string | null = null;
    let maxLogProb = -Infinity;
    for (const className in classProbabilities) {
      if (classProbabilities[className] > maxLogProb) {
        maxLogProb = classProbabilities[className];
        bestClass = className;
      }
    }
    return bestClass;
  }, [preprocess, offlineData]);

  const calculateMatchScore = useCallback((keyTokens: string[], queryTokens: string[]) => {
    let matchCount = 0;
    for (const queryToken of queryTokens) {
      if (keyTokens.includes(queryToken)) {
        matchCount++;
      }
    }

    if (queryTokens.length === 0) return 0;

    // Prioritize matches where more query tokens are present in the key
    const tokenRatioScore = matchCount / queryTokens.length;

    // Also consider the length of the key - longer relevant keys might be better
    const keyLengthScore = keyTokens.length > 0 ? matchCount / keyTokens.length : 0;

    // Combine scores, giving more weight to the token ratio (how much of the query is covered)
    return (tokenRatioScore * 0.7) + (keyLengthScore * 0.3);
  }, []);

  const handleAsk = useCallback(() => {
    setResponse('');
    if (loadingError || !offlineData?.java_syntax || !offlineData?.python_syntax) {
      setResponse("Error loading data. Please restart the app.");
      return;
    }

    const lowerCaseQuery = query.toLowerCase().trim();
    const queryTokens = lowerCaseQuery.split(/\s+/).filter(token => token.length > 0);

    const containsJavaKeyword = queryTokens.includes('java');
    const containsPythonKeyword = queryTokens.includes('python');

    const predictedLanguage = classifyLanguage(query);
    let bestMatchResponse: { syntax?: string; explanation?: string; example?: string; output?: string } | undefined = undefined;
    let bestMatchScore = -1;

    const checkSyntaxMap = (syntaxMap: SyntaxMap) => {
      for (const key in syntaxMap) {
        const entry = syntaxMap[key];
        if (entry) {
          const keyTokens = key.toLowerCase().split(/\s+/).filter(token => token.length > 0);
          const score = calculateMatchScore(keyTokens, queryTokens);
          if (score > bestMatchScore) {
            bestMatchScore = score;
            bestMatchResponse = entry;
          }
        }
      }
    };

    if (predictedLanguage === 'Java') {
      checkSyntaxMap(offlineData.java_syntax);
    } else if (predictedLanguage === 'Python') {
      checkSyntaxMap(offlineData.python_syntax);
    }

    const scoreThreshold = 0.2; // Adjust this value to set the minimum score for a "good" match

    // Logic to determine the final response
    if (bestMatchScore >= scoreThreshold && bestMatchResponse) {
        let responseText = "";
        if (bestMatchResponse.syntax) responseText += `Syntax:\n${bestMatchResponse.syntax}\n`;
        if (bestMatchResponse.explanation) responseText += `\nExplanation:\n${bestMatchResponse.explanation}\n`;
        if (bestMatchResponse.example) responseText += `\nExample:\n${bestMatchResponse.example}\n`;
        if (bestMatchResponse.output) responseText += `\nOutput:\n${bestMatchResponse.output}`;
        setResponse(responseText);
    } else {
        // No strong match found based on scoreThreshold
        if (!(containsJavaKeyword || containsPythonKeyword)) {
            // No explicit language keyword in query AND no strong match
            setResponse("It seems you're asking about syntax, but I'm not sure which language. Could you please specify Java or Python?");
        } else {
            // User specified a language (or one was predicted), but no strong match was found within that language's syntax
            setResponse(`Sorry, no match found for "${query}" in ${predictedLanguage || 'the specified language'} lesson modules. Please try rephrasing query.`);
        }
    }
  }, [query, loadingError, classifyLanguage, preprocess, offlineData, calculateMatchScore]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  if (loadingError) {
    return (
      <View style={[styles.container, { backgroundColor: theme.colors.background }, styles.centered]}>
        <Text style={[styles.errorText, { color: '#FF3B30' }]}>{loadingError}</Text>
        <Button title="Close" onPress={handleClose} color={theme.colors.accent} />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { borderBottomColor: theme.colors.accent }]}>
        <Text style={[styles.title, { color: theme.colors.textPrimary }]}>Cody</Text>
        <Button title="Close" onPress={handleClose} color={theme.colors.accent} />
      </View>
      <TextInput
        style={[styles.input, { backgroundColor: theme.colors.codeBackground, borderColor: theme.colors.accent, color: theme.colors.textPrimary }]}
        value={query}
        onChangeText={setQuery}
        placeholder="e.g., python if else syntax"
        placeholderTextColor={theme.colors.textTertiary}
      />
      <Button title="Ask" onPress={handleAsk} color={theme.colors.accent} />
      <ScrollView style={[styles.responseContainer, { backgroundColor: theme.colors.codeBackground, borderColor: theme.colors.accent }]}>
        <Text style={[styles.responseText, { color: theme.colors.textSecondary }]}>{response || "Ask me about Java or Python syntax!"}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    maxWidth: 500,
    maxHeight: '100%',
    alignSelf: 'center',
    width: '90%',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
  },
  input: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    borderWidth: 1,
  },
  responseContainer: {
    marginTop: 15,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 100,
    // maxHeight: 300, // Adjust as needed
  },
  responseText: {
    lineHeight: 20,
    fontSize: 14,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Cody;