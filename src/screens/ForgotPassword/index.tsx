import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'

const forgotPassword = (  ) => {
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    //const type = props.route.params.paramKey;

    const onForgotPressed = async function () {
        Auth.forgotPassword(username)
        .then(data => console.log(data))
        .catch(err => console.log(err));
        navigation.navigate('ConfirmForgot');
    }

    return (
        <View style={styles.root}>
            <CustomInput 
                placeholder="Email"
                value={username}
                setValue={setUsername}

            />
            <Custombutton 
                text="Forgot Password"
                onPress={onForgotPressed}
                style= {{
                    marginTop: 20,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        flex: 1,
    }
})

export default forgotPassword