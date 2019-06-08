import React, {Component} from "react";

import {Text} from "react-native";

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TabsBar extends Component {
  constructor(props) {
      super(props);

      this.state = {
        "selectedTab": "home"
      };
  }

  render() {
    return(
      <TabNavigator>
          <TabNavigator.Item
            title="Início"
            selected={this.state.selectedTab === 'home'}
            onPress={() => this.setState({selectedTab: 'home'})}
            renderIcon={() => <Icon name="home" />}
            renderSelectedIcon={() => <Icon name="home" />}
            selectedTitleStyle={{color: "#3496f0"}}
          >
            <Text>Home</Text>
          </TabNavigator.Item>

          <TabNavigator.Item
            title="Testes"
            selected={this.state.selectedTab === 'profile'}
            onPress={() => this.setState({selectedTab: 'profile'})}
            renderIcon={() => <Icon name="user" />}
            renderSelectedIcon={() => <Icon name="user" />}
            selectedTitleStyle={{color: "#3496f0"}}
          >
            <Text>Profile</Text>
          </TabNavigator.Item>
        </TabNavigator>

    );
  }
}
