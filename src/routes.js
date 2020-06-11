import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/products';

const root = createStackNavigator(
  {
    Main,
    Product,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFFFFF',
    },
  },
);

const Routes = createAppContainer(root);

export default Routes;
