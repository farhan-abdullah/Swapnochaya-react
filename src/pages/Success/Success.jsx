import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Parallax } from 'react-parallax';

const success = [
	{
		sImage: 'https://demo1.imithemes.com/html/born-to-give/images/event2.jpg',
		sTitle: 'Everyday food for Mumbai children',
		sPara: 'Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim.',
	},
	{
		sImage: 'https://demo1.imithemes.com/html/born-to-give/images/event2.jpg',
		sTitle: 'Everyday food for Mumbai children',
		sPara: 'Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim.',
	},
];

const Success = () => {
	return (
		<div className='bg-[#fff]'>
			<div className='py-[56px] flex justify-center items-center flex-col'>
				<h2 className='text-[36px] font-semibold  text-center'>
					Some of the success stories
				</h2>
				<div className='w-[80px] h-[2px] bg-primary rounded-md'></div>
			</div>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, A11y]}
				navigation
				// pagination={{ clickable: true }}
				// scrollbar={{ draggable: true, scrollbar: false }}
				// onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}>
				{
					<div className='w-[100%]'>
						{success.map(
							(
								scs,
								index // Fix here: Define 'scs' within the map function
							) => (
								<SwiperSlide key={index}>
									<div className='grid grid-cols-1 md:grid-cols-2'>
										<div className='w-full md:h-[340px] 2xl:h-auto bg-cover'>
											<img
												className='w-[100%] bg-cover'
												src={scs.sImage}
												alt=''
											/>
										</div>
										<div className='px-[30px] 2xl:px-[50px] py-[60px] 2xl:py-[80px] w-full bg-[#f7f7f6] '>
											<h2 className='text-[24px] 2xl:text-[30px] mb-[15px]'>
												{scs.sTitle}
											</h2>{' '}
											<p className='text-[15px] text-[#898989] mb-[15px] max-w-[520px] '>
												{scs.sPara}
											</p>{' '}
											<button className='bg-primary py-2 px-[30px] text-[#fff] uppercase '>
												View full story
											</button>
										</div>
									</div>
								</SwiperSlide>
							)
						)}
					</div>
				}
			</Swiper>

			{/* sponser section */}
			<div className='bg-[#fff]'>
				<div className=' w-[100%] md:w-[85%]   2xl:w-[70%]  py-10 px-5 md:px-0 mx-auto   flex justify-between items-center  flex-col md:flex-row '>
					<div className='md:max-w-[300px] md:text-start text-center'>
						<h3 className='text-[18px] font-semibold text-[#333333]'>
							Our Most Trusted <br /> Supporting partners
						</h3>
					</div>
					<div className=''>
						<div className='grid grid-cols-2 gap-y-3 pt-3 place-content-center place-items-center md:grid-cols-6'>
							<div className='w-full'>
								<img
									className=' w-full h-[65px] bg-cover'
									src='https://demo1.imithemes.com/html/born-to-give/images/logo6.png'
									alt=''
								/>
							</div>
							<div className='w-full'>
								<img
									className=' w-full h-[65px] bg-cover'
									src='https://demo1.imithemes.com/html/born-to-give/images/logo2.png'
									alt=''
								/>
							</div>
							<div className='w-full'>
								<img
									className=' w-full h-[65px] bg-cover'
									src='https://demo1.imithemes.com/html/born-to-give/images/logo4.png'
									alt=''
								/>
							</div>
							<img
								className=' w-full h-[65px] bg-cover'
								src='https://demo1.imithemes.com/html/born-to-give/images/logo1.png'
								alt=''
							/>
							<img
								className=' w-full h-[65px] bg-cover'
								src='https://demo1.imithemes.com/html/born-to-give/images/logo5.png'
								alt=''
							/>
							<img
								className=' w-full h-[65px] bg-cover'
								src='https://demo1.imithemes.com/html/born-to-give/images/logo6.png'
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
			{/* swiper sponser section end */}
			<div className='w-full h-full'>
				<Parallax
					blur={1}
					className='w-full h-full py-10 md:py-0 md:h-[50vh] md:relative'
					bgImage='https://demo1.imithemes.com/html/born-to-give/images/parallax6.jpg'
					bgImageAlt='the cat'
					strength={300}>
					<div className='flex justify-center items-center md:h-[60vh]'>
						<h2 className='text-[30px] px-4 md:text-[36px] w-full text-center text-white'>
							Making someone smile is the most <br /> beautiful thing in this world
						</h2>
					</div>
				</Parallax>
			</div>
		</div>
	);
};

export default Success;
