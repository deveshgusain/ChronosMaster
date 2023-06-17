import React from "react";

import { useSelector } from "react-redux";

export default function UpdateData({ handleBack }) {
    const tasks = useSelector((state) => state.tasks);

    const keyTasks = Object.keys(tasks);

    keyTasks.sort((a, b) => {
        if (tasks[a].startTime < tasks[b].startTime) return -1;
        if (tasks[a].startTime > tasks[b].startTime) return 11;
        return 0;
    });

    return (
        <div>
            <button onClick={handleBack}>Back</button>
            {keyTasks.map((key) => (
                <div key={key}>
                    <h4>Task: {tasks[key].name}</h4>
                    <p> From: {tasks[key].startTime}</p>
                    <p> To: {tasks[key].endTime}</p>
                </div>
            ))}
        </div>
    );
}
