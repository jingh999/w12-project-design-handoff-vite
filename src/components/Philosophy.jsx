
import './Reviews.css';

export const Philosophy = ({ articles }) => {
	return (
		<>
			<a className='cursor-pointer' href="#">
				<div id="Philosophy" className="font-inter wrapper relative text-darkblue bg-yogawhite flex py-[65px] mx-auto lg:py-[109px] pl-[5px] md:pl-[10px]">
					<div id='slider' className='mx-[4.5px] w-full h-full overflow-x-scroll whitespace-nowrap scroll smooth xl:overflow-x-hidden'>
						{articles.map((article, index) => (
							<div className="relative align-top mx-[7.5px] h-full inline-block m max-w-[194px] md:flex-col  md:px-5 md:max-w-[234px] lg:max-w-[417px]" key={index}>
								<img className=" max-w-[194px] max-h-[137px] md:max-w-[234px] md:max-h-[167px] lg:max-w-[417px] lg:max-h-[310px]"
									src={article.image}
									alt={article.title}
								/>
								<h3 className='font-semibold text-[22px] md:text-[25px]  lg:text-[36px] leading-[25px] md:leading-[31px] lg:leading-[45px] '>{article.title}</h3>
								<p className=" mt-[25px] text-wrap whitespace-normal text-[16px] md:text-[20px] lg:text-[30px] leading-[22px] md:leading-[28px] lg:leading-[45px]">{article.copy}</p>
								<a href="#" className='cursor-pointer'><p className='cursor-pointer text-[16px] md:text-[20px] lg:text-[30px]'>Read more &gt;</p></a>
							</div>
						))}
					</div>
				</div>
			</a>
		</>
	);
}

