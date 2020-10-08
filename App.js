import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image,
  Button,
  Alert,
  TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight
} from 'react-native';
// View is like <div>, a container component
// View -> UIView on iOS
// SafeAreaView only works on iOS 

export default function App() {

  const handlePress = () => console.log('clicked')

  return (
    <SafeAreaView style={[styles.container, containerStyle.container]}>
      <Text numberOfLines={1} onPress={handlePress}>I'm the king of the deck, tryna find my queen</Text>
      <TouchableHighlight onPress={handlePress}>
        <Image source={{ 
          width: 200,
          height: 200,
          uri: "https://picsum.photos/200/300"}}/>
      </TouchableHighlight>
      <StatusBar style="auto" />
      <Button 
        title='alert' 
        onPress={() => Alert.alert("my title", "my message", [
          {text: "Yes", onPress: () => console.log("yes")},
          {text: "No", onPress: () => console.log("no")}
        ])}
        color='yellow'/>
      <Button
        title='prompt'
        onPress={() => Alert.prompt("my title", "my message", (text) => console.log(text)) }
        color='green'/>
    </SafeAreaView>
  );
}

// its better to call StyleSheet.create() bc it makes it easier to find errors 
// and misspellings
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const containerStyle = StyleSheet.create({ 
  container: {
    backgroundColor: 'pink' 
  },
});