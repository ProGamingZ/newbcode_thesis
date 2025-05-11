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
        <ScreenTitle title="Python Dictionaries - Part 3 (Looping)" />

        <DropdownBlock
          title="Looping Through Keys"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                By default, when you iterate over a dictionary in a <Text style={[styles.bold, { color: primaryColor }]}>for</Text> loop, you are iterating over its keys. You can also explicitly use the <Text style={[styles.bold, { color: primaryColor }]}>keys()</Text> method.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'city'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'New York'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}># Looping through keys (default)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>key</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`key`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: name, age, city (in insertion order from Python 3.7+)'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}># Looping through keys using .keys()</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>key</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>keys</Text><Text style={{ color: primaryColor }}>():</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`key`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: name, age, city (in insertion order)'}</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Looping Through Values"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                To iterate through the values of a dictionary, you can use the <Text style={[styles.bold, { color: primaryColor }]}>values()</Text> method.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'city'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'New York'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>value</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>values</Text><Text style={{ color: primaryColor }}>():</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`value`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: Alice, 30, New York (in corresponding order)'}</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Looping Through Key-Value Pairs"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                To iterate through both the keys and their corresponding values, you can use the <Text style={[styles.bold, { color: primaryColor }]}>items()</Text> method. This method returns a view object that displays a list of a dictionary's key-value tuple pairs.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'city'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'New York'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>key</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>value</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>items</Text><Text style={{ color: primaryColor }}>():</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`Key:`}</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>key</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>{`, Value:`}</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>value</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: Key: name, Value: Alice'}</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>{'#         Key: age, Value: 30'}</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>{'#         Key: city, Value: New York'}</Text>
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