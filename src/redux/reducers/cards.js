import {cardsActionTypes} from '../actions/cards';

export const initialState = {
  loadingCards: false,
  cards: [],
  error: null,
};

const actionsMap = {
  [cardsActionTypes.GET_CARDS_REQUEST]: state => ({
    ...state,
    loadingCards: true,
  }),
  [cardsActionTypes.GET_CARDS_SUCCESS]: (state, action) => ({
    ...state,
    loadingCards: false,
    cards: action.payload,
  }),
  [cardsActionTypes.GET_CARDS_FAILURE]: (state, action) => ({
    ...state,
    loadingCards: false,
    error: action.payload,
  }),
};

export default (state = initialState, action) => {
  const actionHandler = actionsMap[action.type];
  if (!actionHandler) {
    return state;
  }
  return actionHandler(state, action);
};
