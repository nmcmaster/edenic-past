"use client";
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
				<div className={pullQuote}>
					<span className="font-bold">
						{" "}
						WHAT I SAW AND UNDERSTOOD IN THE CAMPS
					</span>
					<p>
						1. The extreme fragility of human culture, civilization.
						A man becomes a beast in three weeks, given heavy labor,
						cold, hunger, and beatings.
					</p>
					<p> …</p>
					<p>
						3. I realized that friendship, comradeship, would never
						arise in really difficult, life-threatening conditions.
						Friendship arises in difficult but bearable conditions
						(in the hospital, but not at the pit face).{" "}
					</p>
					<p>…</p>
					<p>
						7. I saw that the only group of people able to preserve
						a minimum of humanity in conditions of starvation and
						abuse were the religious believers, the sectarians
						(almost all of them), and most priests.
					</p>
					<p> …</p>
					<p>
						22. I saw that women are more decent and
						self-sacrificing than men: in Kolyma there were no cases
						of a husband following his wife. But wives would come,
						many of them.
					</p>{" "}
					<p className="text-right">Varlam Shalamov, 1961</p>
				</div>
				<p className={paragraphBottomMargin}>
					{" "}
					Kolyma is a northeastern territory of Siberia, named for a
					river that flows through it. Look on a map, perhaps you have
					forgotten that parts of Russia are actually East (and North)
					of China? A rough mirror image of Alaska reaches to kiss its
					American counterpart. In 1931 it was discovered that in this
					impossibly harsh climate there are great reserves of gold.
				</p>
				<div className={pullQuote}>
					"In the frozen desert of Kolyma, people are needed to work.
					That is why, simultaneously with Dal’stroy [the construction
					organization overseeing the gold mining operation], Moscow
					calls into being here a directorate of the Northeastern
					Camps of Correctional Labor (USVITLag). USVITLag fulfilled
					the same role vis-à-vis Dal’stroy as the concentration camp
					Auschwitz/Birkenau did vis-à-vis IG Farben—it supplied the
					slaves."
					<p className="text-right">Ryszard Kapuściński, <span className="italic">Imperium</span></p>
				</div>
			</BodyText>
		</>
	);
}
