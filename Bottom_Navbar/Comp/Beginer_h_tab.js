import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Img_prpl_diamond from '../../../../assets/img/Img_prpl_diamond'

const Beginer_h_tab = () => {
  return (
    <>
      <View style={{paddingHorizontal:10}}>
        <View style={styles.btn}>
          <View style={{paddingHorizontal:8}}>
            <Text style={{fontFamily:'Rubik-Bold',color:'#A061FF'}}>Beginner</Text>
          </View>
          <View>
            <Img_prpl_diamond />
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
    borderRadius: 30,
    padding:6
  },
});

export default Beginer_h_tab;
