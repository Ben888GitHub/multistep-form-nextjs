import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { NotifField, PushNotiField } from './element/NotifField';
import { yupResolver } from '@hookform/resolvers/yup';
import Error from './element/Error';
import { notifySchema } from '@/utils/validation';
import { emailNotifs, pushNotifs } from '@/utils/personalInfo';
import { useStore } from '@/store/store';

const NotificationMethod = ({ handleNextFormStep, handlePreviousFormStep }) => {
	const { info, updateInfo } = useStore();

	const resetData = {
		notifications: [],
		push_notifications: ''
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		resolver: yupResolver(notifySchema),
		defaultValues: info
	});

	const handleSubmitForm = (formValues) => {
		console.log(formValues);
		updateInfo(formValues);
		handleNextFormStep();
	};

	const resetForm = () => {
		reset((formValues) => ({
			...formValues,
			...resetData
		}));
		updateInfo(resetData);
	};

	return (
		<>
			<Head>
				<title>Notifications Choice</title>
				<meta name="description" content="How can we notify you" />
			</Head>

			<form
				onSubmit={handleSubmit(handleSubmitForm)}
				className="lg:w-[60%] md:w-full w-full mx-auto bg-neutral-50"
			>
				<div className="space-y-12 p-14">
					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-900">
							Notifications
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							We&apos;ll always let you know about important changes, but you
							pick what else you want to hear about.
						</p>

						<div className="mt-10 space-y-10">
							<fieldset>
								<legend className="text-sm font-semibold leading-6 text-gray-900">
									By Email
								</legend>
								{errors.notifications && (
									<Error message={errors.notifications.message} />
								)}

								<div className="mt-6 space-y-6">
									{emailNotifs.map(({ label, description }, idx) => (
										<NotifField
											key={idx}
											label={label}
											description={description}
										>
											<input
												{...register('notifications')}
												type="checkbox"
												value={label.toLowerCase()}
												className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
											/>
										</NotifField>
									))}
								</div>
							</fieldset>
							{/*  */}
							<fieldset>
								<legend className="text-sm font-semibold leading-6 text-gray-900">
									Push Notifications
								</legend>
								<p className="mt-1 text-sm leading-6 text-gray-600">
									These are delivered via SMS to your mobile phone.
								</p>
								{errors.push_notifications && (
									<Error message={errors.push_notifications.message} />
								)}
								<div className="mt-6 space-y-6">
									{pushNotifs.map(({ label, value }, idx) => (
										<PushNotiField key={idx} label={label}>
											<input
												{...register('push_notifications')}
												id={value}
												value={value}
												name="push_notifications"
												type="radio"
												className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
											/>
										</PushNotiField>
									))}
								</div>
							</fieldset>
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
						type="button"
						className="text-sm font-semibold leading-6 text-gray-900"
						onClick={handlePreviousFormStep}
					>
						Back
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

export default NotificationMethod;
