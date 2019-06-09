import React, {Component} from "react";

import {BackHandler} from "react-native";

import {ThemeProvider, Button} from "react-native-elements";

import AsyncStorage from '@react-native-community/async-storage';

export default class ProfileScreen extends Component {
  /*Eliminando header padrão*/
  static navigationOptions = {
    header: null
  };

  async onLogoutPress() {
    await AsyncStorage.setItem("logging", "false");

    BackHandler.exitApp();
    return true;
  }

  render() {
    return(
      <ThemeProvider>
        <Button
          onPress={this.onLogoutPress.bind(this)}
          title="Sair"
        />
      </ThemeProvider>
    );
  }
}
