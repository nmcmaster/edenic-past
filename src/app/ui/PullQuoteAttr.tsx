export const PullQuoteAuthor = "text-right text-sm pt-2";

const PullQuoteAttr = ({
	author,
	title,
	subtitle,
}: {
	author: string;
	title: string;
	subtitle?: string;
}) => {

	return (
		<div className={PullQuoteAuthor}>
			{author}, <span className="italic">{title}</span>
			{subtitle && `, "${subtitle}"`}
		</div>
	);
};

export default PullQuoteAttr;
