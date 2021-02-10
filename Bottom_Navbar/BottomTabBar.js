// Imported Libraries
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, TouchableOpacity, Modal, Button, StyleSheet} from 'react-native';

// Importing Screen Files

//HomeStackScreen
import HomeScreen from '../../Screens/MainScreens/HomeScreen';
import ProductDes from '../../Screens/ProductScreens/ProductDes';
import Login from '../../Screens/LoginScreens/Login';

//DashBoardStackScreen
import DashBoardScreen from '../../Screens/MainScreens/DashBoardScreen';

//MarketStackScreen
import MarketScreen from '../../Screens/MainScreens/MarketScreen';

//ProductStackScreen
import NoofProduct from '../../Screens/ProductScreens/NoofProduct';
import CategoryProductCard from '../../Components/CategoryProductCard';

//GameScreen
import Loading from '../../Screens/GameScreens/Loading';
import SelectCard from '../../Screens/GameScreens/SelectCard';

//Others
import TabComponent from './Comp/Tab';
import Home_Header from './Home_Header';
import Logo from '../../../assets/img/Logo';
import BacKButton from './Comp/BackButton';
import LogoHome from './Comp/LogoHome';
import LogoModal from '../Button/LogoModal';

//Modal

// HomeStackNavigator
const HomeStack = createStackNavigator();
function HomeStackScreen(navigation) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: ' ',
          headerStyle: {
            backgroundColor: '#F5F8FA',
          },
          headerLeft: () => <LogoModal />,
          headerRight: () => <Home_Header />,
        }}
      />
      <HomeStack.Screen
        name="ProductDes"
        component={ProductDes}
        options={{       
          title: ' ',
         
          headerStyle: {
            backgroundColor: '#F5F8FA',
          },
          headerLeft: (navigation) => <BacKButton navigation={navigation} />,
          headerRight: () => <Home_Header />,
        }}
      />
      <HomeStack.Screen
        name="NoofProduct"
        component={NoofProduct}
        options={{
          title: ' ',
          headerStyle: {
            backgroundColor: '#F5F8FA',
          },
          headerLeft: () => <BacKButton />,
          headerRight: () => <Home_Header />,
        }}
      />
      <HomeStack.Screen
        name="Loading"
        component={Loading}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="SelectCard"
        component={SelectCard}
        options={{ headerShown: false }} 
      />
      <HomeStack.Screen
        name="CategoryProductCard"
        component={CategoryProductCard}
        options={{
          title: ' ',
          headerStyle: {
            backgroundColor: '#F5F8FA',
          },
          headerLeft: () => <BacKButton />,
          headerRight: () => <Home_Header />,
        }}
      />
      <HomeStack.Screen
        name="Login"
        component={Login}
        options={{
          tabBarVisible: false,
          title: ' ',
          headerStyle: {
            backgroundColor: '#F5F8FA',
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

// DashBoardStackNavigator
const DashBoardStack = createStackNavigator();
function DashBoardStackScreen({navigation}) {
  return (
    <DashBoardStack.Navigator>
      <DashBoardStack.Screen
        name="DashBoard"
        component={DashBoardScreen}
        options={{
          title: ' ',
          headerStyle: {
            backgroundColor: '#F5F8FA',
          },
          headerLeft: () => <LogoModal />,
          headerRight: () => <Home_Header />,
        }}
      />
    </DashBoardStack.Navigator>
  );
}

// MarketStackNavigator
const MarketStack = createStackNavigator();
function MarketStackScreen({navigation}) {
  return (
    <MarketStack.Navigator>
      <MarketStack.Screen
        name="Market"
        component={MarketScreen}
        options={{
          title: ' ',
          headerStyle: {
            backgroundColor: '#F5F8FA',
          },
          headerLeft: () => (
            <LogoModal />
          ),
          headerRight: () => <Home_Header />,
        }}
      />
    </MarketStack.Navigator>
  );
}

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Bottom Bar
const BottomTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarButton: (props) => <TabComponent label="home" {...props} />,
          }}
        />
        <Tab.Screen
          name="DashBoard"
          component={DashBoardStackScreen}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="Settings" {...props} />
            ),
          }}
        />
        <Tab.Screen
          name="Market"
          component={MarketStackScreen}
          options={{
            tabBarButton: (props) => <TabComponent label="Market" {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabBar;
