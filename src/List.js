import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'

export default class List extends React.Component {
    static navigationOptions = {
        tittle: 'List!',
    };
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    Ini List
                </Text>
                <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}
