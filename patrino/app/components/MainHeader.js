import React, {Component} from "react";

import {View} from "react-native";

import {ThemeProvider, Avatar, Badge, Header, Tile, Text} from "react-native-elements";

export default class MainHeader extends Component {
  render() {
    return(
      <Header
        statusBarProps={{ barStyle: 'light-content', backgroundColor: 'green' }}
        barStyleP="light-content"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Patrino', style: { color: '#fff' } }}
        rightComponent={<View>
                          <Avatar
                            onPress={() => this.props.navigation.navigate("ProfileScreen") }
                            rounded
                            source={require('../resources/team-3-800x800.jpg')}
                          />
                          <Badge
                            status="success"
                            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                          />
                        </View>
                       }
        containerStyle={{
          backgroundColor: 'green',
          justifyContent: 'space-around',
        }}
      />
    );
  }
}
