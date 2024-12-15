import React, { useState, useEffect } from 'react';

    const TaskList = () => {
      const [tasks, setTasks] = useState([
        { id: 1, name: 'Research potential clients', time: 30, completed: false },
        { id: 2, name: 'Follow up with leads', time: 45, completed: false },
        { id: 3, name: 'Create content', time: 60, completed: false },
      ]);

      const [timers, setTimers] = useState(tasks.map(() => 0));

      useEffect(() => {
        const interval = setInterval(() => {
          setTimers((prevTimers) =>
            prevTimers.map((timer, index) =>
              tasks[index].completed ? timer : timer + 1
            )
          );
        }, 1000);

        return () => clearInterval(interval);
      }, [tasks]);

      const toggleTaskCompletion = (id) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
        );
      };

      return (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Daily Tasks</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={task.id} className="flex items-center justify-between mb-2">
                <span
                  className={`text-lg ${
                    task.completed ? 'line-through text-gray-500' : ''
                  }`}
                  onClick={() => toggleTaskCompletion(task.id)}
                >
                  {task.name}
                </span>
                <span className="text-lg">
                  {Math.floor(timers[index] / 60)}:{(timers[index] % 60)
                    .toString()
                    .padStart(2, '0')}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    };

    export default TaskList;
