import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {SafeAreaView, FlatList, StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';

import {retrieveCards} from '../../redux/actions/cards';
import {Card, SwipeableRow} from '../../components';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const cards = useSelector(state => state.cards.cards);
  const handleSearch = useCallback(() => dispatch(retrieveCards(searchQuery)), [
    dispatch,
    searchQuery,
  ]);
  const rightActions = [
    {title: 'Add', color: '#ffab00', x: 144},
    {title: 'Remove', color: '#dd2c00', x: 72},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search for a card"
        onChangeText={query => setSearchQuery(query)}
        value={searchQuery}
        onIconPress={handleSearch}
      />
      <FlatList
        data={cards.data}
        renderItem={({item}) => (
          <SwipeableRow actionsWidth={144} rightActions={rightActions}>
            <Card cardObject={item} />
          </SwipeableRow>
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
});

const HomeComponent = gestureHandlerRootHOC(Home);
export default HomeComponent;
