"use client";
import BodyText from "@/app/ui/BodyText";
import Nav from "@/app/ui/Nav";
import {
	iframeStyle,
	paragraphBottomMargin,
	playerCss,
	playerHeight,
	pullQuote,
	pullQuoteAuthor,
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
					<p className="font-bold text-sm sm:text-lg sm:pb-2 pb-3">
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
					<p className={pullQuoteAuthor}>Varlam Shalamov, 1961</p>
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
					<div className={pullQuoteAuthor}>
						Ryszard Kapuściński,{" "}
						<span className="italic">Imperium</span>
					</div>
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
					<div className={pullQuoteAuthor}>
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
				<div className={paragraphBottomMargin}>
					In the 1932-1937 period between his arrests, Shalamov saw
					some of his essays and articles published, including his
					first short story “The Three Deaths of Dr. Austin” (1936).
					Once in Kolyma, he wrote only one work of prose, a 600-page
					dictionary of <span className="italic">fenia</span> or{" "}
					<span className="italic">blatnoi yazyk</span>, the
					generational slang of the hereditary criminal class in
					Russia. The dictionary has been lost to time. The gangsters,
					with their elongated pinky-finger nails and pewter crosses,
					are vivid characters in{" "}
					<span className="italic">Kolyma Tales</span>. They contrast
					sharply to the “politicals” convicted under Article 58, who
					start out as essentially moral, though fatally naive to the
					realities of the camps. Some gangsters are seen to have
					little fiefdoms with hapless Article 58's tickling their
					feet or reciting{" "}
					<span className="italic">Les Miserables </span>
					or Arthur Conan Doyle from memory for protection and an
					extra slice of bread a day. Hundreds of tiny Caligulas.
				</div>
				<div className={paragraphBottomMargin}>
					Shalamov survived several years of gold mining in Kolyma,
					due to the grace of a series of near-misses, many of which
					would later be recorded as stories. However, after nine
					years, he had succumbed to the fate of most camp laborers:
					he was a<span className="italic"> dokhodyaga</span>, a camp
					term for the walking dead, those who, while still
					technically breathing, had been starved and frozen past the
					experience of what anyone could call life. Waiting for their
					time. The closest English translation is the clunky “goner.”
				</div>
				<div className={paragraphBottomMargin}>
					The mechanisms of death in Kolyma are somewhat indirect.
					Shalamov reports that prisoners refer to Kolyma as
					“Auschwitz without the ovens” and it’s true; there is no
					organized mass slaughter of prisoners. Instead an
					environment is created in which death has a thousand
					entrances. For one you can be summarily shot by guards for
					stepping two paces out of a designated prisoner queue,
					perhaps you did so to pick some berries because you are
					starving. Guards or gangsters could beat a prisoner to death
					(or so badly that death found the prisoner three weeks
					later, in a hospital bed) at the slightest provocation.
				</div>
				<div className={paragraphBottomMargin}>
					I was haunted by the story “A Personal Quota”, which relates
					the fate of Dugayev, a 23-year-old university student who
					has gone “straight from the lecture room to this pit face.”
					His fellow workers have complained that, unused to the hard
					labor of gold mining as he is, he does not pull his own
					weight. He is assigned a “personal quota”-- moved to a
					special area he works alone, in which his progress is
					explicitly measured by a guard .The first time I read it, I
					was naive like Dugayev, until the story’s final paragraph.
					Reading it twice, you see that the cigarette suddenly
					offered by Dugayev’s bunkmate despite them “not being
					friends”, the averted glances, and the sudden reverie of the
					foreman “to the evening star” are acknowledgments that the
					personal quota is a death sentence: an impossible amount of
					work for a starving and exhausted person to do in a day. The
					next night, after a brief session with an interrogator in
					which he gives only his name and the sentence he is
					currently serving, Dugayev is escorted by soldiers to a
					ravine some distance from the camp cordoned off by a barbed
					wire fence from which “at nights you could hear from this
					point the rumbling of tractors.” Auschwitz without the ovens
					indeed.
				</div>
				<div className={paragraphBottomMargin}>
					Or perhaps you’d be on the prisoner transport ship{" "}
					<span className="italic"> Kim</span>, and either mutinied
					with a majority of the prisoners or stood by– all the same,
					the escort guards flooded the hold with freezing water no
					one could escape. Nonetheless, all these deaths were still
					somewhat exceptional. More plainly, a brutal calculus
					emerges: sixteen-hour days of mining labor, not enough warm
					clothing or blankets in freezing temperatures, and
					starvation rations. The lack of Vitamin C in those rations
					led to near universal scurvy as well.{" "}
				</div>
				<div className={pullQuote}>
					{" "}
					"In the camps, however, to turn a healthy young man, who had
					begun his career in the clean winter air of the gold mines,
					into a goner, all that was needed, at a conservative
					estimate, was a term of twenty to thirty days of sixteen
					hours of work per day, with no rest days, with systematic
					starvation, torn clothes, and nights spent in temperatures
					of minus sixty degrees in a canvas tent with holes in it,
					and being beaten by the foremen, the criminal gang masters,
					and the guards. Brigades that start the gold-mining season
					have, by the end of the season, not a single man left alive
					from the start of the season, except for the foreman and one
					or two of the foreman’s personal friends."{" "}
					<div className={pullQuoteAuthor}>
						Varlam Shalamov,{" "}
						<span className="italic">Kolyma Tales</span>, "The Tatar
						Mullah and Clean Air"
					</div>
				</div>
				<div className={paragraphBottomMargin}>
					Shalamov the goner was 105 lbs, when he was admitted to a
					camp hospital, in his ninth year of imprisonment. As
					recorded in the story "Dominoes", he was saved by
					Mikhailovich, a doctor who for unknown reasons with Shalamov
					breaks the deadly bureacratic shuffling of starving
					patients. "You don't need any treatment," Mikhailovich tells
					Shalamov, "you need to be fed and washed. You need to stay
					in bed and eat." This is the well-known case under
					totalitarianism of a simple, true statement taking on a
					profound, near-revolutionairy character. As Shalamov is
					nursed back to health, he finds ways to become useful to the
					hospital administration, and eventually is able to enroll in
					a course for paramedic training. This stories dealing with
					his training and work in the hospital constitute a
					lightening of tone for{" "}
					<span className="italic"> Kolyma Tales</span>, if only
					slightly. There are heroes like the sympathetic doctor
					Mikhailovich, but perhaps most significant is the woman,
					Lida, who Shalamov saves through a snap judgement while
					managing the hospital admissions room. Lida is a secretary
					who was being abused by her boss for refusing to sleep with
					him. She attempts to gain entry to the hospital by not very
					convincingly feigning illness. Shalamov sees through her
					ruse, but admits her anyway. Her wretched boss does not have
					the authority to contravene hospital decisions, and when
					patients are released, they are always sent to a different
					camp than the one they came from, so the admission can save
					her from him permanently. Two years later, it is Lida, who
					has found work in the records office, who Shalamov will ask
					to surreptitiously remove the "T" (for Trotskyist)
					certificate from his criminal file-- a black mark which
					serves as a signal to any boss or guard for maxiumum
					cruelty. This edit to his file aids greatly in his eventual
					release. Shalmov "never said a word of thanks to Lida. She
					didn't expect thanks, either. For a favor like that you
					don't get thanked. Gratitude is not the right word." (
					<span className="italic">Kolyma Tales</span>, "Lida")
				</div>
			</BodyText>
		</>
	);
}
