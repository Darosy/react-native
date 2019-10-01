import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    text: {
        color: '#4a4a4a',
        fontSize: 15,
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: '#e4e4e4',
        marginLeft: 10,
    },
});

export const Separator = () => <View style={styles.separator} />;

const ListItem = ({text, onSwipeFromLeft, onRightPress}) => (
    <Swipeable>
        <View style={styles.container}>
            <TouchableHighlight onPress={()=> alert('asdasdad')}>
                <Text style={styles.text}>{text}</Text>
            </TouchableHighlight>
        </View>
    </Swipeable>
);

export default ListItem;
