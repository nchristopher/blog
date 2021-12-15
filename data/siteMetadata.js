const siteMetadata = {
	title: "Nicholas Christopher",
	author: "Nicholas Christopher",
	headerTitle: "Nicholas Christopher",
	description:
		"I'm an intermediate JavaScript developer, currently working on my Discord bot, Quoter. I'm a big fan of privacy & open-source software so most of my projects reflect that!",
	language: "en-us",
	siteUrl: "https://nchristopher.me",
	siteLogo: "/static/images/logo.png",
	image: "/static/images/avatar.png",
	socialBanner: "/static/images/twitter-card.png",
	email: "nchristopher@tuta.io",
	github: "https://github.com/nchristopher",
	twitter: "https://twitter.com/nickhasoccured",
	youtube: "https://youtube.com/NicholasChristopher123",
	steam: "https://steamcommunity.com/id/nchristopher",
	reddit: "https://reddit.com/u/nickhasoccured",
	mastodon: "https://mastodon.online/web/@nchristopher",
	tiktok: "https://www.tiktok.com/@nicholaschristopher",
	locale: "en-US",
	comment: {
		// Select a provider and use the environment variables associated to it
		// https://vercel.com/docs/environment-variables
		provider: "giscus", // supported providers: giscus, utterances, disqus
		giscusConfig: {
			// Visit the link below, and follow the steps in the 'configuration' section
			// https://giscus.app/
			repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
			repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
			category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
			categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
			mapping: "pathname", // supported options: pathname, url, title
			reactions: "1", // Emoji reactions: 1 = enable / 0 = disable
			// Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
			metadata: "0",
			// theme example: light, dark, dark_dimmed, dark_high_contrast
			// transparent_dark, preferred_color_scheme, custom
			theme: "preferred_color_scheme",
			// theme when dark mode
			darkTheme: "dark",
			// If the theme option above is set to 'custom`
			// please provide a link below to your custom theme css file.
			// example: https://giscus.app/themes/custom_example.css
			themeURL: "",
		},
	},
};

module.exports = siteMetadata;
