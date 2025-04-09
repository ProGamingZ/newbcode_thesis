import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
import { router } from 'expo-router';
import Button from '@/components/Button';

export default function JavaSyntaxMenuPage() {
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
        <ScreenTitle title="Procedural" />

        <View style={styles.menuContainer}>
            <Button title="Introduction" onPress={() => router.push('/Courses/Python/1PythonIntroduction')} />
            <Button title="Variables" onPress={() => router.push('/Courses/Python/2Variables')} />
            <Button title="Data Types #1" onPress={() => router.push('/Courses/Python/3DataTypes1')} />
            <Button title="Data Types #2" onPress={() => router.push('/Courses/Python/4DataTypes2')} />
            <Button title="Data Types #3" onPress={() => router.push('/Courses/Python/5DataTypes3')} />
            <Button title="Numbers & Casting" onPress={() => router.push('/Courses/Python/6NumbersCasting')} />
            <Button title="Strings #1" onPress={() => router.push('/Courses/Python/7Strings1')} />
            <Button title="Strings #2" onPress={() => router.push('/Courses/Python/8Strings2')} />
            <Button title="Strings #3" onPress={() => router.push('/Courses/Python/9Strings3')} />
            <Button title="Booleans, Comparisons" onPress={() => router.push('/Courses/Python/10BooleansComparisons')} />
            <Button title="Operators #1" onPress={() => router.push('/Courses/Python/11Operators1')} />
            <Button title="Operators #2" onPress={() => router.push('/Courses/Python/12Operators2')} />
            <Button title="Operators #3" onPress={() => router.push('/Courses/Python/13Operators3')} />
            <Button title="Operators #4" onPress={() => router.push('/Courses/Python/14Operators4')} />
            <Button title="Conditionals" onPress={() => router.push('/Courses/Python/15Conditionals')} />
            <Button title="Loops" onPress={() => router.push('/Courses/Python/16Loops')} />
            <Button title="Lists #1" onPress={() => router.push('/Courses/Python/17Lists1')} />
            <Button title="Lists #2" onPress={() => router.push('/Courses/Python/18Lists2')} />
            <Button title="Lists #3" onPress={() => router.push('/Courses/Python/19Lists3')} />
            <Button title="Lists #4" onPress={() => router.push('/Courses/Python/20Lists4')} />
            <Button title="Tuples #1" onPress={() => router.push('/Courses/Python/21Tuples1')} />
            <Button title="Tuples #2" onPress={() => router.push('/Courses/Python/22Tuples2')} />
            <Button title="Sets #1" onPress={() => router.push('/Courses/Python/23Sets1')} />
            <Button title="Sets #2" onPress={() => router.push('/Courses/Python/24Sets2')} />
            <Button title="Dictionaries #1" onPress={() => router.push('/Courses/Python/25Dictionaries1')} />
            <Button title="Dictionaries #2" onPress={() => router.push('/Courses/Python/26Dictionaries2')} />
            <Button title="Dictionaries #3" onPress={() => router.push('/Courses/Python/27Dictionaries3')} />
            <Button title="Arrays" onPress={() => router.push('/Courses/Python/28Arrays')} />
        </View>
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
    alignItems: 'center', // Center items horizontally
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  menuContainer: {
    flex: 1,
    width: '100%',
    marginTop: 0,
    alignItems: 'center', // Center buttons in the container
  },
  menuButton: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});