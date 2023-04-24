import { schema } from '@/utils/validation';
import Field from './element/Field';
import Input from './element/Input';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { basicInfo, locationInfo } from '@/utils/personalInfo';

const PersonalInfo = ({ handleNextFormStep }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmit = (formValues) => {
		console.log(formValues);
		// todo, set global state with formValues, to be used as defaultValue of useForm in the next component
		handleNextFormStep();
	};

	const resetForm = () => reset();

	return (
		<>
			<Head>
				<title>Personal Info</title>
				<meta name="description" content="Your Personal Info" />
			</Head>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="lg:w-[60%] md:w-full w-full mx-auto bg-neutral-50"
			>
				<div className="space-y-12 p-14">
					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-900">
							Personal Information
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Use a permanent address where you can receive mail.
						</p>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							{basicInfo(errors).map(({ label, error, value }, idx) => (
								<Field
									key={idx}
									label={label}
									error={error}
									columnSize={`${
										label === 'Email address'
											? 'sm:col-span-4'
											: 'sm:col-span-3'
									}`}
								>
									<Input
										{...register(value)}
										type="text"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</Field>
							))}

							<Field label="Country" columnSize="sm:col-span-3">
								<select
									{...register('country')}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
								>
									<option>United States</option>
									<option>Canada</option>
									<option>Mexico</option>
								</select>
							</Field>

							<Field label="Street address" columnSize="col-span-full">
								<Input
									{...register('street_address')}
									type="text"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</Field>

							{locationInfo(errors).map(({ label, error, value }, idx) => (
								<Field
									key={idx}
									label={label}
									error={error}
									columnSize={`sm:col-span-2 ${
										label === 'City' && 'sm:col-start-1'
									}`}
								>
									<Input
										{...register(value)}
										type="text"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</Field>
							))}
						</div>
					</div>
				</div>
				<div className="pb-10 flex items-center justify-end gap-x-6 mr-14">
					<button
						type="button"
						className="text-sm font-semibold leading-6 text-gray-900"
						onClick={resetForm}
					>
						Reset
					</button>
					<button
						type="submit"
						className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Next
					</button>
				</div>
			</form>
		</>
	);
};

export default PersonalInfo;
