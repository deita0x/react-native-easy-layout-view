import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { View } from 'react-native-easy-layout-view';

const Divider = () => {
  return (
    <View height-1 marginH-20 marginV-10 style={{ backgroundColor: '#9facbd' }} />
  );
};

const Box = ({ type }) => {
  return (
    <View width-100 height-100 style={styles[type]} />
  );
};

export default class App extends React.Component {
  render() {
    return (
      <View useSafeArea flex>
        <ScrollView>
          <Text style={styles.text}>{'<View left />'}</Text>
          <View height-150 left>
            <Box type='box1' />
          </View>

          <Divider />
          <Text style={styles.text}>{'<View centerH />'}</Text>
          <View height-150 centerH>
            <Box type='box1' />
          </View>

          <Divider />
          <Text style={styles.text}>{'<View right />'}</Text>
          <View height-150 right>
            <Box type='box1' />
          </View>

          <Divider />
          <Text style={styles.text}>{'<View centerV left />'}</Text>
          <View height-150 centerV left>
            <Box type='box2' />
          </View>

          <Divider />
          <Text style={styles.text}>{'<View center />'}</Text>
          <View height-150 center>
            <Box type='box2' />
          </View>

          <Divider />
          <Text style={styles.text}>{'<View centerV right />'}</Text>
          <View height-150 centerV right>
            <Box type='box2' />
          </View>

          <Divider />
          <Text style={styles.text}>{'<View bottom left />'}</Text>
          <View height-150 bottom left>
            <Box type='box1' />
          </View>

          <Divider />
          <Text style={styles.text}>{'<View bottom centerH />'}</Text>
          <View height-150 bottom centerH>
            <Box type='box1' />
          </View>

          <Divider />
          <Text style={styles.text}>{'<View bottom right />'}</Text>
          <View height-150 bottom right>
            <Box type='box1' />
          </View>

          <Divider />
          <Text style={styles.text}>{'<View left spread />'}</Text>
          <View height-350 left spread>
            <Box type='box1' />
            <Box type='box2' />
            <Box type='box3' />
          </View>

          <Divider />
          <Text style={styles.text}>{'<View centerH spread />'}</Text>
          <View height-350 centerH spread>
            <Box type='box1' />
            <Box type='box2' />
            <Box type='box3' />
          </View>

          <Divider />
          <Text style={styles.text}>{'<View right spread />'}</Text>
          <View height-350 right spread>
            <Box type='box1' />
            <Box type='box2' />
            <Box type='box3' />
          </View>

          <Divider />
          <Text style={styles.text}>{'<View row spread />'}</Text>
          <View height-350 row spread>
            <Box type='box1' />
            <Box type='box2' />
            <Box type='box3' />
          </View>

          <Divider />
          <Text style={styles.text}>{'<View row spread centerV />'}</Text>
          <View height-350 row spread centerV>
            <Box type='box1' />
            <Box type='box2' />
            <Box type='box3' />
          </View>

          <Divider />
          <Text style={styles.text}>{'<View row spread bottom />'}</Text>
          <View height-350 row spread bottom>
            <Box type='box1' />
            <Box type='box2' />
            <Box type='box3' />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box1: {
    backgroundColor: '#A5FFD6'
  },
  box2: {
    backgroundColor: '#FFA69E'
  },
  box3: {
    backgroundColor: '#FF686B'
  },
  text: {
    color: '#9facbd'
  },
});
