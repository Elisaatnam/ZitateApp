import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Quote from "./components/Quote";

export default function App() {
	const [quoteNum, setQuoteNum] = useState(0);

	const quotes = [
		{
			eigenschaft: "tiefgruendig",
			Zitat: "Die tiefste Wahrheit ist, dass wir alle eins sind.",
			author: "Rumi",
		},
		{
			eigenschaft: "spirituell",
			Zitat:
				"Die Seele hat weder Anfang noch Ende. Sie ist zeitlos und alterlos.",
			author: "Deepak Chopra",
		},
		{
			eigenschaft: "tiefgruendig",
			Zitat: "Die Stille ist nicht leer. Sie ist voller Antworten.",
			author: "Unknown",
		},
		{
			eigenschaft: "spirituell",
			Zitat:
				"Deine Aufgabe ist nicht, nach Liebe zu suchen, sondern lediglich all die Barrieren in dir zu suchen und zu finden, die du dagegen errichtet hast.",
			author: "Rumi",
		},
		{
			eigenschaft: "tiefgruendig",
			Zitat:
				"Die wirkliche Reise besteht nicht darin, neue Landschaften zu entdecken, sondern neue Augen zu bekommen.",
			author: "Marcel Proust",
		},
		{
			eigenschaft: "spirituell",
			Zitat: "In der Stille erfahren wir die Einheit des Lebens.",
			author: "Bhagwan Shree Rajneesh",
		},
		{
			eigenschaft: "humorvoll",
			Zitat: "Lächle, auch wenn du nicht weißt, was gerade passiert.",
			author: "Unknown",
		},
		{
			eigenschaft: "lebensweisheit",
			Zitat:
				"Das Leben ist wie ein Buch. Um es zu verstehen, musst du es Seite für Seite lesen.",
			author: "Albert Einstein",
		},
		{
			eigenschaft: "humorvoll",
			Zitat:
				"Das Geheimnis des Glücks ist nicht, alles zu haben, sondern in dem zu genießen, was du hast.",
			author: "Unknown",
		},
		{
			eigenschaft: "lebensweisheit",
			Zitat:
				"Jeder Tag ist eine neue Chance, das zu werden, was wir noch nicht sind.",
			author: "Ralph Waldo Emerson",
		},
	];

	const quote = quotes[quoteNum];

	return (
		<View style={styles.container}>
			<Quote author={quote.author} text={quote.Zitat} />

			<Button
				onPress={() => setQuoteNum((quoteNum + 1) % quotes.length)}
				title='naechstes Zitat'
			/>
			<Button
				onPress={() =>
					setQuoteNum((quoteNum - 1 + quotes.length) % quotes.length)
				}
				title='vorheriges Zitat'
			/>

			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
