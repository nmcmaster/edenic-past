export const PullQuoteAuthor = "text-right text-sm pt-1.5";

const PullQuoteAttr = ({
	author,
	title,
	subtitle,
	year
}: {
	author: string;
	title?: string;
	subtitle?: string;
	year?: string;
}) => {
	return (
		<div className={PullQuoteAuthor}>
			{author}
			{title && ","}
			{title && <span className="italic"> {title}</span>}
			{subtitle && `, "${subtitle}"`}
			{year && `, ${year}`}
		</div>
	);
};

export default PullQuoteAttr;
