import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';

// Importing Screen Files and Neccesary Components
import Back from '../images/Back';

//BackButton

const BacKButton = ({navigation}) => {
  return (
    <>
    <TouchableOpacity onPress={()=>navigation.pop()}>
      <View style={{paddingLeft: 10, padding: 4}}>
        <Back />
      </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({});

export default BacKButton;
