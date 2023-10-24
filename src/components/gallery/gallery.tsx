import { Swiper, SwiperSlide } from "swiper/react";
import '../portfolio/portfolio.scss';
import "swiper/scss";
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import plannerapp from "./img/a.png";
import historyapp from "./img/c.png";
import todoapp from "./img/d.png";
import tictactoe from "./img/e.png";
import parallaxeffect from "./img/f.png";
import landingpage from "./img/b.png";
import employeeManagementSystem from "./img/g.png";
import { BsGithub, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

const projects = [
	{
		image: plannerapp,
		link: "https://github.com/navidasaman/diary-app",
		title: "Diary App",
	},
	{
		image: historyapp,
		link: "https://github.com/navidasaman/History-App",
		title: "History App",
	},
	{
		image: todoapp,
		link: "https://github.com/navidasaman/ToDo-app",
		title: "To-Do App",
	},
	{
		image: tictactoe,
		link: "https://github.com/navidasaman/TicTacToe",
		title: "Tic Tac Toe",
	},
	{
		image: parallaxeffect,
		link: "https://navidasaman.github.io/saman-parallax-effect/",
		title: "Parallax Effect Website",
	},
	{
		image: landingpage,
		link: "",
		title: "Landing Page",
	},
	{
		image: employeeManagementSystem,
		link: "https://github.com/navidasaman/FullstackJavaReact",
		title: "Employee Management System",
	},
];

export default function App() {
	const handleLink = (link: string) => {
		window.open(link, "_blank", "noopener noreferrer");
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
				{projects.map((project, index) => (
					<SwiperSlide key={index}>
						<div className="container">
							<img
								src={project.image}
								className="image"
								onClick={() => handleLink(project.link)}
								alt={project.title}
							/>
							<div className="middle">
								{project.link ? (
									<a href={project.link} target="_blank" rel="noopener noreferrer">
										{project.title} <BsGithub />
									</a>
								) : (
									project.title
								)}
							</div>
						</div>
					</SwiperSlide>
				))}
				<div>
					<div className="swiper-button-prev slider-arrow" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1% 1.8% 1% 1%', transform: 'scale(0.5)', borderRadius: '50px' }}>						¨
						<BsChevronLeft name="arrow-back-outline" />
					</div>
					<div className="swiper-button-next slider-arrow" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1%', transform: 'scale(0.5)', borderRadius: '50px', marginRight: '-1.7%' }}>
						<BsChevronRight name="arrow-forward-outline" />
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</Swiper>
		</div>
	);
}