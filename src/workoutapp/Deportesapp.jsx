import { useState } from 'react';
import ejercicios from '../workoutapp/data/ejercicios';
import { Row, PrinImg, Img, BotonIzq, BotonDer, GlobalStyle } from '../workoutapp/styledeportes';

const App = () => {
    const [workouts] = useState(ejercicios);
    const [currentWorkout, setCurrentWorkout] = useState(0);
    const [currentEx, setCurrentEx] = useState(0);
    const workout = workouts[currentWorkout];

    const nextWorkOut = () => {
        setCurrentWorkout(currentWorkout < workouts.length - 1 ? currentWorkout + 1 : currentWorkout);
    }

    const prevWorkout = () => {
        setCurrentWorkout(currentWorkout > 0 ? currentWorkout - 1 : 0);
    }
    return (
        <>
            <GlobalStyle />
            <h1>
                <BotonIzq onClick={prevWorkout}></BotonIzq>
                {workout.title}
                <BotonDer onClick={nextWorkOut}></BotonDer>
            </h1>

            <Row>
                <PrinImg src={workout.exercises[currentEx].img} />
                <Row>
                    {
                        workout.exercises.map((exercise, i, a) => <Img key={a} active={i === currentEx} src={exercise.img} onClick={() => setCurrentEx(i)} />)
                    }
                </Row>
            </Row>

        </>
    );
};

export default App;