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
          {content}
        </View>
      )}
    </View>
  );
};

export default function PythonArithmeticOperatorsPage() {
  const { theme } = useTheme();

  const primaryColor = theme.colors.textPrimary;
  const secondaryColor = theme.colors.textSecondary;
  const codeBackgroundColor = theme.colors.codeBackground;
  const accentColor = theme.colors.accent;

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContentContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.container}>
        <BackButton style={styles.backButton} />
        <ScreenTitle title="Python Loops" />

        <DropdownBlock
          title="Python Loops"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Loops are used to execute a block of code repeatedly. Python provides two main types of loops: <Text style={[styles.bold, { color: primaryColor }]}>for</Text> loops and <Text style={[styles.bold, { color: primaryColor }]}>while</Text> loops.
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="'for' Loops"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                A <Text style={[styles.bold, { color: primaryColor }]}>for</Text> loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={[styles.variable, { color: primaryColor }]}>item</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={[styles.variable, { color: primaryColor }]}>iterable</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>  # Code to execute for each item</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Example iterating through a list:
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'apple'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'banana'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'cherry'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={[styles.variable, { color: primaryColor }]}>fruit</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruit`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: apple, banana, cherry (each on a new line)</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Example using the <Text style={[styles.bold, { color: primaryColor }]}>range()</Text> function to loop a specific number of times:
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={[styles.variable, { color: primaryColor }]}>i</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={[styles.keyword, { color: primaryColor }]}>range</Text><Text style={[{ color: primaryColor }]}>({<Text style={[styles.value, { color: secondaryColor }]}>5</Text>})</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`i`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 0, 1, 2, 3, 4 (each on a new line)</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="'while' Loops"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                A <Text style={[styles.bold, { color: primaryColor }]}>while</Text> loop executes a block of code as long as a specified condition is <Text style={[styles.bold, { color: primaryColor }]}>True</Text>.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.keyword, { color: primaryColor }]}>while</Text> <Text style={[styles.variable, { color: primaryColor }]}>condition</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>  # Code to execute while the condition is True</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>  # Make sure the condition eventually becomes False to avoid infinite loops</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Example of a <Text style={[styles.bold, { color: primaryColor }]}>while</Text> loop:
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>count</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>0</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>while</Text> <Text style={[styles.variable, { color: primaryColor }]}>count</Text> <Text style={[styles.operator, { color: primaryColor }]}>&lt;</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`Count is:`}</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.variable, { color: primaryColor }]}>count</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text>{'\n'}
                <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.variable, { color: primaryColor }]}>count</Text> <Text style={[styles.operator, { color: primaryColor }]}>+=</Text> <Text style={[styles.value, { color: secondaryColor }]}>1</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># Output:</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># Count is: 0</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># Count is: 1</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># Count is: 2</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># Count is: 3</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># Count is: 4</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="'break' and 'continue' Statements"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can control the flow of loops using <Text style={[styles.bold, { color: primaryColor }]}>break</Text> and <Text style={[styles.bold, { color: primaryColor }]}>continue</Text> statements.
              </Text>
              <View style={{ marginLeft: 15 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'break'</Text>
                <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                  The <Text style={[styles.bold, { color: primaryColor }]}>break</Text> statement immediately terminates the loop and the program control flows to the statement immediately following the loop.
                </Text>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={[styles.variable, { color: primaryColor }]}>i</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={[styles.keyword, { color: primaryColor }]}>range</Text><Text style={[{ color: primaryColor }]}>({<Text style={[styles.value, { color: secondaryColor }]}>10</Text>})</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                  <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={[styles.variable, { color: primaryColor }]}>i</Text> <Text style={[styles.operator, { color: primaryColor }]}>==</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                  <Text style={[{ color: primaryColor }]}>    </Text><Text style={[styles.keyword, { color: primaryColor }]}>break</Text>{'\n'}
                  <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`i is:`}</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.variable, { color: primaryColor }]}>i</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text>{'\n'}
                  <Text style={[styles.comment, { color: secondaryColor }]}># Output: 0, 1, 2, 3, 4</Text>
                </Text>
              </View>

              <View style={{ marginLeft: 15, marginTop: 10 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'continue'</Text>
                <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                  The <Text style={[styles.bold, { color: primaryColor }]}>continue</Text> statement skips the rest of the code inside the current iteration of the loop and proceeds to the next iteration.
                </Text>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={[styles.variable, { color: primaryColor }]}>i</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={[styles.keyword, { color: primaryColor }]}>range</Text><Text style={[{ color: primaryColor }]}>({<Text style={[styles.value, { color: secondaryColor }]}>10</Text>})</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                  <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={[styles.variable, { color: primaryColor }]}>i</Text> <Text style={[styles.operator, { color: primaryColor }]}>==</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                  <Text style={[{ color: primaryColor }]}>    </Text><Text style={[styles.keyword, { color: primaryColor }]}>continue</Text>{'\n'}
                  <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`i is:`}</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.variable, { color: primaryColor }]}>i</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text>{'\n'}
                  <Text style={[styles.comment, { color: secondaryColor }]}># Output: 0, 1, 2, 3, 4, 6, 7, 8, 9 (5 is skipped)</Text>
                </Text>
              </View>
            </View>
          }
        />
        <BackButton style={styles.backButton} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '90%',
    paddingHorizontal: 15,
    alignItems: 'flex-start',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 10,
  },
  dropdownBlock: {
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
    overflow: 'hidden',
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  dropdownTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  dropdownContent: {
    padding: 12,
    paddingTop: 0,
  },
  dropdownContentText: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 6,
    textAlign: 'justify',
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  codeBlock: {
    borderRadius: 6,
    padding: 8,
    marginVertical: 6,
    fontFamily: 'monospace',
    fontSize: 13,
  },
  codeLine: {
    lineHeight: 18,
  },
  keyword: {
    fontWeight: 'bold',
  },
  operator: {},
  value: {},
  variable: {},
  comment: {
    color: 'gray',
    fontStyle: 'italic',
    fontSize: 13,
  },
});