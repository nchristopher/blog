import metadata from "@/data/metadata";
import SocialIcon from "@/components/social-icons";

export default function Footer() {
	return (
		<footer>
			<div className="flex flex-col items-center mt-16">
				<div className="flex mb-3 space-x-4">
					<SocialIcon
						kind="twitter"
						href={metadata.twitter}
						size="6"
					/>
					<SocialIcon kind="github" href={metadata.github} size="6" />
					<SocialIcon
						kind="mail"
						href={`mailto:${metadata.email}`}
						size="6"
					/>
					<SocialIcon
						kind="youtube"
						href={metadata.youtube}
						size="6"
					/>
					<SocialIcon kind="steam" href={metadata.steam} size="6" />
				</div>
				<div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
					&copy; 2021 Nicholas Christopher
				</div>
			</div>
		</footer>
	);
}
