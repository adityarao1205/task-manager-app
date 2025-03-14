import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('http://localhost:5001/api/tasks');
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      }
    };

    fetchTasks();
  }, []);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = async (id) => {
    const response = await fetch(`http://localhost:5001/api/tasks/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setTasks(tasks.filter((task) => task._id !== id));
    }
  };

  const updateTask = async (id, updates) => {
    const response = await fetch(`http://localhost:5001/api/tasks/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });

    if (response.ok) {
      const updatedTask = await response.json();
      setTasks(
        tasks.map((task) => (task._id === id ? updatedTask : task))
      );
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onCreate={createTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
    </div>
  );
};

export default App;
