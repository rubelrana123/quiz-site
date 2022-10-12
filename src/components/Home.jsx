import { Link, useLoaderData } from "react-router-dom";
import Topics from "./Topics";

const Home = () => {
    const loadedData = useLoaderData();
		const topics = loadedData.data;
		console.log(topics)
	return (
		// top banner
		<div>
			<div className='relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0'>
				<div className='flex flex-col items-start w-full max-h-80 max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl'>
					<div className='lg:my-4 lg:max-w-lg lg:pr-5'>
						<div className='max-w-xl  '>
							<div>
								<p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
									Test your skill
								</p>
							</div>
							<h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl sm:leading-none'>
								EDUCATION EVERYWHERE
							</h2>
							<p className='text-base text-gray-700 md:text-lg'>
								To test your Web Developer knowledge, employers may ask
								questions about HTML, CSS, JavaScript, SQL, Python, jQuery, and
								other programming languages,{' '}
								<span className=''>
									as well as questions about other web development tools and
									processes.
								</span>
							</p>
						</div>
						<div className='flex flex-col items-center md:flex-row'>
							<Link
								to='/'
								className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blacktransition duration-200 rounded shadow-md my-3 md:w-auto md:mr-4 md:mb-0 bg-blue-600 text-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
							>
								Get Started
							</Link>
							<Link
								to='/about'
								aria-label=''
								className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 my-3   hover:text-deep-purple-accent-700'
							>
								Learn more
							</Link>
						</div>
					</div>
				</div>
				<div className='inset-y-0 right-0  w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0'>
					<img
						className='object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full'
						src='https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
						alt=''
					/>
				</div>
			</div>
			<div>
				<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
					<div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-4 lg:row-gap-8'>
						{topics.map((topic) => (
							<Topics topic={topic}></Topics>
						))}
					</div>
				</div>
			</div>
		</div>

		//topics
	);
};

export default Home;
