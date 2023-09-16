import { Button } from "@/components";
import { Blob3, ContactImg } from "../../../public/graphics";
import Image from "next/image";

const Contact = () => {
	return (
		<>
			<section className={'relative container border-2 border-black px-28 pb-9 pt-12 flex flex-row justify-between mb-32'}>
				<div className={'w-full flex flex-col gap-8 max-w-[720px] basis-3/4'}>
					<h1>So, What's a Dream Wedding Like to You?</h1>
					<p>Contact us now and we’ll get you the best wedding vendors to ensure your dream wedding comes true.</p>
					<Button>Contact us</Button>
				</div>
				<Image src={ContactImg} alt={'Contact us'} className={'absolute w-[272px] basis-1/4 object-contain z-10 top-12 right-12'} />
			</section>
			<Image src={Blob3} alt={''} className={'absolute left-0 -translate-x-1/2 -translate-y-[140%] -z-10'} />
		</>
		
	);
};
export default Contact;