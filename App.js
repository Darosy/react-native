/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native';
import ListItem, {Separator} from './src/Gesture/Gesture';
import NavIconButtonBar from './src/Router/router';

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F5FCFF',
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });

export default class App extends React.Component {
    render() {
        return (
            <NavIconButtonBar/>
        );
    }
}

// export default class App extends React.Component {
//     render() {
//         return (
//             <SafeAreaView style={styles.container}>
//                 <FlatList
//                     data={goods}
//                     keyExtractor={item=> item.id}
//                     renderItem={({item}) => (
//                         <ListItem
//                             {...item}
//                             onSwipeFromLeft={() => alert('swipe from left')}
//                             onRightPress={() => alert('pressed right')}
//                         />
//                     )}
//                     ItemSeparatorComponent={() => <Separator/>}
//                 />
//             </SafeAreaView>
//         )
//     };
// };

// const goods = [
//     { id: '0', text: 'Soap' },
//     { id: '1', text: 'Shampo' },
//     { id: '2', text: 'Makan' },
//     { id: '3', text: 'Minum' },
//     { id: '4', text: 'Soda' }
// ];

// import React from 'react';
// import { View, Text, Button, Image } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
//
// class HomeScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text>Home Screen</Text>
//                 <Button
//                     icon={
//                         <Icon name={"home"} size={50} color={'green'}/>
//                     } title={'Home'}/>
//                 <Image source={require('./asset/images/gambar.png')}/>
//                 <Text>
//                     Pembunuhan Massal Pendemo
//                 </Text>
//                 <Button
//                     title="Go to Details"
//                     onPress={() => this.props.navigation.navigate('Details')}
//                 />
//             </View>
//         );
//     }
// }
//
// class DetailsScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text>Details Screen</Text>
//                 <Button
//                     title="Go to Home"
//                     onPress={() => this.props.navigation.navigate('Home')}
//                 />
//                 <Button
//                     title="Go back"
//                     onPress={() => this.props.navigation.goBack()}
//                 />
//             </View>
//         );
//     }
// }
//
// const RootStack = createStackNavigator({
//     Home: HomeScreen,
//     Details: DetailsScreen,
// });
//
// export default createAppContainer(RootStack);
