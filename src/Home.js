import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'

export default class List extends React.Component {
    static navigationOptions = {
        tittle: 'Home!',
    };
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    Ini Home
                </Text>
                <Button title="Go to List" onPress={() => this.props.navigation.navigate('Details')}/>
            </View>
        );
    }
}
