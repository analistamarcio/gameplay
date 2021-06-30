import React, { useEffect, useState } from 'react';
import { Fontisto } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { 
	Text,
	View,
	Alert,
	Share,
	Platform,
	ImageBackground,
	FlatList, 
	Linking,
} from "react-native";

import BannerImg from "../../assets/banner.png";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { api } from '../../services/api';

// import * as Linking from "expo-linking";
import { AppointmentProps } from '../../components/Appointment';
import { Member, MemberProps } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from "../../components/Header";
import { Load } from "../../components/Load";

type Params = {
	guildSelected: AppointmentProps;
}

type GuildWidget = {
	id: string;
	name: string;
	instant_invite: string;
	members: MemberProps[];
	// presence_count: number;
}

export function AppointmentDetails() {
	const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
	const [loading, setLoading] = useState(true);
	
	const route = useRoute();
	const {guildSelected} = route.params as Params;

	async function fetchGuildWidget() {
		try {
			const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
			setWidget(response.data);
		} catch {
			setWidget({
				id: "",
				name: "",
				instant_invite: "",
				members: [],
				// presence_count: 0,
			})
			Alert.alert("Check if the Widget feature is enabled on this server.");
		} finally {
			setLoading(false);
		}
	}

	function handleShareInvitation() {
		const message = Platform.OS === "ios"
		? `Join to ${guildSelected.guild.name}`
		: widget.instant_invite

		Share.share({
			title: message,
			url: widget.instant_invite,
		});
	}

	function handleOpenGuild(){
		Linking.openURL(widget.instant_invite);
	}
	
	useEffect(() => {
		fetchGuildWidget();
	}, [])
	
	return (
		<Background>
			<Header
				title="Details"
				action={
					guildSelected.guild.owner &&
					<BorderlessButton onPress={handleShareInvitation}>
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
						{ guildSelected.guild.name }
					</Text>

					<Text style={styles.subtitle}>
						{ guildSelected.description }
					</Text>
				</View>
			</ImageBackground>

			{
				loading ? <Load /> :
				<>
					<ListHeader
						title="Gamers"
						subtitle={`Total ${widget.members.length}`}
						// subtitle={`Total ${widget.presence_count}`}
					/>

					<FlatList
						data={widget.members}
						keyExtractor={item => item.id}
						renderItem={({ item }) => (
							<Member data={item} />
						)}
						ItemSeparatorComponent={() => <ListDivider isCentered />}
						style={styles.members}
					/>
				</>
			}
			
			{
				guildSelected.guild.owner &&
				<View style={styles.footer}>
					<ButtonIcon
						title="Join the game"
						onPress={handleOpenGuild}
					/>
				</View>
			}
		</Background>
	);
}
