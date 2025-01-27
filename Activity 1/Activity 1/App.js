import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [text,add,sch, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text,add,sch}
          placeholder="NAME: "  
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text,add,sch}
          placeholder="AGE: "
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text,add,sch}
          placeholder="ADDRESS: "
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text,add,sch}
          placeholder="SCHOOL: "
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text,add,sch}
          placeholder="COURSE: "
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text,add,sch}
          placeholder="EMAIL: "
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="CONTACT NO: "
          keyboardType="numeric"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;