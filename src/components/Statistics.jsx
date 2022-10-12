import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer,  Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
	const loaderData = useLoaderData();
	const topics = loaderData.data;
	console.log(topics);
	return (
		<div>
			<h1 className=' text-4xl font-semibold text-center text-blue-600'>
				Quiz Summary
			</h1>
			
			<div style={{ width: '80%', height: 400 }} className='my-7 mx-auto'>
				<ResponsiveContainer>
					<AreaChart
						data={topics}
						margin={{
							top: 10,
							right: 30,
							left: 0,
							bottom: 0,
						}}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Area
							type='monotone'
							dataKey='total'
							stroke='#123465'
							fill='#FF5959'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		
		</div>
	);
};

export default Statistics;