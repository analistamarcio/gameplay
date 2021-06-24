import React from 'react';
import { View, Text } from 'react-native';

import { styles } from "./styles";

import { Avatar } from '../Avatar';
import { theme } from '../../global/styles/theme';

export type MemberProps = {
	id: string;
	username: string;
	avatarUrl: string;
	status: string;
}

type Props = {
	data: MemberProps;
}

export function Member({ data }: Props) {
	const { on, primary } = theme.colors;
	const isOnline = data.status.toLowerCase() === "online";
	
	return (
		<View style={styles.container}>
			<Avatar urlImage={data.avatarUrl} />

			<View>
				<Text style={styles.title}>
					{ data.username }
				</Text>

				<View style={styles.status}>
					<View
						style={[
							styles.bulletStatus,
							{
								backgroundColor: isOnline ? on : primary
							}
						]}
					/>
					<Text style={styles.nameStatus}>
						{ isOnline ? "Available" : "Busy" }
					</Text>
				</View>
			</View>
		</View>
	)
};