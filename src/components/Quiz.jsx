import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from './QuizDetails';

const Quiz = () => {

  const quiz = useLoaderData();
  const {data } = quiz;
  const {name, questions} = data;
  
  console.log(quiz);
  return (
		<div>
			<h1 className='text-center text-4xl text-blue-600'>Quiz of {name}</h1>

			<div>
        {
          questions.map(questionData => <QuizDetails questionData = {questionData}/> )
        }
		
			</div>
		</div>
	);
};

export default Quiz;