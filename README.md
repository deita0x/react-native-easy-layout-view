# react-native-easy-layout-view

It is a simple and intuitive way to implement templates commonly used in applications, they are a good starting point to build screen designs even without knowing the basic rules of flex-box.

## Features
- Pure JS.
- Supports every prop that the standard React Native `View` component supports.
- Very small lib.

## Examples


```
<View useSafeArea flex center style={{ backgroundColor: '#FFF' }}>
  <View center width-150 height-150 style={{ backgroundColor: '#FF686B' }}>
    <Text style={{ color: '#FFF' }}>Hello World!</Text>
  </View>
</View>
```
Instead of:
```
<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
  <View style={{ justifyContent: 'center', alignItems: 'center', width: 150, height: 150, backgroundColor: '#FF686B' }}>
    <Text style={{ color: '#FFF' }}>Hello World!</Text>
  </View>
</SafeAreaView>
```