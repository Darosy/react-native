import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from '../Home';
import DetailsScreen from '../List';

const Drawer = createDrawerNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
});

// const Router = createStackNavigator({
//     Home: HomeScreen,
//     Details: DetailsScreen,
// });
//
export default createAppContainer(Drawer);
