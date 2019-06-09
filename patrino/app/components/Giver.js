import React, {Component} from "react";

import {FlatList} from "react-native";

import {ThemeProvider, Card, Text} from "react-native-elements";

export default class Giver extends Component {
    constructor(props) {
        super(props);

        this.state = {
          "givers": []
        };
    }

    componentDidMount() {
      this.loadGivers();
    }

    loadGivers() {
      return fetch('http://200.137.131.118:1234/users', {
          method: 'GET'

        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
              "givers": responseJson
            });
        })
        .catch((error) => {
          console.error(error);
        });

    }

    render() {
      return(
        <ThemeProvider>
          <FlatList
           data={this.state.givers}
           keyExtractor={(item, index) => item.email}
           renderItem={({item}) => <Card
                                   >
                                     <Text
                                       style={{marginBottom: 10}}
                                       onPress={() => this.props.navigation.navigate("Question", {item})}
                                     >
                                       {item.name}
                                     </Text>
                                   </Card>}
         />

        </ThemeProvider>
      );
    }
}
