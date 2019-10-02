import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { View } from 'react-native'
import { Button, Icon } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from './Home'
import DetailsScreen from './List'
import NewScreen from '../News/news'
import React from 'react';

// const Drawer = createDrawerNavigator({
//     Home: HomeScreen,
//     Details: DetailsScreen,
// });

// const TabTopBar = createMaterialTopTabNavigator({
//     Home: HomeScreen,
//     Portofolio: DetailsScreen,
//     News: NewScreen
// });

{/*<Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>*/}

const NavIconButtonBar = createMaterialBottomTabNavigator({
    Home: { screen: HomeScreen,
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon: () => (<Icon name={'home'}/>)
        }
    },

    Portofolio: { screen: DetailsScreen,
        navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon: () => (<Icon name={'star'}/>)
        }
    },

    News: { screen: NewScreen,
        navigationOptions:{
            tabBarLabel:'News',
            tabBarIcon: ({ tintColor }) => (<Icon name={'phone'}/>),
            activeColor: '#615af6',
            inactiveColor: '#46f6d7',
            barStyle: { backgroundColor: '#67baf6' },
        }
    }
})

// const Router = createStackNavigator({
//     Home: HomeScreen,
//     Details: DetailsScreen,
// });
//
export default createAppContainer(NavIconButtonBar);
