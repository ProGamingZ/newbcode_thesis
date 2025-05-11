import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
import { FontAwesome } from '@expo/vector-icons';

interface DropdownProps {
  title: string;
  content: React.ReactNode;
}

const DropdownBlock: React.FC<DropdownProps> = ({ title, content }) => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={[styles.dropdownBlock, { backgroundColor: theme.colors.accent }]}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleVisibility}>
        <Text style={[styles.dropdownTitle, { color: theme.colors.textPrimary }]}>{title}</Text>
        <FontAwesome
          name={isVisible ? 'chevron-up' : 'chevron-down'}
          size={18}
          color={theme.colors.textPrimary}
        />
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.dropdownContent}>
          <Text style={styles.syntaxContent}>{content}</Text>
        </View>
      )}
    </View>
  );
};

export default function LoopsControlFlowPage() {
  const { theme } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContentContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.container}>
        <BackButton style={styles.backButton} />
        <ScreenTitle title="Loops & Control Flow" />

        <DropdownBlock
          title="while Loop"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={{ color: theme.colors.textPrimary }}>The </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>while</Text><Text style={{ color: theme.colors.textPrimary }}> loop executes a block of code as long as a specified condition is true.</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>while </Text>
                <Text> {`("condition") {`} </Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text>
              </Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int </Text>
                <Text style={[{ color: theme.colors.textSecondary }]}>i </Text>
                <Text style={[{ color: theme.colors.textSecondary }]}>= </Text>
                <Text style={[{ color: theme.colors.textTertiary }]}>0</Text><Text style={[{ color: theme.colors.textSecondary }]}>;</Text>{'\n'}
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>while </Text>
                <Text> {`(i < 5) {`} </Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                  <Text>({`i`});</Text>{'\n'}
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>i++</Text><Text style={[{ color: theme.colors.textSecondary }]}>;</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text>
              </Text>
            </Text>
          }
        />

        <DropdownBlock
          title="do-while Loop"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={{ color: theme.colors.textPrimary }}>The </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>do-while</Text><Text style={{ color: theme.colors.textPrimary }}> loop executes a block of code once, before checking if the condition is true, and then repeats the loop as long as the condition is true.</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>do </Text>{`{`}{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>while </Text>
                <Text> {`("condition");`}</Text>
              </Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int </Text>
                <Text style={[{ color: theme.colors.textSecondary }]}>i </Text>
                <Text style={[{ color: theme.colors.textSecondary }]}>= </Text>
                <Text style={[{ color: theme.colors.textTertiary }]}>0</Text><Text style={[{ color: theme.colors.textSecondary }]}>;</Text>{'\n'}
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>do </Text>{`{`}{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                  <Text>({`i`});</Text>{'\n'}
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>i++</Text><Text style={[{ color: theme.colors.textSecondary }]}>;</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>while </Text>
                <Text> {`(i < 5);`}</Text>
              </Text>
            </Text>
          }
        />

        <DropdownBlock
          title="for Loop"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={{ color: theme.colors.textPrimary }}>The </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>for</Text><Text style={{ color: theme.colors.textPrimary }}> loop executes a block of code a specific number of times.</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>for </Text>
                <Text> {`("initialization; condition; increment/decrement") {`} </Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text>
              </Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>for </Text>
                <Text> {`(int i = 0; i < 5; i++) {`} </Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                  <Text>({`i`});</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text>
              </Text>
            </Text>
          }
        />

        <DropdownBlock
          title="Control Flow Statements"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>break:</Text> <Text style={{ color: theme.colors.textPrimary }}>Terminates the loop or switch statement and transfers execution to the statement immediately following the loop or switch.</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>continue:</Text> <Text style={{ color: theme.colors.textPrimary }}>Skips the current iteration of a loop and continues with the next iteration.</Text>{'\n\n'}
            </Text>
          }
        />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
    paddingVertical: 40,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '90%',
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  dropdownBlock: {
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  dropdownTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Will be overridden by theme
  },
  dropdownContent: {
    paddingTop: 10,
  },
  syntaxBlock: {
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  syntaxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Will be overridden by theme
    marginBottom: 10,
  },
  syntaxContent: {fontSize: 16,
    lineHeight: 22,
  },
  keyword: {
    fontWeight: 'bold',
  },
  comment: {
    fontStyle: 'italic',
  },
  indentedCode: {
    marginLeft: 20,
  },
});