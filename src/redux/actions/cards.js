import {createAction} from 'redux-actions';
import {getCards} from '../../api';

export const cardsActionTypes = {
  GET_CARDS_REQUEST: 'GET_CARDS_REQUEST',
  GET_CARDS_SUCCESS: 'GET_CARDS_SUCCESS',
  GET_CARDS_FAILURE: 'GET_CARDS_FAILURE',
};

const cardsActionCreators = {
  request: createAction(cardsActionTypes.GET_CARDS_REQUEST),
  success: createAction(cardsActionTypes.GET_CARDS_SUCCESS),
  failure: createAction(cardsActionTypes.GET_CARDS_FAILURE),
};

export const retrieveCards = query => dispatch => {
  console.log(query);
  dispatch(cardsActionCreators.request());
  getCards(query)
    .then(cards => {
      console.log(cards.data);
      dispatch(cardsActionCreators.success(cards.data));
    })
    .catch(error => dispatch(cardsActionCreators.failure(error.message)));
};
