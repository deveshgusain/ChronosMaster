import React, { useState } from "react";

import { useSelector } from "react-redux";

import Task from "./Task";

export default function TaskList({ handleBack }) {
    const [isTask, setIsTask] = useState(false);

    const tasks = useSelector((state) => state.tasks);

    const [selectedTask, updateSelectedTask] = useState({
        _id: Math.floor(Math.random() * 1000) + 1,
        name: "",
        startTime: "",
        endTime: "",
    });

    const handleClick = (task) => {
        updateSelectedTask(task);
        setIsTask(true);
    };

    return (
        <div>
            {isTask ? (
                <Task task={selectedTask} setIsTask={setIsTask} />
            ) : (
                <div>
                    <button onClick={handleBack}>Back</button>
                    {Object.entries(tasks).map(([_id, task]) => (
                        <div key={_id}>
                            <h4>Task: {task.name}</h4>
                            <p> From: {task.startTime}</p>
                            <p> To: {task.endTime}</p>
                            <button onClick={() => handleClick(task)}>
                                Edit
                            </button>
                        </div>
                    ))}
                    <br />
                    <br />
                    <button onClick={() => setIsTask(true)}>Add Task</button>
                </div>
            )}
        </div>
    );
}
