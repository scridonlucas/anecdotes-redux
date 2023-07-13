import { createSlice } from '@reduxjs/toolkit';
import anecdotesService from '../services/anecdotes';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload);
    },

    addVote(state, action) {
      const newAnecdote = action.payload;
      return state.map((anecdote) =>
        anecdote.id !== newAnecdote.id ? anecdote : newAnecdote
      );
    },

    appendAnecdote(state, action) {
      state.push(action.payload);
    },

    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { createAnecdote, addVote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const addAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.createNew(anecdote);
    dispatch(createAnecdote(newAnecdote));
  };
};

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.updateVotes(anecdote);
    dispatch(addVote(newAnecdote));
  };
};

export default anecdoteSlice.reducer;
