import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
		<div>
			<footer className='px-4 py-8 dark:bg-gray-800 dark:text-gray-400 h-full'>
				<div className='container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0'>
					<div className='flex flex-row pr-3 space-x-4 sm:space-x-8'>
						<div className='flex items-center justify-center flex-shrink-0 w-12 h-12 text-3xl text-blue-500 mr-3'>
							QUIZZ
						</div>
						<ul className='flex flex-wrap items-center space-x-4 sm:space-x-8'>
							<li>
								<Link rel='noopener noreferrer' to='/'>
									Terms of Use
								</Link>
							</li>
							<li>
								<Link rel='noopener noreferrer' to='/'>
									Privacy
								</Link>
							</li>
						</ul>
					</div>
					<ul className='flex flex-wrap pl-3 space-x-4 sm:space-x-8'>
						<li>
							<Link rel='noopener noreferrer' to='/'>
								Instagram
							</Link>
						</li>
						<li>
							<Link rel='noopener noreferrer' to='/'>
								Facebook
							</Link>
						</li>
						<li>
							<Link rel='noopener noreferrer' to='/'>
								Twitter
							</Link>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default Footer;