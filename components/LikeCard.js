import React from 'react';
import { useContext } from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity, Alert} from 'react-native'
import {firebase_db} from "../firebaseConfig";
import Constants from 'expo-constants';

//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function LikeCard({content,navigation}){

  const detail = () => {
    navigation.navigate('DetailPage',{idx:content.idx})
  }

  const remove =() => {
    const user_id = Constants.installationId;
    firebase_db.ref('/like/'+user_id+'/'+content.idx).remove().then(function(){
      Alert.alert("삭제완료");
      navigation.navigate('Likepage')
    })
  }
    return(
        <View style={styles.card}>
            <Image style={styles.cardImage} source={{uri:content.image}}/>
            <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>

                <View style={styles.Button}>
                  <TouchableOpacity style={styles.button1} onPress={()=>detail()}><Text style={styles.buttonText}>자세히보기</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.button1} onPress={()=>remove()}><Text style={styles.buttonText}>찜 삭제</Text></TouchableOpacity>
                  </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    
    card:{
      flex:1,
      flexDirection:"row",
      margin:10,
      borderBottomWidth:0.5,
      borderBottomColor:"#eee",
      paddingBottom:10
    },
    cardImage: {
      flex:1,
      width:70,
      height:100,
      borderRadius:10,
    },
    cardText: {
      flex:2,
      flexDirection:"column",
      marginLeft:10,
    },
    cardTitle: {
      fontSize:20,
      fontWeight:"700"
    },
    cardDesc: {
      fontSize:15
    },
    cardDate: {
      fontSize:10,
      color:"#A6A6A6",
    },
    Button:{
      flexDirection:"row"
    },
    button1: {
      width:100,
      marginTop:10,
      marginRight:10,
      marginLeft:10,
      padding:10,
      borderWidth:1,
      borderRadius:7,
      borderColor:'deeppink'
    },
    buttonText: {
      color:'deeppink',
      textAlign:'center'
    }
});