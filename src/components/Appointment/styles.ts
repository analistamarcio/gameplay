import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		alignSelf: "center",
	},
	content: {
		flex: 1,
	},
	header: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 12,
		marginTop: 4,
	},
	title: {
		fontFamily: theme.fonts.title700,
		color: theme.colors.heading,
		fontSize: 17,
	},
	category: {
		fontFamily: theme.fonts.text400,
		color: theme.colors.highlight,
		fontSize: 13,
		marginRight: 16,
	},
	footer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	dateInfo: {
		flexDirection: "row",
		alignItems: "center"
	},
	playersInfo: {
		flexDirection: "row",
		alignItems: "center"
	},
	date: {
		fontFamily: theme.fonts.text500,
		color: theme.colors.heading,
		fontSize: 12,
		marginLeft: 5,
	},
	player: {
		fontFamily: theme.fonts.text500,
		fontSize: 12,
		marginLeft: 5,
		marginRight: 10,
	},
	guildIconContainer: {
		width: 64,
		height: 68,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 20,
	},
})
