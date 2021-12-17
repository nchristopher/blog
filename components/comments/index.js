import metadata from "@/data/metadata";
import dynamic from "next/dynamic";

const GiscusComponent = dynamic(
	() => {
		return import("@/components/comments/Giscus");
	},
	{ ssr: false }
);

const Comments = ({ frontMatter }) => {
	let term;
	switch (
		metadata.comment.giscusConfig.mapping ||
		metadata.comment.utterancesConfig.issueTerm
	) {
		case "pathname":
			term = frontMatter.slug;
			break;
		case "url":
			term = window.location.href;
			break;
		case "title":
			term = frontMatter.title;
			break;
	}
	return (
		<div id="comment">
			{metadata.comment && metadata.comment.provider === "giscus" && (
				<GiscusComponent mapping={term} />
			)}
		</div>
	);
};

export default Comments;
