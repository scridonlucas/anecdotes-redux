import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const Anecdote = ({ content, votes, vote }) => {
  return (
    <div>
      <div>{content}</div>
      <div>
        has {votes}
        <button onClick={vote}>vote</button>
      </div>
    </div>
  );
};
const AnecdoteList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector((state) =>
    state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(state.filter)
    )
  );

  const vote = (anecdoteToVote) => {
    dispatch(voteAnecdote(anecdoteToVote));

    dispatch(setNotification(`${anecdoteToVote.content} has been voted`, 3));
  };

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote
            key={anecdote.id}
            id={anecdote.id}
            content={anecdote.content}
            votes={anecdote.votes}
            vote={() => {
              vote(anecdote);
            }}
          ></Anecdote>
        ))}
    </div>
  );
};

export default AnecdoteList;
