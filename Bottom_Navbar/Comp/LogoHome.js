import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

// Importing Screen Files and Neccesary Components

import Logo from '../../../../assets/img/Logo';
import  HomeScreen from '../../../Screens/MainScreens/HomeScreen'

//HomeButton

const LogoHome = ({navigation}) => {
  return (
    <>
      <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={{paddingLeft: 10, padding: 4}}>
            <Logo/>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default LogoHome;
