import React, { useState } from 'react';
import { Feather } from "@expo/vector-icons";
import {
	Text,
	View,
	Platform,
	ScrollView,
	KeyboardAvoidingView
} from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

import { CategorySelect } from '../../components/CategorySelect';
import { RectButton } from 'react-native-gesture-handler';
import { SmallInput } from "../../components/SmallInput";
import { ModalView } from '../../components/ModalView';
import { Background } from '../../components/Background';
import { GuildIcon } from '../../components/GuildIcon';
import { TextArea } from "../../components/TextArea";
import { GuildProps } from '../../components/Guild';
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Guilds } from '../Guilds';

export function AppointmentCreate() {
	const [category, setCategory] = useState("");
	const [openGuildsModal, setOpenGuildsModal] = useState(false);
	const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

	function handleOpenGuilds(){
		setOpenGuildsModal(true);
	}
	
	function handleCloseGuilds(){
		setOpenGuildsModal(false);
	}
	
	function handleGuildSelect(guildSelect: GuildProps) {
		setGuild(guildSelect);
		setOpenGuildsModal(false);
	}

	function handleCategorySelect(categoryId: string) {
		setCategory(categoryId);
	}
	
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "position" : "height"}
			style={styles.container}
		>
			<ScrollView>
				<Background>
					<Header
						title="Book a game match"
					/>

					<Text style={[styles.label,
						{ marginLeft:16, marginTop:12, marginBottom: 12 }
					]}>
						Category
					</Text>

					<CategorySelect
						hasCheckBox
						setCategory={handleCategorySelect}
						categorySelected={category}
					/>

					<View style={styles.form}>
						<RectButton onPress={handleOpenGuilds}>
							<View style={styles.select}>
								{
									guild.icon ? <GuildIcon /> : <View style={styles.image} />
								}

								<View style={styles.selectBody}>
									<Text style={styles.label}>
										{guild.name ? guild.name : "Select a Server"}
									</Text>
								</View>

								<Feather
									name="chevron-right"
									color={theme.colors.heading}
									size={18}
								/>

							</View>
						</RectButton>
						
						<View style={styles.field}>
							<View>
								<Text style={[styles.label, {textAlign: "center", marginBottom: 6}]}>
									Date (mm/dd)
								</Text>

								<View style={styles.column}>
									<SmallInput maxLength={2} />
									<Text style={styles.divider}>
										/
									</Text>
									<SmallInput maxLength={2} />
								</View>
							</View>

							<View>
								<Text style={[styles.label, {textAlign: "center", marginBottom: 6}]}>
									Time (hh:mm)
								</Text>

								<View style={styles.column}>
									<SmallInput maxLength={2} />
									<Text style={styles.divider}>
										:
									</Text>
									<SmallInput maxLength={2} />
								</View>
							</View>
						</View>

						<View style={styles.field}>
							<Text style={[styles.label, {marginLeft: 4}]}>
								Description
							</Text>

							<Text style={styles.textSize}>
								Max 100 characters
							</Text>
						</View>

						<TextArea
							multiline
							maxLength={100}
							numberOfLines={5}
							autoCorrect={false}
						/>

						<View style={styles.footer}>
							<Button title="Book" />
						</View>

					</View>
				</Background>
			</ScrollView>

			<ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
				<Guilds handleGuildSelect={handleGuildSelect} />
			</ModalView>
		</KeyboardAvoidingView>
	);
}
