import PersonalInfo from '@/components/PersonalInfo';
import ProfileInfo from '@/components/ProfileInfo';
import NotificationMethod from '@/components/NotificationMethod';

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
			<p className="text-3xl mb-8 text-center mt-10">
				Multistep Form usages with Yup and Tailwind in Next.js
			</p>

			<p className="text-xl mb-5 text-center mt-10">Step {formStep + 1} / 4</p>

			{/* <PersonalInfo /> */}
			{formStep === 0 && (
				<PersonalInfo handleNextFormStep={handleNextFormStep} />
			)}
			{formStep === 1 && (
				<ProfileInfo
					handlePreviousFormStep={handlePreviousFormStep}
					handleNextFormStep={handleNextFormStep}
				/>
			)}
			{formStep === 2 && (
				<NotificationMethod
					handlePreviousFormStep={handlePreviousFormStep}
					handleNextFormStep={handleNextFormStep}
				/>
			)}
			{/* <ProfileInfo
				handlePreviousFormStep={handlePreviousFormStep}
				handleNextFormStep={handleNextFormStep}
			/> */}
		</main>
	);
}
