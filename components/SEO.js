import Head from "next/head";
import { useRouter } from "next/router";
import siteMetadata from "@/data/siteMetadata";

export const SEO = ({ title, description, type = "website", images = [] }) => {
	const router = useRouter();
	return (
		<Head>
			<title>{title}</title>
			<meta name="robots" content="follow, index" />
			<meta name="description" content={description} />

			<meta
				property="og:url"
				content={`${siteMetadata.siteUrl}${router.asPath}`}
			/>
			<meta property="og:type" content={type} />
			<meta property="og:site_name" content={siteMetadata.title} />
			<meta property="og:description" content={description} />
			<meta property="og:title" content={title} />
			{images.length &&
				images.map(({ url }) => (
					<meta property="og:image" content={url} key={url} />
				))}

			{images.length && <meta name="twitter:image" content={images[0]} />}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={siteMetadata.twitter} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
		</Head>
	);
};

export const TagSEO = ({ title, description }) => {
	const router = useRouter();
	return (
		<>
			<SEO title={title} description={description} />
			<Head>
				<link
					rel="alternate"
					type="application/rss+xml"
					title={`${description} - RSS feed`}
					href={`${siteMetadata.siteUrl}${router.asPath}/feed.xml`}
				/>
			</Head>
		</>
	);
};

export const BlogSEO = ({
	authorDetails,
	title,
	summary,
	date,
	lastmod,
	url,
	images,
}) => {
	const router = useRouter();
	const publishedAt = new Date(date).toISOString();
	const modifiedAt = new Date(lastmod || date).toISOString();

	const featuredImages = images?.map((img) => {
		return {
			"@type": "ImageObject",
			url: `${siteMetadata.siteUrl}${img}`,
		};
	});

	const authorList = authorDetails
		? authorDetails.map((author) => {
				return {
					"@type": "Person",
					name: author.name,
				};
		  })
		: {
				"@type": "Person",
				name: siteMetadata.author,
		  };

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Article",
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": url,
		},
		headline: title,
		image: featuredImages,
		datePublished: publishedAt,
		dateModified: modifiedAt,
		author: authorList,
		publisher: {
			"@type": "Organization",
			name: siteMetadata.author,
			logo: {
				"@type": "ImageObject",
				url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
			},
		},
		description: summary,
	};

	return (
		<>
			<SEO
				title={title}
				description={summary}
				type="article"
				images={featuredImages}
			/>
			<Head>
				{date && (
					<meta
						property="article:published_time"
						content={publishedAt}
					/>
				)}
				{lastmod && (
					<meta
						property="article:modified_time"
						content={modifiedAt}
					/>
				)}
				<link
					rel="canonical"
					href={`${siteMetadata.siteUrl}${router.asPath}`}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData, null, 2),
					}}
				/>
			</Head>
		</>
	);
};
