import BodyText from "@/app/ui/BodyText";
import FootnoteWrapper from "@/app/ui/FootnoteWrapper";
import HorizontalDivider from "@/app/ui/HorizontalDivider";
import MediaPlayer from "@/app/ui/MediaPlayer";
import Nav from "@/app/ui/Nav";
import Next from "@/app/ui/Next";
import PullQuoteAttr from "@/app/ui/PullQuoteAttr";
import Title from "@/app/ui/Title";
import {
	albumHrefRedAmarcord,
	albumTitleRedAmarcord,
	paragraphBottomMargin,
	pullQuote,
} from "@/app/utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "The Connection Between Bruno Schulz and the Holodomor",
	description:
		"Everything is so unclear, so unfathomable. Schulz wrote 'The Cinnamon Shops' during the most terrible year of the Great Famine in Ukraine...",
};

const footnotes = [
	"",
	"State-run organization that managed the gold mining operation in the Kolyma forced-labor camps.",
	"Ryszard Kapuściński, 'Imperium'",
	"No disrespect to Leonora Carrington.",
	"'Cinnamon Shops' is both the name of the first collection of Schulz's stories and the title of an individual story within, though the same collection has also been published as 'The Street of Crocodiles'.",
];

/* eslint-disable react/no-unescaped-entities */
export default function TheConnectionBetweenBrunoSchulzAndTheHolodomor() {
	return (
		<>
			<MediaPlayer
				src="https://bandcamp.com/EmbeddedPlayer/album=1841737863/size=small/bgcol=ffffff/linkcol=0687f5/track=2157112391/transparent=true/"
				albumHref={albumHrefRedAmarcord}
				albumTitle={albumTitleRedAmarcord}
			/>
			<Title title="The Connection Between Bruno Schulz and the Holodomor" />
			<Nav
				hrefBackward="/red-amarcord/kolyma"
				hrefForward="/red-amarcord/chuck-schuldiner"
				textBackward="Kolyma"
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
					hundred million people) must be in kolkhozes (footnote
					definition here). But the peasants do not want to join
					kolkhozes. Stalin proceeds to snuff out their resistance by
					two methods. He sends hundreds of thousands of them to the
					camps or deports and resettles them in Siberia, and the rest
					he undertakes to starve into obedience. The main blow falls
					on Ukraine...
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
					people.
					<PullQuoteAttr
						author="Ryszard Kapuściński"
						title="Imperium"
					/>
				</div>
				<div className={paragraphBottomMargin}>
					Kapuściński gives this history in 1991 as he travels to
					Lvov, to the home of Father Ludwik Kamielowski.
					Kamielowski's elderly mother, Bronisława Kamielowska,
					experienced the Great Famine, which has come to be called
					the Holodomor, firsthand. This is Kapuściński's method. He
					would never be satisfied to academically recount this
					history from the comfort of his desk. He has to go there,
					where it happened, see something, if only traces. Traces are
					all he finds in Kolyma, looking for evidence of that great
					crime. The Dal'stroy{" "}
					<FootnoteWrapper text={footnotes[1]} number={1}>
						1
					</FootnoteWrapper>{" "}
					headquarters, NKVD barracks, the prison where interrogations
					took place have all been torn down by the time Kapuścińksi
					visits in the early '90s. The only camp building still
					standing is the House of Political Instruction of the NKVD
					cadre stationed at Kolyma. That erosion of history extends
					to people; sitting at a bus stop with an elderly man,
					Kapuscinski wonders if the man was torturer or victim.
					Ultimately both are victims.
				</div>
				<div className={paragraphBottomMargin}>
					In Ukraine he finds an oral history of the Holodomor.
					Bronisława Kamielowska lived in the village of Butryn in the
					'30s. She gave birth to 10 children, six of whom died of
					hunger. Bronisława recounts the escalation that was the "Law
					of the Blade of Grain", written personally by Stalin in
					1932. Under this law one could be sentenced to Kolyma for
					years or even shot for stealing anything, even a single
					blade of grain, from a kolkhoz. "Similar punishment awaited
					the tractor driver whose tractor broke down, or the kolkhoz
					member who lost a hoe or a shovel."
					<FootnoteWrapper text={footnotes[2]} number={2}>
						2
					</FootnoteWrapper>{" "}
					The conditions of starvation were such that even occasional
					acts of charity, as when groups of dissidents from nearby
					towns would bring shipments of bread, could mean death. A
					starving person's body cannot always handle a sudden influx
					of food. Kamielowska recounts the recipients of such charity
					gorging themselves and then dropping to the floor,
					contorting in pain. Amid this horror her family was still
					harrassed by the NKVD, which would conduct house searches,
					pull up floorboards, dig up gardens. If they found any food
					hidden, they would take it and imprison the owner.
					Kamielowska's husband, Józik, was imprisoned six times in
					this way. Eventually Józik was involuntarily conscripted
					into the Red Army to fight World War II. Bronisława was
					deported to a kolkhoz in Kazakhstan. By some miracle, both
					survived.
				</div>
				<div className={paragraphBottomMargin}>
					From Lvov it is not far to the city of Drohobych.
					Kapuściński travels there for the same reason most tourists
					make pilgrimages to Drohobych: because it was the birthplace
					and liftime residence of the writer Bruno Schulz. Schulz was
					a teacher of art and writing at a local high school who
					wrote brilliantly imaginative short stories. I encountered
					his work in high school because of the adaptations of his
					stories by the experimental filmmakers the Brothers Quay.
					Schulz worked alone in Drohobych, not formally aligned with
					any artistic movements, but has been retroactively put under
					the umbrella of surrelism and its offshoots. I felt as a
					teenager, and still do today, that his work is better than
					most of what came out of the primary French surrealist
					scene.{" "}
					<FootnoteWrapper text={footnotes[3]} number={3}>
						3
					</FootnoteWrapper>
				</div>
				<div className={paragraphBottomMargin}>
					Schulz was born in 1892, when Drohobych was part of Poland.
					Today, it is in Ukraine. In 1941, it was occupied by the
					Nazis as part of the Operation Barbarossa offensive. Schulz,
					who was Jewish, was forced to relocate to the Drohobych
					ghetto. He fell under the protection of a Gestapo officer
					who admired his artwork, but this association ultimately
					doomed him. In 1942 a rival Gestapo officer shot Schulz dead
					in the streets of Drohobych. It was revenge for Schulz's
					patron having killed a Jewish dentist under the rival's
					protection.
				</div>
				<div className={paragraphBottomMargin}>
					The story "Cinnamon Shops" recounts a nighttime walk taken
					by the narrator (a child version of Schulz) through
					Drohobych. He is on an errand for his absentminded father,
					but his path through Drohobych expands and contracts in
					waves of kaleidoscopic, fractal imagery that render the
					execution of any rational task nearly impossible. The
					narrator is drawn to the district with the cinnamon shops,
					exotic stores open only at this phantasmagoric time of
					night. Kapuściński, visiting Drohobych on the same trip in
					which he spoke to Bronisława Kamielowska in Lvov about the
					Holodomor, attempted to visit the cinnamon shops in person.
					His local guide laughs-- the shops existed only in Schulz's
					imagination.
				</div>
				<div className={paragraphBottomMargin}>
					As Drohobych was part of Poland during the Holodomor,
					Kapuściński is certain Schulz knew nothing of the famine,
					which was effectively hidden by the USSR at the time.
					Quoting a typically psychedelically overabundant description
					of food from the story "August",
					<FootnoteWrapper text={footnotes[4]} number={4}>
						4
					</FootnoteWrapper>
					he speculates on some sort of psychic inverse synchronicity:
					that the suffering of millions starving not that far away
					could have somehow influenced Schulz to have such
					exaggerated visions of exotic plenty. The poetry of this
					link is given support by the fact that Drohobych ultimately
					did become part of Ukraine. Reviewing the Schulz stories
					with this in mind, I saw things slightly differently. Here
					is the description of the cinnamon shops from the eponymous
					story:
				</div>
				<div className={pullQuote}>
					"I used to call them cinnamon shops because of the dark
					panelling of their walls. These truly noble shops, open late
					at night, have always been the objects of my ardent
					interest. Dimly lit, their dark and solemn interiors were
					redolent of the smell of paint, varnish, and incense; of the
					aroma of distant countries and rare commodities. You could
					find in them Bengal lights, magic boxes, the stamps of
					long-forgotten countries, Chinese decals, indigo, calaphony
					from Malabar, the eggs of exotic insects, parrots, toucans,
					live salamanders and basilisks, mandrake roots, mechanical
					toys from Nuremberg, homunculi in jars, microscopes,
					binoculars, and, most especially, strange and rare books,
					old folio volumes full of astonishing engravings and amazing
					stories."
					<PullQuoteAttr
						author="Bruno Schulz"
						subtitle="Cinnamon Shops"
					/>
				</div>
				<div className={paragraphBottomMargin}>
					The shops sell food, yes. But to me what they embody more
					than culinary excess is cultural pluralism. The objects they
					offer expose the inhabitants of Drohobych to cultures from
					the world over, and "most especially" to the knowledge of
					those cultures, through those rare books and folios. In the
					fight over Ukraine's soul, whether it will have Western or
					(neo)-Stalinist values, which as I write this in December
					2024 is reified in a literal, actual hot war claiming
					hundreds of lives every day, Schulz's story is a salvo in
					celebration of multicultural humanism. I am reminded of
					Goethe's ethos of "weltliteratur" (world literature): a
					delight in the offerings of every world culture, undergirded
					by the belief that, despite their differences, each one has
					the same approximate total "value" as the others. The
					implicit belief that they have something to offer each other
					other than dominance and war. The fact that Schulz was
					killed by a soldier of a totalitarian, supremacist
					government gives this interpretation a grim poetic logic. I
					don't wish to "but actually..." Kapuściński's observation,
					only to add to it. I think his original formulation (through
					the translation by Klara Glowczewska) of the connection
					between Bruno Schulz and the Holodomor is so beautiful I
					wish to reproduce it here:
				</div>
				<div className={pullQuote}>
					{" "}
					"Everything is so unclear, so unfathomable. Schulz wrote
					<span className="italic"> The Cinnamon Shops</span> during
					the most terrible year of the Great Famine in the Ukraine,
					not far from Drohobych. Schulz most certainly knew nothing
					of this great tragedy, hidden as it was from the world. Yet
					what forces could have been at work here, what mysterious
					currents, associations, connections, and oppositions, that
					would lead him to begin his book with a magnificent,
					stupefying vision of satiety?"
					<PullQuoteAttr
						author="Ryszard Kapuściński"
						title="Imperium"
					/>
				</div>
				<HorizontalDivider />
				<div className={paragraphBottomMargin}>
					I almost always have the same dream. The objects, people,
					and settings change, but the format is constant: I am in a
					large multifaceted setting with lots of people, like a
					college campus, convention center, a part of New York City
					on a warm summer night when everyone is out. I have a
					seemingly simple task: to deliver a document or message, to
					visit some bureuacratic office and register for something,
					just one of the thousands of errands we perform in our lives
					and more or less instantly forget after completion.{" "}
				</div>
				<div className={paragraphBottomMargin}>
					But as I begin to walk to my destination, the setting
					unfolds, revealing new rooms, torrents of people, some of
					whom I know, some of whom are engaging me. The environment
					disgorges room after room, plaza after plaza, obeying a
					fractal logic-- I move forward, but the sense is I am
					getting deeper into the ever-unfolding, now unfathomably
					complex location, not any closer to my intended destination.
					Side quests and side conversations proliferate. A door or
					threshold reveals what seems like a sudden total change of
					setting, but this too eventually finds its place in the
					origami honeycomb structure I have been attempting to
					navigate.{" "}
				</div>
				<div className={paragraphBottomMargin}>
					I hadn't read "Cinnamon Shops" (the individual story) since
					I was 15 or so. Rereading it for this project, I was shocked
					to see that it is an instance of this dream. The child
					narrator tasked with retrieving his father's wallet while
					the family is at a theatre waiting for the curtain to rise;
					the total sensory overload and explosion of new settings as
					he attempts to make his way back on what seemed to be a
					simple path back home. Kapuściński writes of impossible
					communication linking the suffering of millions to the pen
					of an extraordinarily sensitive artist. Synchronicity, the
					sort of thing we might these days jocularly call "a glitch
					in the simulation." What am I to make of reliving
					palette-swap versions of Schulz's story night after night?
					<Next href="/red-amarcord/chuck-schuldiner" />
				</div>
			</BodyText>
		</>
	);
}
