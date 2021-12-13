import siteMetadata from "@/data/siteMetadata";
import projectsData from "@/data/projectsData";
import Card from "@/components/Card";
import { SEO } from "@/components/SEO";

export default function Projects() {
	return (
		<>
			<SEO
				title={`Projects - ${siteMetadata.author}`}
				description={siteMetadata.description}
			/>
			<div className="pt-6 pb-8 space-y-2 md:space-y-5">
				<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
					Projects
				</h1>
			</div>
			<div className="container py-12">
				<div className="flex flex-wrap -m-4">
					{projectsData.map((d) => (
						<Card
							key={d.title}
							title={d.title}
							description={d.description}
							imgSrc={d.imgSrc}
							href={d.href}
							link={d.link}
						/>
					))}
				</div>
			</div>
		</>
	);
}
