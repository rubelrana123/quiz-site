import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';
const QuizDetails = ({ questionData }) => {
	// console.log(questionData);
  const [open , setOpen] = useState(true);
  const { question, options, correctAnswer } = questionData;
  const handleCorrecctAns =  (option) =>{
    if(option === correctAnswer) {
      toast.success('Correct Answer', {autoClose : 200})
    }
    else {
      toast.warning('Wrong Answer' , {autoClose : 200})
    }

  }
  console.log(questionData) 
	return (
		<div className='w-3/4 mx-auto p-10 '>
			<div className='p-8 bg-blue-200'>
				<div className='flex justify-between'>
					<h1 className='text-2xl text-black'>Question : {question}</h1>

					<div onClick={() => setOpen(!open)} className='h-6 w-6 text-black'>
						{open ? <EyeIcon /> : <EyeSlashIcon></EyeSlashIcon>}
					</div>
				</div>
				<div className={open ? 'hidden' : 'block'}>
					<h1 className='text-xl py-2 bg-white px-2 rounded-sm my-5'>
						<span className='text-red-500 text-2xl'> Ans : </span>
						{correctAnswer}
					</h1>
				</div>
				<div className='grid grid-cols-2 my-3 gap-4'>
					{options.map((option) => (
						<div
							onClick={() => handleCorrecctAns(option)}
							className='p-3 bg-gray-400 rounded-md cursor-pointer'
					
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
