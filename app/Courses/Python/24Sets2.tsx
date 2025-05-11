
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

export default function PythonTuplesPage() {
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
        <ScreenTitle title="Python Sets (Set Operations)" />

        

        <DropdownBlock
          title="'union()' and '|' Operator (OR)"
          content={
            <View style={{ marginLeft: 15 }}>
              <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14, marginBottom: 8 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>union()</Text> method returns a new set containing all items from both sets. The <Text style={[styles.bold, { color: primaryColor }]}>|</Text> (pipe) operator does the same.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'a'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>set2</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'c'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>union_set_method</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>union</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: primaryColor }}>set2</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`union_set_method`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'a', 'b', 'c'}"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>union_set_operator</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>|</Text> <Text style={{ color: primaryColor }}>set2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`union_set_operator`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'a', 'b', 'c'}"}</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="'intersection()' and '&' Operator (AND)"
          content={
            <View style={{ marginLeft: 15 }}>
              <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14, marginBottom: 8 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>intersection()</Text> method returns a new set containing only the items that are present in both sets. The <Text style={[styles.bold, { color: primaryColor }]}>&</Text> (ampersand) operator does the same.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'a'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'c'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>set2</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'c'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'d'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>intersection_set_method</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>intersection</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: primaryColor }}>set2</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`intersection_set_method`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'b', 'c'}"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>intersection_set_operator</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>&</Text> <Text style={{ color: primaryColor }}>set2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`intersection_set_operator`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'b', 'c'}"}</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="'difference()' and '-' Operator"
          content={
            <View style={{ marginLeft: 15 }}>
              <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14, marginBottom: 8 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>difference()</Text> method returns a new set containing items from the first set that are not present in the second set. The <Text style={[styles.bold, { color: primaryColor }]}>-</Text> (minus) operator does the same.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'a'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'c'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>set2</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'c'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'d'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>difference_set_method</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>difference</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: primaryColor }}>set2</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`difference_set_method`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'a'}"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>difference_set_operator</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>-</Text> <Text style={{ color: primaryColor }}>set2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`difference_set_operator`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'a'}"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>difference_set_reverse</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set2</Text> <Text style={{ color: primaryColor }}>-</Text> <Text style={{ color: primaryColor }}>set1</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`difference_set_reverse`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'d'}"}</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="'symmetric_difference()' and '^' Operator"
          content={
            <View style={{ marginLeft: 15 }}>
              <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14, marginBottom: 8 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>symmetric_difference()</Text> method returns a new set containing all items from both sets except for the items that are common to both. The <Text style={[styles.bold, { color: primaryColor }]}>^</Text> (caret) operator does the same.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'a'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'c'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>set2</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'c'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'d'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>symmetric_difference_method</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>symmetric_difference</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: primaryColor }}>set2</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`symmetric_difference_method`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'a', 'd'}"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>symmetric_difference_operator</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>^</Text> <Text style={{ color: primaryColor }}>set2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`symmetric_difference_operator`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'a', 'd'}"}</Text>
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