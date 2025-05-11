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

export default function ConditionalsPage() {
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
        <ScreenTitle title="Conditionals" />

        <DropdownBlock
          title="if Statement"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={{ color: theme.colors.textPrimary }}>The </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if</Text><Text style={{ color: theme.colors.textPrimary }}> statement executes a block of code if a specified condition is true.</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if </Text>
                <Text> {`("condition") {`} </Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed if the condition is true</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text>
              </Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int </Text>
                <Text style={[{ color: theme.colors.textSecondary }]}>x </Text>
                <Text style={[{ color: theme.colors.textSecondary }]}>= </Text>
                <Text style={[{ color: theme.colors.textTertiary }]}>20</Text><Text style={[{ color: theme.colors.textSecondary }]}>;</Text>{'\n'}
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if </Text>
                <Text> {`(x > 10) {`} </Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                  <Text> ("x is greater than 10");</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text>
              </Text>
            </Text>
          }
        />

        <DropdownBlock
          title="else Statement"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={{ color: theme.colors.textPrimary }}>The </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else</Text><Text style={{ color: theme.colors.textPrimary }}> statement executes a block of code if the condition in the </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if</Text><Text style={{ color: theme.colors.textPrimary }}> statement is false.</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if </Text>
                <Text> {`("condition") {`} </Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed if the condition is true</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else</Text> <Text>{`{`}</Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed if the condition is false</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text>
              </Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int </Text>
                <Text style={[{ color: theme.colors.textSecondary }]}>x </Text>
                <Text style={[{ color: theme.colors.textSecondary }]}>= </Text>
                <Text style={[{ color: theme.colors.textTertiary }]}>5</Text><Text style={[{ color: theme.colors.textSecondary }]}>;</Text>{'\n'}
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if </Text>
                <Text> {`(x > 10) {`} </Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                  <Text> ("x is greater than 10");</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else</Text> <Text>{`{`}</Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                  <Text> ("x is not greater than 10");</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text>
              </Text>
            </Text>
          }
        />

        <DropdownBlock
          title="else if Statement"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={{ color: theme.colors.textPrimary }}>The </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else if</Text><Text style={{ color: theme.colors.textPrimary }}> statement allows you to check multiple conditions in sequence.</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if </Text>
                <Text> {`("condition1") {`} </Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed if condition1 is true</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else if </Text>
                <Text> {`("condition2") {`} </Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed if condition1 is false and condition2 is true</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else</Text> <Text>{`{`}</Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed if all conditions are false</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text>
              </Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int </Text>
                <Text style={[{ color: theme.colors.textSecondary }]}>time </Text>
                <Text style={[{ color: theme.colors.textSecondary }]}>= </Text>
                <Text style={[{ color: theme.colors.textTertiary }]}>20</Text><Text style={[{ color: theme.colors.textSecondary }]}>;</Text>{'\n'}
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if </Text>
                <Text> {`(time < 10) {`} </Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                  <Text> ("Good morning.");</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else if </Text>
                <Text> {`(time < 20) {`} </Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                  <Text> ("Good day.");</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else</Text> <Text>{`{`}</Text>{'\n'}
                <Text style={styles.indentedCode}>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                  <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                  <Text> ("Good evening.");</Text>{'\n'}
                </Text>
                <Text>{`}`}</Text>
              </Text>
            </Text>
          }
        />
        <DropdownBlock
        title="Ternary Operator"
        content={
          <Text style={styles.syntaxContent}>
            <Text style={{ color: theme.colors.textPrimary }}>The ternary operator is a shorthand </Text>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if-else</Text>
            <Text style={{ color: theme.colors.textPrimary }}> statement. It consists of three operands and can be used in place of simple </Text>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if-else</Text>
            <Text style={{ color: theme.colors.textPrimary }}> blocks.</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>
              <Text>condition </Text>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>?</Text>
              <Text> value_if_true </Text>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>:</Text>
              <Text> value_if_false</Text>
            </Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int </Text>
              <Text>age </Text>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>= </Text>
              <Text style={[{ color: theme.colors.textTertiary }]}>18</Text>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>;</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>String </Text>
              <Text>message </Text>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>= </Text>
              <Text> (age {'>='} </Text>
              <Text style={[{ color: theme.colors.textTertiary }]}>18</Text>
              <Text>) </Text>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>?</Text>
              <Text> "You are an adult." </Text>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>:</Text>
              <Text> "You are a minor.";</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>System</Text>
              <Text style={{ color: theme.colors.textPrimary }}>.</Text>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>out</Text>
              <Text style={{ color: theme.colors.textPrimary }}>.</Text>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>println</Text>
              <Text>(message); </Text><Text style={[{ color: theme.colors.textTertiary }]}>// Output: You are an adult.</Text>
            </Text>
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