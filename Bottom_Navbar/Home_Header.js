// Imported React Libraries

import React from 'react';
import {SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';

// Importing Screen Files and Neccesary Components

import Beginer_h_tab from './Comp/Beginer_h_tab';
import Coins_h_tab from './Comp/Coins_h_tab';




const Home_Header = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.Container}>
          <View>
            <Beginer_h_tab />
          </View>
          <View>
            <Coins_h_tab />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
  },
});

export default Home_Header;
