import Link from "@/components/Link";

export default function FourZeroFour() {
	return (
		<div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
			<div className="pt-6 pb-8 space-x-2 md:space-y-5">
				<h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-8xl md:leading-14 md:border-r-2 md:px-6">
					404
				</h1>
			</div>
			<div className="max-w-md">
				<p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
					That page doesn&#39;t exist.
				</p>
				<p className="mb-8">
					Maybe it did before. Who knows. But it isn&#39;t here now.
					<br />
					<Link
						href="/"
						className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
						aria-label='Read "title"'
					>
						Go home &rarr;
					</Link>
				</p>
			</div>
		</div>
	);
}
