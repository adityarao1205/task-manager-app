const TaskList = ({ tasks, onDelete, onUpdate }) => {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onUpdate(task._id, { completed: !task.completed })}
            />
            <span>{task.title}</span>
            <button onClick={() => onDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
  