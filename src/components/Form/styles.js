import { StyleSheet, Platform } from "react-native";
import { primaryColor, secondColor } from './../../includs/variables';


export default StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        container: {
            borderLeftWidth: 5,
            borderLeftColor: primaryColor,
            paddingLeft: 7
        },
        label: {
            fontSize: 19,
            fontWeight: 'bold',
            color: primaryColor,
        }
    },
    textInput: {
        borderWidth: 1,
        // color: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10
    },
    textInputDescription: {
        height: 80,
        textAlignVertical: 'top'
    },
    switch: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 10 : 0
    },
    switchText: {
        color: '#444',
        marginLeft: Platform.OS === 'ios' ? 10 : 0
    },
    errorMessageTitle: {
        color: '#c00',
        fontWeight: 'bold',
        paddingTop: 10
    },
    errorMessageItem: {
        color: '#f00'
    }
});