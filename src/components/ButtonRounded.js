import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import {css} from '../styles/Global';

export default class ButtonRounded extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPress={this.props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.caption}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export const styles = StyleSheet.create({
    button: {
        backgroundColor: '#23b0f9',
        borderRadius: 100,
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 12,
        minWidth: 200,
    },
    caption: {
        color: '#fff',
        textAlign: 'center',
    },
});
