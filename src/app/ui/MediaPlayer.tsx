"use client";
import { useEffect, useState } from "react";

export const iframeStyle = {
	border: 0,
	margin: "0 auto",
	height: 42,
	display: "block",
};

export const playerCss = "lg:w-2/3 w-full mx-auto";

export const playerHeight = { height: 42 };

export default function MediaPlayer({
	src,
	albumHref,
	albumTitle,
}: {
	src: string;
	albumHref: string;
	albumTitle: string;
}) {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<div style={playerHeight}>
			{isMounted && (
				<iframe
					style={iframeStyle}
					className={playerCss}
					src={src}
					seamless
				>
					<a href={albumHref}>
						{albumTitle}
					</a>
				</iframe>
			)}
		</div>
	);
}
