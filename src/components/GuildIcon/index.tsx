import React from "react";
import { Image, View } from "react-native";
import DiscordSvg from "../../assets/discord.svg";

import { styles } from "./styles";

const { CDN_IMAGE } = process.env;

type Props = {
	guildId: string;
	guildIcon: string | null;
}

export function GuildIcon({guildId, guildIcon}: Props) {
	const uri = `${CDN_IMAGE}/icons/${guildId}/${guildIcon}.png`;
	// const uri = "https://i.redd.it/s9biyhs4lix61.jpg";

	return (
		<View style={styles.container}>
			{
				guildIcon ?
				<Image
					source={{ uri }}
					style={styles.image}
					resizeMode="cover"
				/>
				: <DiscordSvg
					width={40}
					height={40}
				/>
			}
		</View>
	);
}