import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';

//========================
const DATA = [];

const getItem = (data, index) => ({
 id: Math.random().toString(12).substring(0),
 title: `Item ${index + 1}`
});

const getItemCount = (data) => 10;

const Item = ({ title }) => (
 <View style={styles.item}>
   <Text style={styles.title}>{title}</Text>
 </View>
);
//========================

export const Home = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <VirtualizedList
                data={DATA}
                initialNumToRender={4}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.key}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    item: {
      backgroundColor: 'gray',
      height: 150,
      justifyContent: 'center',
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 20,
    },
    title: {
      fontSize: 32,
    },
  });