import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'White',
        margin:10,
        borderRadius:10
    },
    image:{height: Dimensions.get('window').height/4, borderTopLeftRadius:10, borderTopRightRadius:10,},
    title:{fontWeight:'bold', fontSize:16},
    description:{marginTop:5},
    innerContainer:{
        padding:5
    },
    author:{
        textAlign:'right',
        fontStyle:'italic',
        fontSize:10
    }


});
