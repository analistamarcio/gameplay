import React from 'react';
import {
	View,
	Text,
	Image,
	ScrollView, // caso não caiba na tela, será possível dar um scroll para visualizar todos os componentes da tela (eu uso o zoom no iPhone)
} from "react-native";
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from "../../assets/illustration.png"
import { styles } from "./styles"

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

export function SignIn() {
	const navigation = useNavigation();

	function handleSignIn() {
		navigation.navigate("Home");
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

						<ButtonIcon
							title="Login using Discord"
							onPress={handleSignIn}
						/>

					</View>
				</ScrollView>
			</View>
		</Background>
  );
}
