import React from "react";

const AddWorkout = ({ onCreateWorkout }) => {


    const onSubmitHandler = event => {
        event.preventDefault();

        const { name, pounds, sets, reps, date } = event.target.elements;

        if (name.value && pounds.value && reps.value && date.value) {
            onCreateWorkout(name.value, pounds.value, sets.value, reps.value, date.value);
        }
        name.value = "";
        pounds.value = "";
        sets.value = "";
        reps.value = "";
        date.value = "";

    };
    return (
        <div>
            <form onSubmit={onSubmitHandler} className="addWorkout">
                <input type="text" placeholder="Exercise" name="name"></input>
                <input type="number" placeholder="Pounds" name="pounds"></input>
                <input type="number" placeholder="Sets" name="sets"></input>
                <input type="number" placeholder="Reps" name="reps"></input>
                <input type="date" name="date"></input>
                <button className="addButton">Add</button>
            </form>
        </div>



    );
};


export default AddWorkout;