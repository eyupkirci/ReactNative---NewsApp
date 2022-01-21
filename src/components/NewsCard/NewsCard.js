import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './NewsCard.style';

const NewsCard = props => {
  console.log('props', props.news);
  data = props.news;

  return (
    <View style={styles.container}>
      <Image source={{uri: data.imageUrl}} style={styles.image} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.author}>{data.author}</Text>
      </View>
    </View>
  );
};

export default NewsCard;
