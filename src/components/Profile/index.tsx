import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";

import { styles } from "./styles";

export function Profile() {
	return (
		<View style={styles.container}>
			
			<Avatar urlImage="https://github.com/analistamarcio.png"/>
			
			<View>
				<View style={styles.user}>
					<Text style={styles.greeting}>
						Hi,
					</Text>

					<Text style={styles.username}>
						Marcio
					</Text>
				</View>

				<Text style={styles.message}>
					It's time to win!
				</Text>
			</View>
			
		</View>
	);
}