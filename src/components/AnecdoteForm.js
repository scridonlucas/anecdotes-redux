import { useDispatch } from 'react-redux';
import { setNotification } from '../reducers/notificationReducer';
import { addAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const add = async (event) => {
    event.preventDefault();

    const content = event.target.anecdote.value;

    dispatch(setNotification(`${content} has been created`, 3));

    event.target.anecdote.value = '';

    dispatch(addAnecdote(content));
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
