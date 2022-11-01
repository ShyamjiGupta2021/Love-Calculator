import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const DisplayLove = (prop) => {
  console.log(prop);

  if (prop.data == 'loading') {
    return <Text style={styles.text} >waiting...</Text>;
  }
  if(prop.data.messange){
   return <Text style={styles.text} >sorry ! something went wrong calculate again</Text>
  }
   else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{prop.data.percentage} %</Text>
        <Text style={styles.text}>{prop.data.result}</Text>
      </View>
    );
  }
};

export default DisplayLove;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blueviolet',
    justifyContent: ' center',
  },
  text: {
    fontSize: 30,
    textAlign: ' center',
     fontFamily: 'Rajdhani_600SemiBold',
  },
});
