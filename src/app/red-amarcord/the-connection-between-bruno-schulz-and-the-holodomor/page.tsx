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
				<div className={pullQuote}>
					"First, briefly, about the history of the Great Famine. At
					the start of 1929, the sixteenth Conference of the All
					Soviet Communist Party/Bolsheviks ratifies the program for
					universal collectivization. Stalin decides that by the fall
					of 1930 the entire peasantry of his country (which at that
					time means three-quarters of the population, more than one
					hundred million people) must be in kolkhozes. But the
					peasants do not want to join kolkhozes. Stalin proceeds to
					snuff out their resistance by two methods. He sends hundreds
					of thousands of them to the camps or deports and resettles
					them in Siberia, and the rest he undertakes to starve into
					obedience. The main blow falls on the Ukraine..."
				</div>
				<div className={pullQuote}>
					Officially, the matter presented itself as follows: Moscow
					had determined the size of the quota each village was
					obliged to deliver to the state—how much grain, potatoes,
					meat, and so on, but the quotas were significantly greater
					than what the land could realistically be expected to yield.
					Understandably, the peasants were unable to fulfill the plan
					imposed upon them. So then, by force—usually by military
					force—the authorities started confiscating everything edible
					in the villages. The peasants had nothing to eat and nothing
					to sow. A massive and deadly famine began in 1930, lasting
					seven years and reaping its grimmest harvest in 1933. The
					majority of demographers and historians today agree that in
					those years Stalin starved to death around ten million
					people. In the spring, when grass appeared, dysentery and
					diarrhea mowed down more than even hunger did.
				</div>
				<div className={pullQuote}>
					{" "}
					"Everything is so unclear, so unfathomable. Schulz wrote The
					Cinnamon Shops during the most terrible year of the Great
					Famine in the Ukraine, not far from Drohobych. Schulz most
					certainly knew nothing of this great tragedy, hidden as it
					was from the world. Yet what forces could have been at work
					here, what mysterious currents, associations, connections,
					and oppositions, that would lead him to begin his book with
					a magnificent, stupefying vision of satiety?"
				</div>
			</BodyText>
		</>
	);
}
