import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';
const QuizDetails = ({ questionData,correct,wrong, setCorrect, setWrong }) => {
;
console.log("question data"+ questionData)
	const [open, setOpen] = useState(true);

	const { question, options, correctAnswer } = questionData;
	
	// const splitQuestion = question.split('<p> </p>');
  // console.log('question' +  question)
  // console.log('splitQuestion' + splitQuestion);
	const handleCorrecctAns = (option) => {
		if (option === correctAnswer) {
			toast.success('Correct Answer', { autoClose: 200 });
			setCorrect(correct + 1);
		} else {
			toast.warning('Wrong Answer', { autoClose: 200 });
			setWrong(wrong + 1);
		}
	};
	console.log(questionData);
	return (
		<div className='w-3/4 mx-auto p-10 '>
			<div className='p-8 bg-blue-200'>
				<div className='flex justify-between'>
					<h1 className='md:text-2xl text-xl text-black'>
						<span className='text-red-500 text-2xl'>
							Question :
						</span>
						{question}
					</h1>

					<div
						onClick={() => setOpen(!open)}
						className='md:h-6 h-10 w-14 md:w-6 text-black'
					>
						{open ? <EyeIcon /> : <EyeSlashIcon></EyeSlashIcon>}
					</div>
				</div>
				<div className={open ? 'hidden' : 'block'}>
					<h1 className='text-xl py-2 bg-white px-2 rounded-sm my-5'>
						<span className='text-red-500 text-2xl'> Ans : </span>
						{correctAnswer}
					</h1>
				</div>
				<div className='grid grid-cols-1 justify-self-center md:grid-cols-2 my-3  gap-4'>
					{options.map((option) => (
						<div
							onClick={() => handleCorrecctAns(option)}
							key={option}
							className='bg-blue-300 py-3 mx-auto px-4 w-3/4 rounded hover:bg-red-500 hover:text-white ease-in duration-300 cursor-pointer'
						>
							{option}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default QuizDetails;
