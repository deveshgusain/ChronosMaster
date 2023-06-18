import React, { useState } from "react";

import UpdateTask from "./updateTask";

import { useSelector, useDispatch } from "react-redux";

import { add } from "../features/status/statusSlice";

export default function UpdateData({ handleBack }) {
    const tasks = useSelector((state) => state.tasks);

    const dispatch = useDispatch();

    const keyTasks = Object.keys(tasks);

    keyTasks.sort((a, b) => {
        if (tasks[a].startTime < tasks[b].startTime) return -1;
        if (tasks[a].startTime > tasks[b].startTime) return 11;
        return 0;
    });

    const [status, setStatus] = useState(
        keyTasks.map((key) => ({
            _id: tasks[key]._id,
            done: "notDone",
            comment: "",
        }))
    );

    function handleDone(_id, isDone) {
        const updatedStatus = [...status];
        const idx = updatedStatus.findIndex((item) => item._id === _id);
        updatedStatus[idx].done = isDone;
        setStatus(updatedStatus);
    }

    function handleComment(_id, event) {
        const updatedStatus = [...status];
        const idx = updatedStatus.findIndex((item) => item._id === _id);
        updatedStatus[idx].comment = event.target.value;
        setStatus(updatedStatus);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        status.map((item) => {
            dispatch(add(item));
        });
        handleBack();
    }

    return (
        <div>
            <button onClick={handleBack}>Back</button>
            <form onSubmit={handleFormSubmit}>
                {keyTasks.map((key) => (
                    <UpdateTask
                        key={key}
                        task={tasks[key]}
                        status={status.find((item) => item._id === key)}
                        handleDone={handleDone}
                        handleComment={handleComment}
                    />
                ))}
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
