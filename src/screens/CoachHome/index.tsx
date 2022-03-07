import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image , FlatList} from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Chatroom, ChatroomUser} from '../../models'
import chatRoomsData from '../../../assets/dummy-data/ChatRooms';
import RangerItem from '../../component/RangerItem'
{/* name of function - edited */}
const CoachHome = () => {


    const navigation = useNavigation(); 

    return (
        <View style={styles.page}>
         <Text style={styles.headerTitle}>Rangers: </Text>
        <FlatList
            ListHeaderComponent={renderHeader}
            data={chatRoomsData}
            renderItem={({item}) => <RangerItem chatRoom={item} />}
        /> 
    </View>
    )
}

function renderHeader() {
    return (
      <View
        style={{
          backgroundColor: '#022b3a',
          padding: 8,
          marginVertical: 10,
          borderRadius: 19,
          borderStyle: 'solid',
          borderColor: 'black',
          borderWidth: 2,
          margin: 10,
          
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={"Search..."}
          //onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#022b3a', paddingHorizontal: 20, color: 'white' }}
        />
      </View>
    );
  }


const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    logo: {
        width: '70%',
        height: 70,
        marginBottom: 30,
        marginTop: 20,
    },
    headerTitle : {
        fontSize: 35,
        left: 13,
        top: 4,
        color: '#1B8080',
        fontWeight: '700'
    },
    banner: {
        backgroundColor: '#022b3a',
        width: '100%',
        height: 20,
        marginBottom: 70,
    },
    page: {
        backgroundColor: '#bfdbf7',
        flex: 1
    }
})
export default CoachHome