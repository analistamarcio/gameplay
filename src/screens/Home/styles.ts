import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginLeft: -4,
	},
	header: {
		width: "100%",
		paddingHorizontal: 14,
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: getStatusBarHeight() + 24,
		marginBottom: 28,
	},
	matches: {
		marginTop: 16,
		marginLeft: 16,
	},
});