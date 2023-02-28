import React,{useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import aboutImage from '../assets/aboutImage.png';
import * as Linking from 'expo-linking';
import { StatusBar } from 'expo-status-bar';


export default function AboutPage({navigation}) {
    console.disableYellowBox = true; // expo YelloBox defalut

    useEffect(()=>{
        navigation.setOptions({
            title:'소개페이지',
            headerStyle: {
                backgroundColor:"#262C74",
                shadowcolor: "#262C74"
            },
            headerTintColor: "#fff",
        })
    },[])

    const link = () => {
        Linking.openURL("https://www.instagram.com/shibaski_taeoh/")
    }
    
    return(
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.title}>HI! 스파르타코딩 앱개발 반에 오신것을 환영합니다</Text>

            <View style={styles.submain}>
                <Image style={styles.mainImage} source={aboutImage}></Image>
                <Text style={styles.mainText1}>많은 내용을 간결하게 담아내려    노력했습니다!</Text>
                <Text style={styles.mainText2}>꼭 완주하셔서 꼭 여러분것으로    만들어가시길 바랍니다.</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={()=>link()}>여러분의 인스타계정</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262C74', // 앱의 배경색
        flex:1,
        alignItems:"center"
    },
    title: {
        fontSize: 34, // 타이틀 폰트 사이즈
        fontWeight: '700', // 폰트 두께
        paddingTop: 20,
        paddingLeft: 35,
        paddingRight: 35,
        color: '#fff'
    },
    submain:{
        width:300,
        height:550,
        backgroundColor: '#fff',
        marginLeft: 15,
        marginTop: 50,
        borderRadius: 30,
        justifyContent: "center",
        alignItems:"center"
    },
    mainImage:{
        width:200,
        height:200,
        borderRadius:30
    },
    mainText1:{
        textAlign:"center",
        fontSize: 20,
        fontWeight: "700",
        padding: 15
    },
    mainText2:{
        textAlign:"center",
        fontSize: 15,
        fontWeight:"700",
        padding:22
    },
    button:{
        backgroundColor:"orange",
        padding:20,
        borderRadius: 15
    },
    buttonText:{
        color: '#fff',
        fontSize: 15,
        fontWeight: "700"
    }
})