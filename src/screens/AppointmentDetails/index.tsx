import React from 'react';
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from 'react-native-gesture-handler';
import { Text, View, ImageBackground, FlatList } from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import BannerImg from "../../assets/banner.png";

import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";

export function AppointmentDetails() {
	const members = [
		{
			id: "1",
			username: "Marcio",
			avatarUrl: "https://github.com/analistamarcio.png",
			status: "online",
		},
		{
			id: "2",
			username: "Diego",
			avatarUrl: "https://github.com/diego3g.png",
			status: "offline",
		}
	];
	return (
		<Background>
			<Header
				title="Details"
				action={
					<BorderlessButton>
						<Fontisto
							name="share"
							size={24}
							color={theme.colors.primary}
						/>
					</BorderlessButton>
				}
			/>

			<ImageBackground
				source={BannerImg}
				style={styles.banner}
			>
				<View style={styles.bannerContent}>
					<Text style={styles.title}>
						Legendary
					</Text>

					<Text style={styles.subtitle}>
						Today we will reach the challenger without losing a md10 match.
					</Text>
				</View>
			</ImageBackground>

			<ListHeader
				title="Gamers"
				subtitle="Total 3"
			/>

			<FlatList
				data={members}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<Member data={item} />
				)}
				ItemSeparatorComponent={() => <ListDivider />}
				style={styles.members}
			/>

			<View style={styles.footer}>
				<ButtonIcon title="Join the game" />
			</View>
		</Background>
	);
}