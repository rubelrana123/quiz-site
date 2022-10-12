import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from './QuizDetails';

const Quiz = () => {

  const quiz = useLoaderData();
  const {data } = quiz;
  const {name, questions} = data;

   const [correct, setCorrect] = useState(0);
		const [wrong, setWrong] = useState(0);
    
  
  // console.log(quiz);
  return (
		<div>
			<h1 className='text-center text-4xl text-blue-600'>Quiz of {name}</h1>
			<div className='flex justify-center text-3xl py-4'>
				<h1 className='text-green'>Correct : {correct}</h1> 
        <h1 className='ml-3 text-red-500'>Wrong : {wrong}</h1>
			</div>
			<div>
				{questions.map((questionData ,index) => (
					<QuizDetails key={index}
						setCorrect={setCorrect}
						correct={correct}
						wrong={wrong}
						setWrong={setWrong}
						questionData={questionData}
					/>
				))}
			</div>
		</div>
	);
};

export default Quiz;