import React, { useState } from "react";

export default function Task() {
    const [name, setName] = useState();
    const [time, setTime] = useState();

    return (
        <div>
            <form action="">
                <label for="name">Task Name: </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label for="time">Time: </label>
                <input
                    type="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <br />
            </form>
        </div>
    );
}
