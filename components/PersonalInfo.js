import Field from './element/Field';
import Input from './element/Input';
import Head from 'next/head';
import { useForm } from 'react-hook-form';

const PersonalInfo = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm();

	const handleSubmitForm = (formValues) => console.log(formValues);

	const resetForm = () => reset();

	return (
		<>
			<Head>
				<title>Personal Info</title>
				<meta name="description" content="Your Personal Info" />
			</Head>
			<form
				onSubmit={handleSubmit(handleSubmitForm)}
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
							<Field label="First name" columnSize="sm:col-span-3">
								<Input
									{...register('firstName')}
									type="text"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</Field>

							<Field label="Last name" columnSize="sm:col-span-3">
								<Input
									{...register('lastName')}
									type="text"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</Field>
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
