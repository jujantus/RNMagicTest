import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {SafeAreaView, FlatList, StyleSheet, Image} from 'react-native';
import {Searchbar} from 'react-native-paper';

import {retrieveCards} from '../redux/actions/cards';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const cards = useSelector(state => state.cards.cards);
  console.log(cards);
  const handleSearch = useCallback(() => dispatch(retrieveCards(searchQuery)), [
    dispatch,
    searchQuery,
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search for a card"
        onChangeText={query => setSearchQuery(query)}
        value={searchQuery}
        onIconPress={handleSearch}
      />
      <FlatList
        style={styles.cardContainer}
        data={cards.data}
        // numColumns={2}
        renderItem={({item}) => (
          <Image style={styles.card} source={{uri: item.image_uris.normal}} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  searchbar: {
    marginBottom: 10,
  },
  card: {
    height: 500,
    resizeMode: 'contain',
  },
  cardContainer: {
    marginBottom: 10,
  },
});

export default Home;
