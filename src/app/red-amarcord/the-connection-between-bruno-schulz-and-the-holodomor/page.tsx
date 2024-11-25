"use client";
import BodyText from "@/app/ui/BodyText";
import Nav from "@/app/ui/Nav";
import {
	iframeStyle,
	playerCss,
	playerHeight,
	pullQuote,
} from "@/app/utils/constants";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function TheConnectionBetweenBrunoSchulzAndTheHolodomor() {
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
						src="https://bandcamp.com/EmbeddedPlayer/album=1841737863/size=small/bgcol=ffffff/linkcol=0687f5/track=2157112391/transparent=true/"
						seamless
					>
						<a href="https://edenicpast.bandcamp.com/album/red-amarcord">
							Red Amarcord by Edenic Past
						</a>
					</iframe>
				)}
			</div>
			<Nav
				hrefBackward="/red-amarcord/kolyma"
				hrefForward="/red-amarcord/chuck-schuldiner"
				textBackward="Holodomor"
				textForward="Chuck Schuldiner"
			/>
			<BodyText>
				<p className={pullQuote}>
					{" "}
					"Everything is so unclear, so unfathomable. Schulz wrote The
					Cinnamon Shops during the most terrible year of the Great
					Famine in the Ukraine, not far from Drohobych. Schulz most
					certainly knew nothing of this great tragedy, hidden as it
					was from the world. Yet what forces could have been at work
					here, what mysterious currents, associations, connections,
					and oppositions, that would lead him to begin his book with
					a magnificent, stupefying vision of satiety?"
				</p>
			</BodyText>
		</>
	);
}
