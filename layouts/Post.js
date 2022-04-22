import PageTitle from "@/components/PageTitle";
import SectionContainer from "@/components/SectionContainer";
import { BlogSEO } from "@/components/SEO";
import metadata from "@/data/metadata";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import formatDate from "@/lib/utils/formatDate";
import ScrollTop from "@/components/ScrollTop";

export default function PostLayout({ frontMatter, children }) {
	const { date, title } = frontMatter;
	const { theme } = useTheme();

	return (
		<SectionContainer>
			<BlogSEO
				url={`${metadata.url}/blog/${frontMatter.slug}`}
				{...frontMatter}
			/>
			<ScrollTop />
			<article>
				<div>
					<header>
						<div className="space-y-1">
							<dl>
								<div>
									<dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
										<time dateTime={date}>
											{formatDate(date)}
										</time>
									</dd>
								</div>
							</dl>
							<div>
								<PageTitle>{title}</PageTitle>
							</div>
						</div>
					</header>
					<div
						className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 "
						style={{ gridTemplateRows: "auto 1fr" }}
					>
						<div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
							<div className="pt-10 pb-8 sm:prose-md md:prose-lg prose dark:prose-dark max-w-none">
								{children}
							</div>
						</div>
						<Giscus
							repo={metadata.comment.giscusConfig.repo}
							repoId={metadata.comment.giscusConfig.repositoryId}
							category={metadata.comment.giscusConfig.category}
							categoryId={
								metadata.comment.giscusConfig.categoryId
							}
							mapping={frontMatter.slug}
							reactionsEnabled={
								metadata.comment.giscusConfig.reactions
							}
							emitMetadata={
								metadata.comment.giscusConfig.metadata
							}
							theme={theme}
						/>
					</div>
				</div>
			</article>
		</SectionContainer>
	);
}
