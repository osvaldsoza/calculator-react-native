import React from 'react'
import {
    Text,
    TouchableHighlight,
    StyleSheet,
    Dimensions
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderColor: '#888',
        borderWidth: 1
    },
    operationsButton: {
        color: '#fff',
        backgroundColor: '#fab231'
    },
    btnDoublePosition: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    btnTriplePosition: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})

export default props => {
    const stylesButons = [styles.button]
    if (props.double) stylesButons.push(styles.btnDoublePosition)
    if (props.triple) stylesButons.push(styles.btnTriplePosition)
    if (props.operation) stylesButons.push(styles.operationsButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButons}>{props.label}</Text>
        </TouchableHighlight>
    )
}