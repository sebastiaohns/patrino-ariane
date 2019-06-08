import React, {Component} from "react";

import {StyleSheet, View} from "react-native";

import {ThemeProvider, Input, Button } from "react-native-elements";

export default class LoginScreen extends Component {
  render() {
    return(
      <ThemeProvider style={styles.container}>
        <View style={styles.form}>
          <View style={styles.item}>
            <Input
              placeholder='E-mail'
            />
          </View>

          <View style={styles.item}>
            <Input
              placeholder='Senha'
            />
          </View>

          <View style={styles.item}>
            <Button
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
