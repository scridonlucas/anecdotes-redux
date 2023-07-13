import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setText(state, action) {
      return action.payload;
    },
    clearText(state) {
      return '';
    },
  },
});

export const { setText, clearText } = notificationSlice.actions;

export const setNotification = (text, time) => {
  return async (dispatch) => {
    dispatch(setText(text));
    setTimeout(() => {
      dispatch(clearText());
    }, time * 1000);
  };
};

export default notificationSlice.reducer;
