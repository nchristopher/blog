const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const dedent = require("dedent");

const root = process.cwd();

const getLayouts = () => {
	const layoutPath = path.join(root, "layouts");
	const layoutList = fs
		.readdirSync(layoutPath)
		.map((filename) => path.parse(filename).name)
		.filter((file) => file.toLowerCase().includes("post"));
	return layoutList;
};

const genFrontMatter = (answers) => {
	const date = new Date().toISOString();
	const tagArray = answers.tags.split(",");
	tagArray.forEach((tag, index) => (tagArray[index] = tag.trim()));
	const tags = "'" + tagArray.join("','") + "'";

	let frontMatter = dedent`---
  title: ${answers.title ? answers.title : "Untitled"}
  date: '${date}'
  tags: [${answers.tags ? tags : ""}]
  draft: ${answers.draft === "yes" ? true : false}
  summary: ${answers.summary ? answers.summary : " "}
  images: []
  layout: ${answers.layout}
  `;

	frontMatter = frontMatter + "\n---";

	return frontMatter;
};

inquirer
	.prompt([
		{
			name: "title",
			message: "Enter post title:",
			type: "input",
		},
		{
			name: "summary",
			message: "Enter post summary:",
			type: "input",
		},
		{
			name: "draft",
			message: "Set post as draft?",
			type: "list",
			choices: ["yes", "no"],
		},
		{
			name: "tags",
			message:
				"Any Tags? Separate them with , or leave empty if no tags.",
			type: "input",
		},
		{
			name: "layout",
			message: "Select layout",
			type: "list",
			choices: getLayouts,
		},
	])
	.then((answers) => {
		// Remove special characters and replace space with -
		const fileName = answers.title
			.toLowerCase()
			.replace(/[^a-zA-Z0-9 ]/g, "")
			.replace(/ /g, "-")
			.replace(/-+/g, "-");
		const frontMatter = genFrontMatter(answers);
		const filePath = `data/blog/${fileName ? fileName : "untitled"}.mdx`;
		fs.writeFile(filePath, frontMatter, { flag: "wx" }, (err) => {
			if (err) {
				throw err;
			} else {
				console.log(`Blog post generated successfully at ${filePath}`);
			}
		});
	})
	.catch((error) => {
		if (error.isTtyError) {
			console.log(
				"Prompt couldn't be rendered in the current environment"
			);
		} else {
			console.log("Something went wrong, sorry!");
		}
	});
