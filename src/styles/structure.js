import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
         flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'stretch',
        marginTop:25,
    },
    list: {
        backgroundColor:'aqua',
        flex: 1, //if only on component set flex, it will hold all the space except other components
    },
    form:{
        backgroundColor:'orange',
        flex: 1,//if there are other components also set flex, it will hold 2/3 space except other components
    }
});

