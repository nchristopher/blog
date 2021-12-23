import { useRef, useState } from "react";

const NewsletterForm = ({ title = "Subscribe to my newsletter" }) => {
	const inputEl = useRef(null);
	const [error, setError] = useState(false);
	const [message, setMessage] = useState("");
	const [subscribed, setSubscribed] = useState(false);

	const subscribe = async (e) => {
		e.preventDefault();

		const res = await fetch("/api/subscribe", {
			body: JSON.stringify({
				email: inputEl.current.value,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		const { resError } = await res.json();
		if (resError) {
			setError(true);
			setMessage(
				"Your e-mail address is invalid or you're already subscribed!"
			);
			return;
		}

		inputEl.current.value = "";
		setError(false);
		setSubscribed(true);
		setMessage("🎉 You've been subscribed!");
	};

	return (
		<div>
			<div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
				{title}
			</div>
			<form className="flex flex-col sm:flex-row" onSubmit={subscribe}>
				<div>
					<label className="sr-only" htmlFor="email-input">
						Email address
					</label>
					<input
						autoComplete="email"
						className="px-4 rounded-md w-72 dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600"
						id="email-input"
						name="email"
						placeholder={
							subscribed
								? "🎉 You've been subscribed!"
								: "Enter your email"
						}
						ref={inputEl}
						required
						type="email"
						disabled={subscribed}
					/>
				</div>
				<div className="flex w-full mt-2 rounded-md shadow-sm sm:mt-0 sm:ml-3">
					<button
						className={`py-2 sm:py-0 w-full bg-primary-600 px-4 rounded-md font-medium text-white ${
							subscribed
								? "cursor-default"
								: "hover:bg-primary-700 dark:hover:bg-primary-500"
						} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 dark:ring-offset-black`}
						type="submit"
						disabled={subscribed}
					>
						{subscribed ? "Thank you!" : "Sign up"}
					</button>
				</div>
			</form>
			{error && (
				<div className="pt-2 text-sm text-red-500 w-72 sm:w-96 dark:text-red-400">
					{message}
				</div>
			)}
		</div>
	);
};

export default NewsletterForm;

export const BlogNewsletterForm = ({ title = "Like what you're reading?" }) => (
	<div className="flex items-center justify-center">
		<div className="p-6 bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8">
			<NewsletterForm title={title} />
		</div>
	</div>
);
