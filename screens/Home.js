import { View, Text,TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import XMarkIcon from 'react-native-heroicons/outline/XMarkIcon'
import MicrophoneIcon from 'react-native-heroicons/outline/MicrophoneIcon'

const Home = () => {
    return (
      <KeyboardAvoidingView className="flex-1">
      <ScrollView
      contentContainerStyle={{flex:1}} bounces={false}>
        <View className="h-full bg-black flex-col justify-between" >
       
            <SafeAreaView className="p-4 ">
        
                <View>
                    <Text className="text-white text-3xl font-semibold">Features.</Text>
                </View>
                <View className="space-y-3 mt-6">
                    <View className="bg-[#D09CFA] p-4 space-y-1  rounded-md">
                        <Text className="text-lg font-semibold">ChatGPT</Text>
                        <Text>ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.</Text>
                    </View>
                    <View className="bg-[#F0FF42] p-4 space-y-1  rounded-md">
                        <Text className="text-lg font-semibold">DALL-E</Text>
                        <Text>DALL_E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.</Text>
                    </View>
                    <View className="bg-[#9CFF2E] p-4 space-y-1 rounded-md">
                        <Text className="text-lg font-semibold">Smart AI</Text>
                        <Text>A powerful voice assistant with ability of chatGPT and DALL-E, providing you the best of both words</Text>
                    </View>
                </View>
               
            </SafeAreaView>
            <View className="flex-row justify-center mb-16">
            <View className="text-white p-3 bg-red-500 rounded-md" >
            <XMarkIcon color="white" size="29"/>
            </View>
            
        <TextInput className="bg-white rounded-md w-72 mx-1 p-2"></TextInput>
        <View className="text-white p-3 bg-blue-500 rounded-md">
        <MicrophoneIcon color="white" size="29"/>
        </View>
      
    </View>

        </View>
        </ScrollView>
        </KeyboardAvoidingView>
        
    
    )
}

export default Home