import Mail from "./mail.svg";
import GitHub from "./github.svg";
import YouTube from "./youtube.svg";
import LinkedIn from "./linkedin.svg";
import Twitter from "./twitter.svg";
import Dev from "./devdotto.svg";
import Mastodon from "./mastodon.svg";
import Steam from "./steam.svg";
import TikTok from "./tiktok.svg";
import Reddit from "./reddit.svg";

// Icons taken from: https://simpleicons.org/

const components = {
	mail: Mail,
	github: GitHub,
	youtube: YouTube,
	linkedin: LinkedIn,
	twitter: Twitter,
	dev: Dev,
	mastodon: Mastodon,
	steam: Steam,
	tiktok: TikTok,
	reddit: Reddit,
};

const SocialIcon = ({ kind, href, size = 8 }) => {
	if (
		!href ||
		(kind === "mail" &&
			!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
	) {
		return null;
	}

	const SocialSvg = components[kind];

	return (
		<a
			className="text-sm text-gray-500 transition hover:text-gray-600"
			target="_blank"
			rel="noopener noreferrer"
			href={href}
		>
			<span className="sr-only">{kind}</span>
			<SocialSvg
				className={`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-${size} w-${size}`}
			/>
		</a>
	);
};

export default SocialIcon;
