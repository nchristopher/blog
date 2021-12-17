import metadata from "@/data/metadata";

const formatDate = (date) => {
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	const now = new Date(date).toLocaleDateString(metadata.language, options);

	return now;
};

export default formatDate;
