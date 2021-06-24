import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CategorySelect } from "../../components/CategorySelect";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export function Home(){
	const [category, setCategory] = useState("");

	const navigation = useNavigation();
	
	const appointments = [
		{
			id: "1",
			guild: {
				id: "1",
				name: "Legendary",
				icon: null,
				owner: true,
			},
			category: "1",
			date: "06/22 - 20:40h",
			description: "Today we will reach the challenger without losing a md10 match.",
		},
		{
			id: "2",
			guild: {
				id: "1",
				name: "Legendary",
				icon: null,
				owner: true,
			},
			category: "1",
			date: "06/22 - 20:40h",
			description: "Today we will reach the challenger without losing a md10 match.",
		},
	]

	function handleCategorySelect(categoryId: string) {
		categoryId === category ? setCategory("") : setCategory(categoryId);
	}

	function handleAppointmentDetails(){
		navigation.navigate("AppointmentDetails");
	}
	
	function handleAppointmentCreate(){
		navigation.navigate("AppointmentCreate");
	}
	
	return (
		<Background>
			<View style={styles.header}>
				<Profile />
				<ButtonAdd onPress={handleAppointmentCreate} />
			</View>
			
			<CategorySelect
				categorySelected={category}
				setCategory={handleCategorySelect}
			/>

			<View style={styles.content}>
				<ListHeader
					title="Booked games match"
					subtitle="Total 6"
				/>

				<FlatList
					data={appointments}
					keyExtractor={item => item.id}
					renderItem={({item}) => (
						<Appointment
							data={item}
							onPress={handleAppointmentDetails}
						/>
					)}
					ItemSeparatorComponent={() => <ListDivider />}
					style={styles.matches}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</Background>
	);
}
