import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image , FlatList , SafeAreaView, ScrollView} from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth, autoShowTooltip } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import ChatRoomItem from '../../component/ChatRoomItem';
import ProgramItem from '../../component/ProgramItem'
import { TouchableOpacity } from 'react-native-gesture-handler' //Can also use TouchOpac from 'react-native'

import chatRoomsData from '../../../assets/dummy-data/ChatRooms';
import workoutData from '../../../assets/dummy-data/Workouts';
import { listChatRooms } from '../../graphql/queries';

import WeekListItem from '../../component/WeekListItem/WeekListItem'

const Plans = () => {

    const navigation = useNavigation(); 

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.page}> 
                    {/* <Text style={styles.heading}>| Tango</Text>  */}
                    <WeekListItem 
                        programName={'Tango'} 
                        dayPicker={'DayView'} 
                        description={'POWER / POWER ENDURANCE via Kettlebells / Dumbells ---Improve Ruck --- ENDURANCE FOCUS'} />   
                    <WeekListItem 
                        programName={'Sierra'} 
                        dayPicker={'DayView'} 
                        description={'Train like an Olympic Lifter w Ranger Mentality --- Daily skill development prior to main Olympic lift for technical mastery. Power/strength focus.'}/>            
                    {/* <WeekListItem programName={'Another'} description={'Train like an Olympic Lifter w Ranger Mentality --- Daily skill development prior to main Olympic lift for technical mastery. Power/strength focus.'}/>              */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const buttonClickedHandler = () => {
    console.log('Button Clicked!');
    //do something
}

function renderHeader() {
    return (
      <View>

      </View>
    );
  }


const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    heading: {
        fontSize: 30
    },
    page: {
        backgroundColor: '#bfdbf7',
        flex: 1
    },

})


export default Plans