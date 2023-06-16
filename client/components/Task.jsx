import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { add, update } from "../features/task/taskSlice";

export default function Task({ task, setIsTask }) {
    const dispatch = useDispatch();

    const [name, setName] = useState(task.name);
    const [startTime, setStartTime] = useState(task.startTime);
    const [endTime, setEndTime] = useState(task.endTime);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(add({ _id: task._id, name, startTime, endTime }));
        setIsTask(false);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label for="name">Task Name: </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label for="time">From: </label>
                <input
                    type="time"
                    id="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />
                <label for="time">To: </label>
                <input
                    type="time"
                    id="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />
                <br />
                <input type="submit" value="Save"></input>
            </form>
        </div>
    );
}
