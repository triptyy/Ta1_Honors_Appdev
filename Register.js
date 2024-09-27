import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>
        Already have an account?
      </Text>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity>
          <Text style={styles.socialIcon}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.socialIcon}>F</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.socialIcon}>A</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#0A74DA',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    color: '#777',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  socialIcon: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
