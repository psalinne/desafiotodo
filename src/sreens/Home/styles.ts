import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1A1A1A',
        padding: 0,
        margem: 0,
   
    },
    header:{
        backgroundColor: '#0D0D0D',
        height: 173,
        width:'100%',
        margem: 0,
        justifyContent: 'center',
        alignItems: 'center',


    },

    img:{
        marginTop:126,
        marginBottom: 50,

    },

    from:{
        width: '100%',
        flexDirection: 'row',
        marginTop: -10,
        marginBottom: 30,
        paddingRight:24,
        paddingLeft:24



    },

    input:{
        flex: 1,
        height:54,
        backgroundColor: '#262626',
        borderRadius: 6,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 4
    },

    buttonText:{
        color: '#fff',
        fontSize: 24
    },
    button:{
        width: 52,
        height: 52,
        borderRadius: 6,
        backgroundColor: '#1E6F9F', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgbutton:{
        padding:10
    },

    info:{
        marginTop: 40,
        marginLeft:24,
        marginRight: 24,
        marginBottom:20,
        height: 34,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#333333',
        borderBottomWidth: 1,
        
    },

    textinfto:{
        
        flexDirection: 'row',
        fontSize:14,
    },
    textinftoright:{
     
        flexDirection: 'row',
        fontSize:14,

    },
    textcont: {
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:8,
        paddingRight:8,
        textAlign:'center',
        backgroundColor: '#333333',
        fontSize:12,
        color:'#fff',
        borderRadius: 15,
        height: 19,
        marginLeft: 8,
        fontWeight: 'bold',
        minWidth:25
        

        

    },

    textcread:{
        color:'#4EA8DE',
        fontWeight: 'bold',
    },

    textdone:{
        color:'#8284FA',
        fontWeight: 'bold',
    }, 

    empty:{
        marginLeft:24,
        marginRight: 24,
        
        marginTop:20,
        padding:5

    },

    textemptybold:{
        fontWeight: 'bold',
        fontSize:14,
        color:'#808080',
        textAlign:'center',
    },
    textempty:{
        fontSize:14,
        color:'#808080',
        textAlign:'center',
  
    },

    imgempty:{
        marginTop:48,
        marginBottom: 16,
        marginLeft:'auto',
        marginRight:'auto',

    },



});