import React from 'react';
import {ScrollView, Image} from 'react-native';
import bannerData from './src/stactic/news_banner_data.json';
import styles from'./Banner.style';

const Banner = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {bannerData.map(bannerNews => (
        <Image style={styles.bannerImage} source={{uri: bannerNews.imageUrl}} />
      ))}
    </ScrollView>
  );
};


export default Banner;
