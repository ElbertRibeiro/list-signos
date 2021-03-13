import React from 'react';
import { View, ScrollView } from 'react-native';

import Signos from '../components/Signos';
import Title from '../components/Title';

export default function HomePage() {
    return (
        <View>
            <Title />
            <ScrollView>
                <Signos />
            </ScrollView>
        </View>
    );
}