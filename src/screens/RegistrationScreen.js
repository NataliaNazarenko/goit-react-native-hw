import React  from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  
} from 'react-native';

import { Octicons } from '@expo/vector-icons';

import photo from '../images/Photo-BG.png';

const RegistrationScreen = () => {
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.Android === 'android' ? 'padding' : 'height'}
      style={styles.container}>
        <View style={styles.containerWrapper}>
          <ImageBackground style={styles.images} source={photo}>
              <TouchableOpacity style={styles.svg}>
                <Octicons name="plus-circle" size={25} color="#FF6C00" />
              </TouchableOpacity>
              <View>
                  <Text style={styles.title}>Реєстрація</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Логін"
                    placeholderTextColor={'#BDBDBD'}>
                  </TextInput>
                  <TextInput
                    style={styles.input}
                    placeholder="Адреса електронної пошти"
                    placeholderTextColor={'#BDBDBD'}
                    keyboardType="email-address">
                  </TextInput>
                  <TextInput
                    style={styles.input}              
                    placeholder="Пароль"
                    placeholderTextColor={'#BDBDBD'}>
                  </TextInput>
                  <TouchableOpacity style={styles.password}>
                    <Text style={styles.showPassword}>
                      Показати
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Зареєстуватися</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={styles.screenLogin}>
                      Вже є акаунт? Увійти
                    </Text>
                  </TouchableOpacity>
                </View>
                        
          </ImageBackground>
        </View>
     
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  images: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },

  svg: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 25,
    height: 25,
  },

  title: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 30,
    lineHeight: 35,
    color: '#212121',
    fontWeight: '500',
  },

  input: {
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 15,
    backgroundColor: '#F6F6F6',
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    fontWeight: '400',
    color: '#212121',
  },

  password: {
    position: 'absolute',
    right: 0,
    bottom: 253,
    paddingRight: 16,
  },

  showPassword: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
    fontWeight: '400',
  },

  button: {
    height: 50,
    marginTop: 40,
    paddingVertical: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },

  buttonText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },

  screenLogin: {
    marginTop: 15,
    marginBottom: 100,
    textAlign: 'center',
    color: '#1B4371',
    fontWeight: '400',
  },
});