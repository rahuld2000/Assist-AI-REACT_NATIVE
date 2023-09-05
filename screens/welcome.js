import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const navigation=useNavigation();
  return (
    <View className="h-full bg-black">
    <SafeAreaView className="flex-col h-full w-full  justify-between">
    <View className="flex items-center mt-8">
     <Image className="w-72 h-72" source={require("../assets/welcome.png")}/>
    </View>
   
    <View className="space-y-20 mb-10">
    <View>
    <Text className="text-white text-4xl font-bold text-center">Assist A.I</Text>
   <Text className="text-white text-center">Future is Here.</Text>
   </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} className="mx-3 p-4 bg-[#FBFF00]  rounded-xl ">
            <Text className="text-black text-xl font-bold text-center">Ask Me!</Text>
        </TouchableOpacity>
    </View>
    
    </SafeAreaView>
   
    </View>
 
  )
}

export default Welcome