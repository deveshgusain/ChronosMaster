import React from "react";

export default function UpdateTask({
    task,
    status,
    handleDone,
    handleComment,
}) {
    return (
        <div>
            <h4>Task: {task.name}</h4>
            <p> From: {task.startTime}</p>
            <p> To: {task.endTime}</p>
            <label htmlFor="status">Status</label>
            <br />
            <input
                type="radio"
                name={`${task._id}_status`}
                id="done"
                value="Done"
                checked={status.done === "done"}
                onChange={(e) => handleDone(task._id, "done")}
            />
            Done
            <br />
            <input
                type="radio"
                name={`${task._id}_status`}
                id="notDone"
                value="Not Done"
                checked={status.done === "notDone"}
                onChange={(e) => handleDone(task._id, "notDone")}
            />
            Not Done
            <br />
            <br />
            <label htmlFor="comment">Comment: </label>
            <input
                type="text"
                name="comment"
                id="comment"
                onChange={(e) => handleComment(task._id, e)}
            />
        </div>
    );
}
