import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({topic}) => {
  console.log(topic)
  const {id,logo, name, total} = topic
  return (
		<div className='bg-blue-100 p-6 rounded shadow-lg'>
			<img
				className='object-cover w-full h-40 mb-6 rounded shadow-lg md:h-64 xl:h-72'
				src={logo}
				alt=''
			/>
			<div className='flex justify-between'>
				<p className='text-blue-700 font-semibold text-xl  '>Topic: {name}</p>
				<p className='font-semibold text-xl text-blue-800'>Quiz: {total}</p>
			</div>

			<Link to={`../quiz/${id}`}>
				<button
					type='button'
					className='px-8 block w-full mt-4 py-3  rounded-full bg-green-400 text-2xl text-white hover:bg-cyan-400'
				>
					Quiz Start
				</button>
			</Link>
		</div>
	);
};

export default Topics;