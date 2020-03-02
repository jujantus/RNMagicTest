import React from 'react';
import {Animated, StyleSheet, View, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const SwipeableRow = ({children, actionsWidth, rightActions}) => {
  const renderRightAction = (title, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = () => {
      console.log('press');
    };
    return (
      <Animated.View
        key={title}
        style={[styles.actionButton, {transform: [{translateX: trans}]}]}>
        <RectButton
          style={[styles.rightAction, {backgroundColor: color}]}
          onPress={pressHandler}>
          <Icon name={'treasure-chest'} size={30} color="black" />
          <Text style={styles.actionText}>{title}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = progress => (
    <View style={[{width: actionsWidth}, styles.actionContainer]}>
      {rightActions.map(action =>
        renderRightAction(action.title, action.color, action.x, progress),
      )}
    </View>
  );

  return (
    <View style={styles.SwipeableRow}>
      <Swipeable
        overshootRight={false}
        overshootFriction={6}
        friction={1}
        renderRightActions={renderRightActions}>
        {children}
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    flex: 1,
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  SwipeableRow: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
