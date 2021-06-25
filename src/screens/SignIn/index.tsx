import React from 'react';
import {
	View,
	Text,
	Image,
	Alert,
	ActivityIndicator,
	ScrollView, // caso não caiba na tela, será possível dar um scroll para visualizar todos os componentes da tela (eu uso o zoom no iPhone)
} from "react-native";

import { useAuth } from '../../hooks/auth';

import IllustrationImg from "../../assets/illustration.png"
import { theme } from '../../global/styles/theme';
import { styles } from "./styles"

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

export function SignIn() {
	const { loading, signIn } = useAuth();

	async function handleSignIn() {
		try {
			await signIn();
		} catch (error) {
			Alert.alert(error);
		}
	}
	
  return (
		<Background>
			<View style={styles.container}>
				<ScrollView>
					<Image
						source={IllustrationImg}
						style={styles.image}
						resizeMode="stretch"
					/>
					
					<View style={styles.content}>
						<Text style={styles.title}>
							Connect{"\n"}
							and organize your{"\n"}
							games
						</Text>

						<Text style={styles.subtitle}>
							Create groups to play your{"\n"}
							favourite games with your friends
						</Text>

						{
							loading ? <ActivityIndicator color={theme.colors.primary} /> :
							<ButtonIcon
								title="Login using Discord"
								onPress={handleSignIn}
							/>
						}

					</View>
				</ScrollView>
			</View>
		</Background>
  );
}
