import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
  const loaderData = useLoaderData();
  const topics = loaderData.data;
  console.log(topics)
  return (
    <div>
      <h1>this is stististics page</h1>
    </div>
  );
};

export default Statistics;