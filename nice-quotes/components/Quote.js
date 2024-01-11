import { StyleSheet, Text, View } from "react-native";

const Quote = ({ author, text }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
			<Text style={styles.author}>&mdash; {author}</Text>
		</View>
	);
};

export default Quote;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
	},
	text: {
		fontSize: 38,
		fontStyle: "italic",
		marginBottom: 10,
		textAlign: "center",
	},
	author: {
		fontSize: 24,
		textAlign: "right",
	},
});
