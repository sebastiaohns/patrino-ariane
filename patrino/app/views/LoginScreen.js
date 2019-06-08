import React, {Component} from "react";

import {StyleSheet, View, TextInput} from "react-native";

import {ThemeProvider, Button } from "react-native-elements";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "email": "",
      "password": ""
    };
  }

  async onLoginPress() {
    console.log(this.state.email);
    console.log(this.state.password);
  }

  render() {
    return(
      <ThemeProvider style={styles.container}>
        <View style={styles.form}>
          <View style={styles.item}>
            <TextInput
              placeholder="E-mail"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(email) => this.setState({email})}
            />
          </View>

          <View style={styles.item}>
            <TextInput
              placeholder="Senha"
              returnKeyType="go"
              secureTextEntry
              ref={input => (this.passwordInput = input)}
              onChangeText={(password) => this.setState({password})}              />

          </View>

          <View style={styles.item}>
            <Button
              onPress={this.onLoginPress.bind(this)}
              style={styles.item}
              title="Entrar"
            />
          </View>
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  form: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 200
  },
  item: {
    marginTop: 10,
    marginBottom: 10,
  }
});
