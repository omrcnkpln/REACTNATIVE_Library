import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { InputAccessoryView } from 'react-native-web';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';
import reactDom from 'react-dom';

export default function App() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text>deneme !!</Text>
      <StatusBar style="auto" />
      
      <View>
        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

      <View>
        <Text>denme</Text> 
        <Text>denme</Text> 

        
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="denemelers"
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '30px',
    borderColor: "rebeccapurple",
  },
});
