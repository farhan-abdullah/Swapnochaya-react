import React from 'react';

const Footer = () => {
	return (
		<div className='relative w-[100%] h-fit '>
			<img
				className='w-[100%] md:h-[60vh] h-[70vh] bg-no-repeat  bg-cover'
				src='https://demo1.imithemes.com/html/born-to-give/images/parallax3.jpg'
				alt=''
			/>

			<div className=' absolute top-0 left-0'>
				<div className='md:max-w-[85%] text-[#fff] pt-[50px] px-[40px] mx-auto gap-x-5 gap-y-5 grid grid-cols-1 md:grid-cols-3'>
					<div className='flex flex-col gap-y-3'>
						<h2 className='uppercase'>About born to give</h2>
						<img
							className='w-[100px]  bg-cover'
							src='https://i.ibb.co/PTbTXHg/monsur-Recovered.png'
							alt=''
						/>
						<p className='text-[14px] text-[#898989]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
							egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus
							vel. Donec vel mauris quam.
						</p>
						{/* <div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                  </div> */}
					</div>
					<div className='flex flex-col gap-y-3'>
						<h2 className='uppercase'>BLogroll</h2>
						<ul className='flex flex-col gap-y-3 '>
							<li className='text-[#898989] hover:underline underline-offset-2 decoration-white	'>
								Become a volunteer
							</li>
							<li className='text-[#898989] hover:underline underline-offset-2 decoration-white	'>
								Our mission
							</li>
							<li className='text-[#898989] hover:underline underline-offset-2 decoration-white	'>
								Success stories
							</li>
							<li className='text-[#898989] hover:underline underline-offset-2 decoration-white	'>
								Meet our team
							</li>
						</ul>
					</div>
					<div>
						<h2 className='uppercase'>We are on twitter</h2>
					</div>
				</div>
			</div>
			<div className='bg-[#222222] text-[#898989] w-full md:h-16 text-center'>
				<p className='py-4'>© 2023 Swapnochaya. All Rights Reserved</p>
			</div>
		</div>
	);
};

export default Footer;

// https://i.ibb.co/PTbTXHg/monsur-Recovered.png
