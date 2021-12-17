import React, { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";

import metadata from "@/data/metadata";

const Giscus = ({ mapping }) => {
	const [enableLoadComments, setEnabledLoadComments] = useState(true);
	const { theme, resolvedTheme } = useTheme();
	const commentsTheme =
		metadata.comment.giscusConfig.themeURL === ""
			? theme === "dark" || resolvedTheme === "dark"
				? metadata.comment.giscusConfig.darkTheme
				: metadata.comment.giscusConfig.theme
			: metadata.comment.giscusConfig.themeURL;

	const COMMENTS_ID = "comments-container";

	const LoadComments = useCallback(() => {
		setEnabledLoadComments(false);
		const script = document.createElement("script");
		script.src = "https://giscus.app/client.js";
		script.setAttribute("data-repo", metadata.comment.giscusConfig.repo);
		script.setAttribute(
			"data-repo-id",
			metadata.comment.giscusConfig.repositoryId
		);
		script.setAttribute(
			"data-category",
			metadata.comment.giscusConfig.category
		);
		script.setAttribute(
			"data-category-id",
			metadata.comment.giscusConfig.categoryId
		);
		script.setAttribute("data-mapping", mapping);
		script.setAttribute(
			"data-reactions-enabled",
			metadata.comment.giscusConfig.reactions
		);
		script.setAttribute(
			"data-emit-metadata",
			metadata.comment.giscusConfig.metadata
		);
		script.setAttribute("data-theme", commentsTheme);
		script.setAttribute("crossorigin", "anonymous");
		script.async = true;

		const comments = document.getElementById(COMMENTS_ID);
		if (comments) comments.appendChild(script);

		return () => {
			if (comments) comments.innerHTML = "";
		};
	}, [commentsTheme, mapping]);

	// Reload on theme change
	useEffect(() => {
		const iframe = document.querySelector("iframe.giscus-frame");
		if (!iframe) return;
		LoadComments();
	}, [LoadComments]);

	return (
		<div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
			{enableLoadComments && (
				<button onClick={LoadComments}>Load Comments</button>
			)}
			<div className="giscus" id={COMMENTS_ID} />
		</div>
	);
};

export default Giscus;
