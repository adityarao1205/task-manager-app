import { useState } from 'react';

const TaskForm = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    // Send the task to the backend
    const response = await fetch('http://localhost:5001/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, completed: false }),
    });

    if (response.ok) {
      const newTask = await response.json();
      onCreate(newTask);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
