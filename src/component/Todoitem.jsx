import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from '../store/todoSlice'



const TodoItem = ({ id, completed, text }) => {
const dispatch = useDispatch()

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleCompleted({id}))}
      />
      <span>{text}</span>
      <span
        onClick={() => dispatch(deleteTodo({id}))}
        className="delete"
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
