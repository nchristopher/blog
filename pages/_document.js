import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="alternate"
						type="application/rss+xml"
						href="/feed.xml"
					/>
				</Head>
				<body className="antialiased text-black bg-white dark:bg-neutral-900 dark:text-white">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
