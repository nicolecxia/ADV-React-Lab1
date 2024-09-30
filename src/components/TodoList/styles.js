import { StyleSheet, Platform } from "react-native";
import { primaryColor } from "../../includs/variables";

export default StyleSheet.create({
    addButtonContainer: {
        backgroundColor: primaryColor,
        borderRadius: 30,
        position: 'absolute',
        right: 15,
        bottom: 15,
        elevation: 2,
        shadowOpacity: 0.25,
        shadowColor: "#000",
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    addButtonText: {
        width: 60,
        height: 60,
        color:'#fff',
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        lineHeight:56,
    },
})