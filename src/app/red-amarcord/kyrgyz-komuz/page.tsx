"use client";
import BodyText from "@/app/ui/BodyText";
import Nav from "@/app/ui/Nav";
import { iframeStyle, playerCss, playerHeight } from "@/app/utils/constants";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function KyrgyzKomuz() {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	return (
		<>
			<div style={playerHeight}>
				{isMounted && (
					<iframe
						style={iframeStyle}
						className={playerCss}
						src="https://bandcamp.com/EmbeddedPlayer/album=1841737863/size=small/bgcol=ffffff/linkcol=0687f5/track=310135901/transparent=true/"
						seamless
					>
						<a href="https://edenicpast.bandcamp.com/album/red-amarcord">
							Red Amarcord by Edenic Past
						</a>
					</iframe>
				)}
			</div>
			<Nav
				hrefBackward="/red-amarcord/katyn"
				hrefForward="/red-amarcord/koestler"
				textBackward="Katyn"
				textForward="Koestler"
			/>
			<BodyText>Kyrgyz Komuz</BodyText>
		</>
	);
}
