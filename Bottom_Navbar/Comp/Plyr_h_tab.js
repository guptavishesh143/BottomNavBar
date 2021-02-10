import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
 } from 'react-native';
import Img_plyr1_red from '../../../../assets/img/Img_plyr1_red';

const Plyr_h_tab = () => {
  return (
    <>
     
        <View style={{flexDirection: 'row', paddingHorizontal: 12}}>
          <View>
            <Img_plyr1_red />
          </View>
         
        </View>
   
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default Plyr_h_tab;
