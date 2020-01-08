import React from "react";

function WorkoutItem({ id, name, progress, pounds, sets, reps, date, onDelete }) {
    return (
        <li>
            <div className="workoutItem" >
                <span className="WorkoutItem-name">{name}</span>
                <span className={`WorkoutItem-pounds ${progress ? (progress > 0 && "up") || "down" : ""}`}>{pounds} lb{progress ? (progress > 0 && ` ${progress}%↑`) || ` ${progress}%↓` : ""}</span>
                <span className="WorkoutItem-sets " >{sets} sets</span>
                <span className="WorkoutItem-reps" >{reps} reps</span>
                <span className="WorkoutItem-date">{date}</span>
                <span className="X" onClick={() => onDelete(id)}>Remove</span>
            </div>

        </li>

    );
}


export default WorkoutItem;