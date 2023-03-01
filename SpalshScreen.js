import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SpalshScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
          }, 3000);
      }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#fff', alignItems:'center', justifyContent: 'center'}}>
      <Image source={require('./assets/Almind_Logo-removebg-preview.png')} />
    </View>
  )
}

export default SpalshScreen

const styles = StyleSheet.create({})