import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import newsData from './src/stactic/news_data.json';
import NewsCard from './src/components/NewsCard';
import Banner from './src/components/Banner'

const App = () => {

  const renderNewsCard = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>News</Text>

        {/* {FlatList}
        <FlatList
        data={newsData}
        renderItem={({item}) =>(
        <>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        </>)}
        /> */}

        <FlatList
          ListHeaderComponent={() => (<Banner/>)}
          // keyExtractor={(item,index) => item.<keyparameter>.toString()}
          data={newsData}
          renderItem={renderNewsCard}
          // renderItem={({item}) => <NewsCard news={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  headerText:{
    fontSize:45,
    fontWeight: 'bold',
  }
});

export default App;
