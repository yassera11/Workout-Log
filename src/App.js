import React, { useState } from 'react';

import './App.css';
import Header from "./comp/Header/Header.js";
import WorkoutLog from "./comp/WorkoutLog/WorkoutLog.js";
import WorkoutItem from "./comp/WorkoutItem/WorkoutItem.js";
import AddWorkout from "./comp/AddWorkout/AddWorkout.js";
import { ID } from './comp/helper/id.js';




function App() {

  const [exercises, setExercises] = useState([]);

  const createWorkoutSession = (name, pounds, sets, reps, date) => {

    const newWorkoutSession = { id: ID(), name, sets, pounds, reps, date };
    const newState = [...exercises];

    newState.push(newWorkoutSession);

    setExercises(newState);
  };

  const onDeleteHandler = (id) => {

    const newExercise = exercises.filter(ex => ex.id !== id);
    setExercises(newExercise);

  }

  const Progress = (name, id) => {
    const currentExercises = exercises.filter(
      exercise => exercise.name === name
    );

    const index = currentExercises.findIndex(e => e.id === id);

    if (index) {
      const previousExercise = currentExercises[index - 1];
      const currentExercise = currentExercises[index];
      const poundsImprovments = currentExercise.pounds - previousExercise.pounds;


      return Math.round((+poundsImprovments / +previousExercise.pounds) * 100);

    }
  };

  return (
    <div className="App">
      <Header />
      <AddWorkout onCreateWorkout={createWorkoutSession} />
      <WorkoutLog>
        {exercises.map(({ id, name, pounds, sets, reps, date }) => (<WorkoutItem key={id} id={id} name={name} progress={Progress(name, id)} pounds={pounds} sets={sets} reps={reps} date={date} onDelete={onDeleteHandler}></WorkoutItem>))}
      </WorkoutLog>
    </div>
  );
}

export default App;
