import React from 'react';
import { Parallax } from 'react-parallax';
import chittagong from '../../assets/chittagong.jpg';
const Devasted = () => {
	return (
		<div className='w-full h-full'>
			<Parallax
				blur={1}
				className='w-full h-full py-10 md:py-0 md:h-[80vh] md:relative bg-cover bg-center'
				bgImage={chittagong}
				bgImageAlt='the cat'
				strength={300}>
				<div className='md:absolute px-3 md:px-0 z-20 md:top-16 2xl:top-32 md:bottom-0 md:left-0  md:right-28'>
					<div className='w-full  md:w-[365px] md:ml-[60%] p-[30px] bg-white'>
						<h2 className='text-[24px] font-semibold'>
							Nepal has been seriously devastated by the recent earthquake.
						</h2>
						<p className='my-[30px] text-[15px] text-[#898989]'>
							Over 8,000 people have died (with death toll rising), thousands more are
							injured, and countless more have been displaced. Many homes, temples,
							and public monuments have been destroyed throughout the affected areas.
						</p>
						<button className='bg-primary py-2 px-[30px] text-[#fff] uppercase '>
							Donate to cause
						</button>
					</div>
				</div>
			</Parallax>
		</div>
	);
};

export default Devasted;
