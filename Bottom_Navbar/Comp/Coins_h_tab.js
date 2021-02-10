import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import Img_goldCoin from '../../../../assets/img/Img_goldCoin';

const Coins_h_tab = () => {
  return (
    <>
      <View style={{paddingHorizontal:8}}>
        <View style={styles.btn}>
          <View style={{paddingHorizontal:8}}>
            <Text style={{fontFamily:'Rubik-Bold',color:'#FCBD11'}}>10</Text>
          </View>
          <View>
            <Img_goldCoin/>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    padding:6
  },
});

export default Coins_h_tab;
