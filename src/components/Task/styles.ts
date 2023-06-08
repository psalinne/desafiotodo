import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    
    task:{
        
        marginLeft:24,
        marginRight: 24,
        backgroundColor: '#262626',
        
        borderRadius: 8,
        
        padding:12,
        borderColor: '#333333',
        borderWidth: 1,
        marginBottom:8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'

    },

    tasktext:{
        flex:1,
        flexDirection: 'row',
        fontSize:14,
        color:'#fff',
        marginLeft:8,
        marginRight: 8,
      

    },

    taskbutton:{
        width: 32,
        height: 32,
        marginRight: 8,
        
    },

    checkbox: {
       
        borderColor: '#4EA8DE',
        borderWidth: 2,
        borderRadius: 20,
   
        
      },



});