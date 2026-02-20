import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// No NextButton on the last page of this section
// import NextButton from '@/components/NextButton';
// import { Link } from 'expo-router';

export default function ArraysPage() {
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
        <ScreenTitle title="Arrays" />

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Introduction to Arrays</Text>
          <Text style={styles.syntaxContent}>
            <Text>An array is a collection of similar types of data. In Java, arrays are objects. The elements of an array are stored in a contiguous memory location.</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Key points about Java arrays:</Text>{'\n'}
            <Text>• Arrays in Java are index-based, the first element of the array is stored at index 0.</Text>{'\n'}
            <Text>• Arrays have a fixed size that is determined when the array is created.</Text>{'\n'}
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Declaring an Array</Text>
          <Text style={styles.syntaxContent}>
            <Text>To declare an array in Java, you define the data type of the elements and then follow it by square brackets </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>[]</Text><Text> and the array name.</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>dataType</Text><Text> arrayName</Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>[];</Text> <Text>// or</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>dataType[]</Text><Text> arrayName</Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>;</Text>
            </Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int</Text><Text> numbers</Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>[];</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>String[]</Text><Text> names</Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>;</Text>
            </Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Creating (Initializing) an Array</Text>
          <Text style={styles.syntaxContent}>
            <Text>When you declare an array, it doesn't actually exist until you create it. You use the </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>new</Text><Text> keyword to create an array and specify its size.</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text>arrayName </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>= new</Text><Text> dataType</Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>[size];</Text>
            </Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>numbers</Text><Text> = </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>new int</Text><Text>[10];</Text> <Text>// Creates an integer array of size 10</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>names</Text><Text> = </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>new String</Text><Text>[5];</Text> <Text>// Creates a String array of size 5</Text>
            </Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Initializing an Array with Values</Text>
          <Text style={styles.syntaxContent}>
            <Text>You can also declare and initialize an array at the same time by providing the values within curly braces </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>{}</Text><Text>.</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>dataType</Text><Text> arrayName</Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>[] = {`{`}value1, value2, ..., valueN{`}`}</Text><Text>;</Text>
            </Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int</Text><Text> ages</Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>[] = {`{`}19, 22, 25, 30{`}`}</Text><Text>;</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>String[]</Text><Text> cars</Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>[] = {`{`}"BMW", "Mercedes", "Toyota"{`}`}</Text><Text>;</Text>
            </Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Accessing Array Elements</Text>
          <Text style={styles.syntaxContent}>
            <Text>You access array elements by their index. The index starts from 0 and goes up to </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>array.length - 1</Text><Text>.</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text>arrayName</Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>[index]</Text>
            </Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int</Text><Text> firstAge = ages</Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>[0];</Text> <Text>// Accesses the first element (19)</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>String</Text><Text> firstCar = cars</Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>[0];</Text> <Text>// Accesses the first element ("BMW")</Text>
            </Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Array Length</Text>
          <Text style={styles.syntaxContent}>
            <Text>To find out how many elements an array has, use the </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>length</Text><Text> property.</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int</Text><Text> numberOfAges = ages</Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>.length;</Text> <Text>// numberOfAges will be 4</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int</Text><Text> numberOfCars = cars</Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>.length;</Text> <Text>// numberOfCars will be 3</Text>
            </Text>
          </Text>
        </View>

        {/* No Next Button on the last page of this section */}
        <BackButton style={styles.backButton} />
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
  syntaxContent: {
    fontSize: 16,
    lineHeight: 22,
  },
  keyword: {
    fontWeight: 'bold',
  },
});