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

export default function VariablesTypesCastingPage() {
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
        <ScreenTitle title="Variables & Data Types" />

        <DropdownBlock
          title="Variables"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Declaration and Initialization:</Text>
              {'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>type </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>identifier </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>= </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textTertiary }]}>value</Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>;</Text>
              {'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>
              {'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>age </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>= </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textTertiary }]}>30</Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>;</Text>
              {'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>name </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>= </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textTertiary }]}>"Alice"</Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>;</Text>
            </Text>
          }
        />

        <DropdownBlock
          title="Primitive Data Types"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>byte:</Text> <Text style={{ color: theme.colors.textPrimary }}>Stores whole numbers from -128 to 127</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>short:</Text> <Text style={{ color: theme.colors.textPrimary }}>Stores whole numbers from -32,768 to 32,767</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int:</Text> <Text style={{ color: theme.colors.textPrimary }}>Stores whole numbers from -2,147,483,648 to 2,147,483,647</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>long:</Text> <Text style={{ color: theme.colors.textPrimary }}>Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>float:</Text> <Text style={{ color: theme.colors.textPrimary }}>Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>double:</Text> <Text style={{ color: theme.colors.textPrimary }}>Stores fractional numbers. Sufficient for storing 15 decimal digits</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>boolean:</Text> <Text style={{ color: theme.colors.textPrimary }}>Stores true or false values</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>char:</Text> <Text style={{ color: theme.colors.textPrimary }}>Stores a single character/letter or ASCII values</Text>
            </Text>
          }
        />

        <DropdownBlock
          title="Type Casting"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Widening Casting (implicit):</Text>
              {'\n'}
              <Text style={[styles.comment, { color: theme.colors.textTertiary }]}>
                <Text style={[{ fontFamily: 'monospace' }]}>byte <Text style={{ color: theme.colors.textTertiary }}>{'->'}</Text> short <Text style={{ color: theme.colors.textTertiary }}>{'->'}</Text> char <Text style={{ color: theme.colors.textTertiary }}>{'->'}</Text> int <Text style={{ color: theme.colors.textTertiary }}>{'->'}</Text> long <Text style={{ color: theme.colors.textTertiary }}>{'->'}</Text> float <Text style={{ color: theme.colors.textTertiary }}>{'->'}</Text> double</Text>
              </Text>
              {'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>myInt </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>= </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textTertiary }]}>9</Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>;</Text>
              {'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>double </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>myDouble </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>= </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>myInt</Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>;</Text>
              {'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Narrowing Casting (explicit):</Text>
              {'\n'}
              <Text style={[styles.comment, { color: theme.colors.textTertiary }]}>
                <Text style={[{ fontFamily: 'monospace' }]}>double <Text style={{ color: theme.colors.textTertiary }}>{'->'}</Text> float <Text style={{ color: theme.colors.textTertiary }}>{'->'}</Text> long <Text style={{ color: theme.colors.textTertiary }}>{'->'}</Text> int <Text style={{ color: theme.colors.textTertiary }}>{'->'}</Text> char <Text style={{ color: theme.colors.textTertiary }}>{'->'}</Text> short <Text style={{ color: theme.colors.textTertiary }}>{'->'}</Text> byte</Text>
              </Text>
              {'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>double </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>myDouble2 </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>= </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textTertiary }]}>9.78</Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>;</Text>
              {'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>myInt2 </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>= (</Text>
              <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int</Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>) </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>myDouble2</Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>;</Text>
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