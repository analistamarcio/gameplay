import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: theme.colors.background
	},
	image: {
		width: "100%",
		height: 360,
	},
	content: {
		marginTop: -80,
		paddingHorizontal: 50
	},
	title: {
		color: theme.colors.heading,
		textAlign: "center",
		fontSize: 30,
		marginBottom: 16
	},
	subtitle: {
		color: theme.colors.heading,
		fontSize: 12,
		textAlign: "center",
		marginBottom: 44
	},
})