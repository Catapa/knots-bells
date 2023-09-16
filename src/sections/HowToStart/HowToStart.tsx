import Image from "next/image";
import { CheckmarkImg, HowToStart_Img_2, HowToStart_Img_1, Blob } from "../../../public/graphics";
import './HowToStart.css';
import { Button } from "@/components";

interface CheckmarkProps {
	name: string;
}
const Checkmark = ({name} : CheckmarkProps) => {
	return (
		<div className={'relative border border-black w-[36px] h-[36px]'}>
			<Image src={CheckmarkImg} alt={`We provide ${name}`} className={'absolute bottom-0 -left-1.5 min-w-[62px]'}/>
		</div>
	);
};

const HowToStart = () => {
	return (
		<section className={'relative flex flex-row my-24'}>
			<div className={'w-full basis-[45%]'}>
				{/* Side Image */}
				<Image src={HowToStart_Img_1} alt={'How to start'} className={'absolute h-[556px] w-min object-contain left-0 -translate-x-1/2'}/>
				{/* Blob */}
				<Image src={Blob} alt={''} className={'absolute max-w-[333px] -z-10 left-[9%] top-14'}/>
				{/* Offset Image */}
				<div className={'relative w-max max-w-[466px]  h-max top-[33%] left-[5%] z-10'}>
					<span className={'absolute block w-full h-full border-2 border-black z-20'}/>
					<Image src={HowToStart_Img_2} alt={'How to start'} className={'w-full h-full object-contain translate-x-[25px] translate-y-[25px]'}/>
				</div>
			</div>
			<div className={'flex flex-col justify-start w-full basis-[55%]'}>
				<h1>How to start</h1>
				<ul className={'divide-y-2 divide-cream border-t-2 border-b-2 border-cream my-9'}>
					{/* List item - Consultation */}
					<li className={'list-item'}>
						{/* Checkmark */}
						<Checkmark name={'Consultation'}/>
						{/* Text */}
						<div className={'flex flex-col justify-between'}>
							<p className={'font-bold'}>Consultation</p>
							<p>Discuss your vision, budget, and wedding date with a planner.</p>
						</div>
					</li>
					{/* List item - Planning and Coordination */}
					<li className={'list-item'}>
						{/* Checkmark */}
						<Checkmark name={'Planning and Coordination'}/>
						{/* Text */}
						<div className={'flex flex-col justify-between'}>
							<p className={'font-bold'}>Planning and Coordination</p>
							<p>Develop a plan and timeline, handle logistics.</p>
						</div>
					</li>
					{/* List item - Budget Management */}
					<li className={'list-item'}>
						{/* Checkmark */}
						<Checkmark name={'Budget Management'}/>
						{/* Text */}
						<div className={'flex flex-col justify-between'}>
							<p className={'font-bold'}>Budget Management</p>
							<p>Set a budget and avoid overspending.</p>
						</div>
					</li>
					{/* List item - Design and Decor */}
					<li className={'list-item'}>
						{/* Checkmark */}
						<Checkmark name={'Design and Decor'}/>
						{/* Text */}
						<div className={'flex flex-col justify-between'}>
							<p className={'font-bold'}>Design and Decor</p>
							<p>Choose the elements to create the ambiance you desire.</p>
						</div>
					</li>
					{/* List item - Wedding Day Coordination */}
					<li className={'list-item'}>
						{/* Checkmark */}
						<Checkmark name={'Wedding Day Coordination'}/>
						{/* Text */}
						<div className={'flex flex-col justify-between'}>
							<p className={'font-bold'}>Wedding Day Coordination</p>
							<p>Oversee details and handle any issues for stress-free day.</p>
						</div>
					</li>
				</ul>
				<Button>Contact us</Button>
			</div>
		</section>
	);
};
export default HowToStart;