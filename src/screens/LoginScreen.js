import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
      <TextInput style={styles.input} placeholder="Пароль" secureTextEntry={true} />
      <Button title="Увійти" onPress={() => {}} />
      <Text style={styles.registrationLink}>Немає акаунту? Зареєструватися</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  registrationLink: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;