import React, { useState } from "react";

import TaskList from "./TaskList";
import UpdateData from "./UpdateData";

export default function Home() {
    const [selectedOption, updateSelectedOption] = useState({
        task: false,
        update: false,
    });

    function handleSelection(option) {
        const newSelected = { task: false, update: false };
        if (option) newSelected[option] = true;
        updateSelectedOption(newSelected);
    }

    return (
        <div>
            {selectedOption.task == true ? (
                <TaskList handleBack={handleSelection} />
            ) : selectedOption.update == true ? (
                <UpdateData handleBack={handleSelection} />
            ) : (
                <div>
                    <button onClick={() => handleSelection("task")}>
                        Add or Edit Task
                    </button>
                    <button onClick={() => handleSelection("update")}>
                        Update Daily Data
                    </button>
                </div>
            )}
        </div>
    );
}
