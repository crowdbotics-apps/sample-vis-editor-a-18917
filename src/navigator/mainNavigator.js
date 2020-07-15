import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen378969Navigator from '../features/BlankScreen378969/navigator';
import BlankScreen178876Navigator from '../features/BlankScreen178876/navigator';
import BlankScreen278875Navigator from '../features/BlankScreen278875/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen378969: { screen: BlankScreen378969Navigator },
BlankScreen178876: { screen: BlankScreen178876Navigator },
BlankScreen278875: { screen: BlankScreen278875Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
