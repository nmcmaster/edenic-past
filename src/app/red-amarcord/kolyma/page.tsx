'use client'
import BodyText from "@/app/ui/BodyText";
import Nav from "@/app/ui/Nav";
import {
	iframeStyle,
	paragraphBottomMargin,
	playerCss,
	playerHeight,
	pullQuote,
} from "@/app/utils/constants";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Kolyma() {
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
						className={"mx-auto"}
						src="https://bandcamp.com/EmbeddedPlayer/album=1841737863/size=small/bgcol=ffffff/linkcol=0687f5/track=1630471468/transparent=true/"
						seamless
					>
						<a href="https://edenicpast.bandcamp.com/album/red-amarcord">
							Red Amarcord by Edenic Past
						</a>
					</iframe>
				)}
			</div>
			<Nav
				hrefBackward="/red-amarcord/beria"
				hrefForward="/red-amarcord/the-connection-between-bruno-schulz-and-the-holodomor"
				textBackward="Beria"
				textForward="Holodomor"
			/>
			<BodyText>
				<p className={paragraphBottomMargin}>
					{" "}
					Kolyma is a northeastern territory of Siberia, named for a
					river that flows through it. Look on a map, perhaps you have
					forgotten that parts of Russia are actually East (and North)
					of China? A rough mirror image of Alaska reaches to kiss its
					American counterpart. In 1931 it was discovered that in this
					impossibly harsh climate there are great reserves of gold.
				</p>
				<p className={pullQuote}>
					"In the frozen desert of Kolyma, people are needed to work.
					That is why, simultaneously with Dal’stroy [the construction
					organization overseeing the gold mining operation], Moscow
					calls into being here a directorate of the Northeastern
					Camps of Correctional Labor (USVITLag). USVITLag fulfilled
					the same role vis-à-vis Dal’stroy as the concentration camp
					Auschwitz/Birkenau did vis-à-vis IG Farben—it supplied the
					slaves."
				</p>
			</BodyText>
		</>
	);
}
