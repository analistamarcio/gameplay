import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		width: 90,
		height: 110,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		marginRight: 8,
	},
	content: {
		width: 86,
		height: 106,
		backgroundColor: theme.colors.secondary40,
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: 8,
		paddingVertical: 7,
	},
	title: {
		fontFamily: theme.fonts.title500,
		color: theme.colors.heading,
		fontSize: 15,
	},
	unchecked: {
		width: 10,
		height: 10,
		backgroundColor: theme.colors.secondary100,
		alignSelf: "flex-end",
		marginRight: 7,
		borderColor: theme.colors.secondary50,
		borderWidth: 2,
		borderRadius: 3,
	},
	checked: {
		width: 10,
		height: 10,
		backgroundColor: theme.colors.primary,
		alignSelf: "flex-end",
		marginRight: 7,
		borderRadius: 3,
	},
})
