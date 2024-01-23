import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Send from '../screens/Send';
import Chat from '../screens/Chat';
import HomeIcon from '../../assets/svgs/Home.svg';
import BookmarkIcon from '../../assets/svgs/Bookmark.svg';
import SendIcon from '../../assets/svgs/Send.svg';
import SettingsIcon from '../../assets/svgs/Setting.svg';
import {Platform} from 'react-native';
import {COLORS} from '../constants/theme';
import {moderateScale} from 'react-native-size-matters/extend';
const Tab = createBottomTabNavigator();

export default function HomeBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.tabBarColor,
          height:
            Platform.OS === 'android' ? moderateScale(80) : moderateScale(100),
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return <HomeIcon />;
          },
        }}
        name="homeTab"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return <BookmarkIcon />;
          },
        }}
        name="chat"
        component={Chat}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return <SendIcon />;
          },
        }}
        name="send"
        component={Send}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return <SettingsIcon />;
          },
        }}
        name="settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}
