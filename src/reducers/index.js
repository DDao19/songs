import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'Black Swan',
      duration: '4:05'
    },
    {
      title: 'Trap House',
      duration: '3:45'
    },
    {
      title: 'Oceans',
      duration: '5:34'
    },
    {
      title: 'Fix You',
      duration: '3:28'
    }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  };

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})