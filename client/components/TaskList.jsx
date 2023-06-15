import React, { useState } from "react";

import Task from "./Task";

export default function TaskList() {
    const [isTask, setIsTask] = useState(false);

    return (
        <div>
            {isTask ? (
                <Task />
            ) : (
                <button onClick={() => setIsTask(true)}>Add Task</button>
            )}
        </div>
    );
}
