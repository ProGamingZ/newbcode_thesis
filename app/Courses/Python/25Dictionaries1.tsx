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

export default function PythonDictionariesPart1Page() {
  const { theme } = useTheme();

  const accentColor = theme.colors.accent;
  const primaryColor = theme.colors.textPrimary;
  const secondaryColor = theme.colors.textSecondary;
  const codeBackgroundColor = theme.colors.codeBackground;

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContentContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.container}>
        <BackButton style={styles.backButton} />
        <ScreenTitle title="Python Dictionaries - Part 1" />

        <DropdownBlock
          title="Introduction to Python Dictionaries"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Python dictionaries are unordered, mutable collections of key-value pairs. Unlike lists and tuples that are indexed by a range of numbers, dictionaries are indexed by <Text style={[styles.bold, { color: primaryColor }]}>keys</Text>, which can be of any immutable type (like strings, numbers, or tuples).
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Creating Dictionaries"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can create a dictionary by placing key-value pairs inside curly braces <Text style={[styles.operator, { color: primaryColor }]}>{}</Text>. Each key is separated from its value by a colon <Text style={[styles.operator, { color: primaryColor }]}>:</Text>, and key-value pairs are separated by commas <Text style={[styles.operator, { color: primaryColor }]}>,</Text>.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.keyword, { color: primaryColor }]}>empty_dict = </Text>
                <Text style={{ color: secondaryColor }}>{'{}'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>student = </Text>
                <Text style={{ color: secondaryColor }}>{'{\n'}</Text>
                <Text style={{ color: secondaryColor }}>  </Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text>{'\n'}
                <Text style={{ color: secondaryColor }}>  </Text><Text style={{ color: secondaryColor }}>'age'</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={{ color: secondaryColor }}>20</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text>{'\n'}
                <Text style={{ color: secondaryColor }}>  </Text><Text style={{ color: secondaryColor }}>'major'</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={{ color: secondaryColor }}>'Computer Science'</Text>{'\n'}
                <Text style={{ color: secondaryColor }}>{'}'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>grades = </Text>
                <Text style={{ color: secondaryColor }}>{'\{ 1: \'A\', 2: \'B\', 3: \'C\' \}'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>data = </Text>
                <Text style={{ color: secondaryColor }}>{'{\n'}</Text>
                <Text style={{ color: secondaryColor }}>  </Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={{ color: secondaryColor }}>'Bob'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text>{'\n'}
                <Text style={{ color: secondaryColor }}>  </Text><Text style={{ color: secondaryColor }}>(</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: secondaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: secondaryColor }}>)</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={{ color: secondaryColor }}>'coordinates'</Text>{'\n'}
                <Text style={{ color: secondaryColor }}>{'}'}</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Keys in a dictionary must be unique. If you try to use the same key multiple times, the last assigned value will overwrite the previous ones.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.keyword, { color: primaryColor }]}>duplicate_keys = </Text>
                <Text style={{ color: secondaryColor }}>{'\{ \'a\': 1, \'b\': 2, \'a\': 3 \}'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text>
                <Text style={{ color: secondaryColor }}>{'(duplicate_keys)'}</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'a': 3, 'b': 2}"}</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Accessing Items in a Dictionary"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can access the value of a specific item in a dictionary by referring to its key using square brackets <Text style={[styles.operator, { color: primaryColor }]}>[]</Text>.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.keyword, { color: primaryColor }]}>student = </Text>
                <Text style={{ color: secondaryColor }}>{'\{ \'name\': \'Alice\', \'age\': 20, \'major\': \'Computer Science\' \}'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>name = student</Text><Text style={{ color: secondaryColor }}>['name']</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 'Alice'</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>age = student</Text><Text style={{ color: secondaryColor }}>['age']</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 20</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                If you try to access a key that does not exist in the dictionary, it will raise a <Text style={[styles.keyword, { color: primaryColor }]}>KeyError</Text>. To avoid this, you can use the <Text style={[styles.keyword, { color: primaryColor }]}>get()</Text> method.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.keyword, { color: primaryColor }]}>student = </Text>
                <Text style={{ color: secondaryColor }}>{'\{ \'name\': \'Alice\', \'age\': 20 \}'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>name = student</Text><Text style={{ color: secondaryColor }}>.get('name')</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 'Alice'</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>major = student</Text><Text style={{ color: secondaryColor }}>.get('major')</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: None (if key doesn't exist)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>city = student</Text><Text style={{ color: secondaryColor }}>.get('city', 'Unknown')</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 'Unknown' (default value if key doesn't exist)</Text>
              </Text>
            </View>
          }
        />
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