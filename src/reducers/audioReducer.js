const initialState = {
  volume: 1
};

export default function (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case 'MUTE_VOLUME':
      return { ...state, volume: 0 };
    case 'SET_VOLUME':
      return { ...state, volume: action.value }
    default:
      return state;
  }
};