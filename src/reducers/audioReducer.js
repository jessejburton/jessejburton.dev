const initialState = {
  volume: 1,
  muteVolume: 1
};

export default function (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case 'UNMUTE_VOLUME':
      return { ...state, volume: state.muteVolume };
    case 'MUTE_VOLUME':
      return { ...state, muteVolume: state.volume, volume: 0 };
    case 'SET_VOLUME':
      return { ...state, volume: action.value }
    default:
      return state;
  }
};