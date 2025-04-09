import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

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

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Python Loops</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Loops are used to execute a block of code repeatedly. Python provides two main types of loops: <Text style={[styles.bold, { color: primaryColor }]}>for</Text> loops and <Text style={[styles.bold, { color: primaryColor }]}>while</Text> loops.
          </Text>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'for' Loops</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              A <Text style={[styles.bold, { color: primaryColor }]}>for</Text> loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>item</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>iterable</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={[styles.comment, { color: secondaryColor }]}>{'  # Code to execute for each item'}</Text>
            </Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Example iterating through a list:
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>fruit</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>fruits</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruit`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: apple, banana, cherry (each on a new line)'}</Text>
            </Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Example using the <Text style={[styles.bold, { color: primaryColor }]}>range()</Text> function to loop a specific number of times:
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>i</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={[styles.keyword, { color: primaryColor }]}>range</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>5</Text><Text style={{ color: primaryColor }}>)</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`i`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 0, 1, 2, 3, 4 (each on a new line)'}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'while' Loops</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              A <Text style={[styles.bold, { color: primaryColor }]}>while</Text> loop executes a block of code as long as a specified condition is <Text style={[styles.bold, { color: primaryColor }]}>True</Text>.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={[styles.keyword, { color: primaryColor }]}>while</Text> <Text style={{ color: primaryColor }}>condition</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={[styles.comment, { color: secondaryColor }]}>{'  # Code to execute while the condition is True'}</Text>
              <Text style={[styles.comment, { color: secondaryColor }]}>{'  # Make sure the condition eventually becomes False to avoid infinite loops'}</Text>
            </Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Example of a <Text style={[styles.bold, { color: primaryColor }]}>while</Text> loop:
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>count</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>0</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>while</Text> <Text style={{ color: primaryColor }}>count</Text> <Text style={{ color: primaryColor }}>{'<'}</Text> <Text style={{ color: secondaryColor }}>5</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`Count is:`}</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>count</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
              <Text style={{ color: primaryColor }}>  </Text><Text style={{ color: primaryColor }}>count</Text> <Text style={{ color: primaryColor }}>+=</Text> <Text style={{ color: secondaryColor }}>1</Text>{'\n'}
              <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output:'}</Text>{'\n'}
              <Text style={[styles.comment, { color: secondaryColor }]}>{'# Count is: 0'}</Text>{'\n'}
              <Text style={[styles.comment, { color: secondaryColor }]}>{'# Count is: 1'}</Text>{'\n'}
              <Text style={[styles.comment, { color: secondaryColor }]}>{'# Count is: 2'}</Text>{'\n'}
              <Text style={[styles.comment, { color: secondaryColor }]}>{'# Count is: 3'}</Text>{'\n'}
              <Text style={[styles.comment, { color: secondaryColor }]}>{'# Count is: 4'}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'break' and 'continue' Statements</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              You can control the flow of loops using <Text style={[styles.bold, { color: primaryColor }]}>break</Text> and <Text style={[styles.bold, { color: primaryColor }]}>continue</Text> statements.
            </Text>
            <View style={{ marginLeft: 15 }}>
              <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'break'</Text>
              <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>break</Text> statement immediately terminates the loop and the program control flows to the statement immediately following the loop.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>i</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={[styles.keyword, { color: primaryColor }]}>range</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>10</Text><Text style={{ color: primaryColor }}>)</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={{ color: primaryColor }}>i</Text> <Text style={{ color: primaryColor }}>==</Text> <Text style={{ color: secondaryColor }}>5</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
                <Text style={{ color: primaryColor }}>    </Text><Text style={[styles.keyword, { color: primaryColor }]}>break</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`i is:`}</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>i</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 0, 1, 2, 3, 4'}</Text>
              </Text>
            </View>

            <View style={{ marginLeft: 15, marginTop: 10 }}>
              <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'continue'</Text>
              <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>continue</Text> statement skips the rest of the code inside the current iteration of the loop and proceeds to the next iteration.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>i</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={[styles.keyword, { color: primaryColor }]}>range</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>10</Text><Text style={{ color: primaryColor }}>)</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={{ color: primaryColor }}>i</Text> <Text style={{ color: primaryColor }}>==</Text> <Text style={{ color: secondaryColor }}>5</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
                <Text style={{ color: primaryColor }}>    </Text><Text style={[styles.keyword, { color: primaryColor }]}>continue</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`i is:`}</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>i</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 0, 1, 2, 3, 4, 6, 7, 8, 9 (5 is skipped)'}</Text>
              </Text>
            </View>
          </View>
        </View>

        {/* <Link href="/PythonFunctionsPage" asChild>
          <NextButton title="Next: Python Functions" />
        </Link> */}
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  section: {
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: 'justify',
  },
  subSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#000', // Fallback color
  },
  bold: {
    fontWeight: 'bold',
  },
  codeBlock: {
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    fontFamily: 'monospace',
    fontSize: 14,
    lineHeight: 20,
  },
  comment: {
    color: 'gray',
    fontSize: 14,
    fontStyle: 'italic',
  },
  keyword: {
    fontWeight: 'bold',
  },

});