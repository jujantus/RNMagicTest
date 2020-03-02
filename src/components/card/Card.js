import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Card = ({cardObject}) => {
  return (
    <RectButton>
      <View style={styles.cardContainer}>
        <Image
          style={styles.card}
          source={{uri: cardObject.image_uris.art_crop}}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{cardObject.name}</Text>
          <Text style={styles.cardType}>{cardObject.type_line}</Text>
          <Text style={styles.cardText}>{cardObject.oracle_text}</Text>
        </View>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  card: {
    height: 108,
    width: 144,
    // resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    alignItems: 'flex-start',
    paddingVertical: 2,
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
  },
  cardType: {
    fontSize: 13,
  },
  cardText: {
    fontSize: 12,
  },
});
