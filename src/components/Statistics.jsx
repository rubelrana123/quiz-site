import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid,  Legend,  Line,  LineChart,  Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
	const loaderData = useLoaderData();
	const topics = loaderData.data;
	console.log(topics);
	return (
		<div>
      <h1 className=' text-4xl font-semibold text-center text-blue-600'>Quiz Summary</h1>
			<div className='mt-16 ml-52'>
				<LineChart
					width={730}
					height={250}
					data={topics}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis/>
					<Tooltip />
					<Legend />
					<Line type='monotone' dataKey='total' stroke='#8884d8' />
				</LineChart>
			</div>
		</div>
	);
};

export default Statistics;