import React from 'react';
import {
	View,
	Text,
	Image,
	StatusBar,
	ScrollView,
	StyleSheetProperties, // caso não caiba na tela, será possível dar um scroll para visualizar todos os componentes da tela (eu uso o zoom no iPhone)
} from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png"
import { styles } from "./styles"
import { setStatusBarBackgroundColor } from 'expo-status-bar';

export function SignIn() {
  return (
    <View style={styles.container}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>

		<ScrollView>
		<Image
				source={IllustrationImg}
				style={styles.image}
				resizeMode="stretch"
			/>
			
			<View style={styles.content}>
				<Text style={styles.title}>
					Organize{`\n`}
					suas jogatinas{`\n`}
					facilmente
				</Text>

				<Text style={styles.subtitle}>
					Crie grupos para jogar seus games{`\n`}
					favoritos com seus amigos
				</Text>

				<ButtonIcon
					title="Entrar com Discord"
					activeOpacity={0.7}
				/>

			</View>
		</ScrollView>
    </View>
  );
}
