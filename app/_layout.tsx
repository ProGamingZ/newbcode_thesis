import { Stack } from "expo-router";
import { LogBox, StatusBar } from "react-native";
import { StyleSheet} from "react-native"; // Import View
import { ThemeProvider, useTheme } from '@/theme/ThemeContext'; // Import useTheme

LogBox.ignoreAllLogs(true);

function RootLayoutInner() {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar
        barStyle={theme.mode === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={theme.colors.background}
      />
      <Stack>
        //home
        <Stack.Screen name="index"options={{headerShown: false,}}/>
        <Stack.Screen name="Purpose"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses"options={{headerShown: false,}}/>
        <Stack.Screen name="SyntaxPage"options={{headerShown: false,}}/>
        <Stack.Screen name="References"options={{headerShown: false,}}/>
        //end of home
        //courses playground
         <Stack.Screen name="IDEs/JavaIDE"options={{headerShown: false,}}/>
         <Stack.Screen name="IDEs/PythonIDE"options={{headerShown: false,}}/>
        //end of courses playground
        //courses Java
        <Stack.Screen name="Courses/Java/JavaMenu"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Java/1JavaIntroduction"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Java/2Variables"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Java/3Operators"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Java/4StringsMath"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Java/5Conditionals"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Java/6Loops"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Java/7Arrays"options={{headerShown: false,}}/>
        //end of courses Java
        //courses Python
        <Stack.Screen name="Courses/Python/PythonMenu"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/1PythonIntroduction"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/2Variables"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/3DataTypes1"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/4DataTypes2"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/5DataTypes3"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/6NumbersCasting"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/7Strings1"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/8Strings2"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/9Strings3"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/10BooleansComparisons"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/11Operators1"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/12Operators2"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/13Operators3"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/14Operators4"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/15Conditionals"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/16Loops"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/17Lists1"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/18Lists2"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/19Lists3"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/20Lists4"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/21Tuples1"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/22Tuples2"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/23Sets1"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/24Sets2"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/25Dictionaries1"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/26Dictionaries2"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/27Dictionaries3"options={{headerShown: false,}}/>
        <Stack.Screen name="Courses/Python/28Arrays"options={{headerShown: false,}}/>
        //end of courses Oython
        //references
        <Stack.Screen name="Referencess/Tutorials"options={{headerShown: false,}}/>
        <Stack.Screen name="Referencess/Websites"options={{headerShown: false,}}/>
        <Stack.Screen name="Referencess/OnlineCompilers"options={{headerShown: false,}}/>
         <Stack.Screen name="Referencess/IDEs"options={{headerShown: false,}}/>
        //end of references
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutInner />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  size: {
    backgroundColor: "red",
  },
});