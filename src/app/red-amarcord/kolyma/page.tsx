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
				<div className="text-left sm:text-center sm:w-4/5 indent-0 sm:mx-auto px-1 mb-7">
					<p className="font-bold pb-2">
						WHAT I SAW AND UNDERSTOOD IN THE CAMPS
					</p>
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
					<p className="text-right">
						Ryszard Kapuściński,{" "}
						<span className="italic">Imperium</span>
					</p>
				</div>
				<div className={paragraphBottomMargin}>
					The Kolyma mining operation’s development roughly coincides
					with the years of Stalin’s Great Terror. Eventually there
					are 160 prison mining camps in the Kolyma area. Two
					unrelated aims, the mining of gold and the liquidation of
					undesirables, achieved a terrible symbiosis. Who were these
					undesirables? Among them, Ukrainian peasants who resisted
					joining the collectivized Soviet farming system (kolkhozes).
					Poles, Greeks, Germans and Kalmuks. Members of the Socialist
					Revolutionary Party, another group that had fought against
					the Tsarist monarchy but ultimately lost out to the
					Bolsheviks in the post-revolutionary civil war. Academics
					who were Trotskyists, or just insufficiently Stalinist.
					Ordinary Russians denounced by their neighbors or
					co-workers. Russians who worked abroad as, for example,
					engineers in western countries were often deported upon
					their return.
				</div>
				<div className={pullQuote}>
					"Marusia Kriukova arrived from Japan at the end of the
					1930s. The daughter of an émigré who was living on the
					outskirts of Kyoto, Marusia, along with her brother, joined
					a union called Return to Russia, contacted the Soviet
					consulate, and in 1939 received a Russian entry visa.
					Marusia, her brother, and their fellow returnees were
					arrested in Vladivostok; Marusia was taken to Moscow and
					never saw any of her friends again. Marusia’s leg was broken
					under interrogation, and when the bone mended she was sent
					to Kolyma to serve a twenty-five-year term of imprisonment."
					<div className="text-right">
						Varlam Shalamov,{" "}
						<span className="italic">Kolyma Tales</span>, "The
						Necktie"
					</div>
				</div>
				<div className={paragraphBottomMargin}>
					Varlam Shalamov was born in Vologda, a town in northern
					Russia, in 1907. Volgoda saw terrible violence in the
					revolution and following civil war, but “Shalamov
					sympathized with the revolutionaries, particularly the
					Trotskyist factions, even though, as the son of a priest, he
					was excluded by the Communists from higher education.”
					(Donald Rayfield,{" "}
					<span className="italic">Kolyma Tales</span> introduction).
					Running in Trotskyist circles led to his public endorsement
					of "Lenin’s Testament," a document which described Stalin as
					unfit to be Secretary-General of the Communist Party. In
					1929 he was arrested for that and spent three years at a
					chemical plant in the northern Ural mountains, but he was
					released in 1931.{" "}
				</div>
				<div className={paragraphBottomMargin}>
					In the Urals he met his first wife, Galina Gudz. They
					returned to Moscow after Shalamov’s 1931 release and started
					a family. Despite being a convicted Trotskyist, Shalamov was
					able to work in Moscow relatively unmolested. Galina’s
					brother, Boris Gudz, however, was an agent of the secret
					police (the OGPU, until it morphed into the NKVD in 1934)
					and worried about the political taint on his brother in law.
					Boris pressured Shalamov to write to the secret police,
					seemingly in an attempt to get ahead of the problem. But all
					this letter did was bring to the attention of the NKVD this
					Trotskyist who had been insufficiently punished. He was
					arrested again in 1937 (the most brutal year of Stalin’s
					Great Terror), given a new sentence of counterrevolutionary
					Trotskyist activity, and sent to Kolyma. Galina and her
					sister were exiled to collective farms in Turkmenistan.
					Boris, for his assiduousness, was fired from the secret
					police and became a bus driver. Shalamov and Galina's
					daughter, Elena, had been born in 1935 and brought up as a
					conventional Stalinist. When she came of age, she preferred
					to think of her father as dead or a criminal.
				</div>
				<div className={paragraphBottomMargin}></div>
			</BodyText>
		</>
	);
}
