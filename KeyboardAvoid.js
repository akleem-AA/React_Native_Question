import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard, KeyboardAvoidingView } from 'react-native';

const App = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.scrollContent}>
        {/* Header View */}
        <View style={styles.header}>
          <Text>Header</Text>
        </View>

        {/* Centered Content View (Input and Button) */}
        <View style={styles.centeredContent}>
          <TextInput placeholder="Enter something" style={styles.input} />
          <Button title="Forgot" onPress={() => {}} />
        </View>

        {/* Spacer to push content above the keyboard */}
        {keyboardVisible && <View style={styles.spacer} />}
      </View>

      {/* Footer View */}
      <View style={[styles.footer, keyboardVisible && styles.footerWithKeyboard]}>
        <Text>Footer</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: 'lightgray',
    alignItems: 'center',
    padding: 20,
  },
  centeredContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    margin: 20,
    paddingLeft: 10,
  },
  spacer: {
    flex: 1,
  },
  footer: {
    backgroundColor: 'lightgray',
    alignItems: 'center',
    padding: 20,
  },
  footerWithKeyboard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default App;
