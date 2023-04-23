import PersonalInfo from '@/components/PersonalInfo';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [formStep, setFormStep] = useState(0);

	const handleNextFormStep = () => {
		setFormStep((prevForm) => prevForm + 1);
	};

	const handlePreviousFormStep = () => {
		setFormStep((prevForm) => prevForm - 1);
	};

	return (
		<main
			className={`container items-center justify-between mx-auto  ${inter.className}`}
		>
			<p className="text-3xl mb-10 text-center mt-10">
				Multistep Form usages with Yup and Tailwind in Next.js
			</p>
			<PersonalInfo />
		</main>
	);
}