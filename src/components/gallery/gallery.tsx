import { Swiper, SwiperSlide } from "swiper/react";
import '../portfolio/portfolio.scss'
import "swiper/scss";
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import plannerapp from './img/plannerapp.png'
import historyapp from './img/historyapp.png'
import todoapp from './img/todoapp.png'
import tictactoe from './img/tictactoe.png'
import parallaxeffect from './img/parallaxeffect.png'
import landingpage from './img/landingpage.png'
import { BsGithub, BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

export default function App() {
	const handleDiaryAppLink = () => {
		window.open("https://github.com/navidasaman/diary-app", "_blank", "noopener noreferrer");
	};

	const handleHistoryAppLink = () => {
		window.open("https://github.com/navidasaman/History-App", "_blank", "noopener noreferrer");
	};

	const handleToDoAppLink = () => {
		window.open("https://github.com/navidasaman/ToDo-app", "_blank", "noopener noreferrer");
	};

	const handleTicTacToeLink = () => {
		window.open("https://github.com/navidasaman/TicTacToe", "_blank", "noopener noreferrer");
	};

	const handleParallaxEffectLink = () => {
		window.open("https://navidasaman.github.io/saman-parallax-effect/", "_blank", "noopener noreferrer");
	};

	return (
		<div className="scroll-container">
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={3}
				scrollbar={{ draggable: true }}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
				}}
				pagination={{ el: '.swiper-pagination', clickable: true }}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false
				}}
			>
				<SwiperSlide>
					<div className="container">
						<img src={plannerapp} className="image" onClick={handleDiaryAppLink} alt="planner/diary react app made with typescript" />
						<div className="middle">
							<a href="https://github.com/navidasaman/diary-app" target="_blank" rel="noopener noreferrer" className=""> Diary App <BsGithub /></a>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="container">
						<img src={historyapp} className="image" onClick={handleHistoryAppLink} alt="project history app in java made in android studio" />
						<div className="middle" >
							<a href="https://github.com/navidasaman/History-App" target="_blank" rel="noopener noreferrer"> History App <BsGithub /></a>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="container">
						<img src={todoapp} className="image" onClick={handleToDoAppLink} alt="project to-do app made with java" />
						<div className="middle">
							<a href="https://github.com/navidasaman/ToDo-app" target="_blank" rel="noopener noreferrer"> To-Do App <BsGithub /></a>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="container">
						<img src={tictactoe} className="image" onClick={handleTicTacToeLink} alt="project tic tac toe made with java" />
						<div className="middle">
							<a href="https://github.com/navidasaman/TicTacToe" target="_blank" rel="noopener noreferrer"> Tic Tac Toe <BsGithub /></a>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="container">
						<img src={parallaxeffect} className="image" onClick={handleParallaxEffectLink} alt="project parallax effect website, react + typescript" />
						<div className="middle">
							<a href="https://navidasaman.github.io/saman-parallax-effect/" target="_blank" rel="noopener noreferrer"> Parallax Effect Website </a>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="container">
						<img src={landingpage} className="image" alt="project landing page made with html and css" />
					</div>
				</SwiperSlide>
				<div>
					<div className="swiper-button-prev slider-arrow" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1% 1.8% 1% 1%', transform: 'scale(0.5)', borderRadius: '50px' }}>
						<BsChevronLeft name="arrow-back-outline"></BsChevronLeft>
					</div>
					<div className="swiper-button-next slider-arrow" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1%', transform: 'scale(0.5)', borderRadius: '50px', marginRight: '-1.7%' }}>
						<BsChevronRight name="arrow-forward-outline" ></BsChevronRight>
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</Swiper>
		</div>
	);
}