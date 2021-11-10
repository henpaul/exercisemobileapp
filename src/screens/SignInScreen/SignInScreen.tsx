import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'

const SignInScreen = (  ) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [newPassword] = useState('12345678');

    //const type = props.route.params.paramKey;

    const navigation = useNavigation();




    const onSignInPressed = async function () {
        Auth.signIn(username, password)
        .then(user => {
            if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                sendAuthCode();

            } else {
                Auth.currentAuthenticatedUser().then(console.log)
            }
        }).catch(e => {
            console.log(e);
        });
    }

    const sendAuthCode = () => {
             navigation.navigate('ConfirmNew');

    }


    const onSignUpCoachPressed = () => {
        navigation.navigate('SignUp', {
            paramKey: 'Coach',
        });
    }

    const onSignUpRangerPressed = () => {
        navigation.navigate('SignUp', {
            paramKey: 'Ranger',
        });
    }

    const onForgotPressed = () => {
        navigation.navigate('Forgot')
    }

    return (
        <View style={styles.root}>
            <Text>Sign In Screen</Text>
            <CustomInput 
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />
            <CustomInput 
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            <Custombutton 
                text="Sign In"
                onPress={onSignInPressed}
            />
            <Custombutton 
                text="Forgot Password"
                onPress={onForgotPressed}
                style={{
                    backgroundColor: 'transparent',
                }}
                styleText={{
                    color: 'black'

                }}
            />
            <Custombutton 
                text="Ranger Sign Up"
                onPress={onSignUpRangerPressed}
                style={{
                    backgroundColor: 'coral',
                    opacity: .5,

                }}
                styleText={{
                    color: 'black'

                }}
            />
                        
            <Custombutton 
                text="Strength Coach Sign Up"
                onPress={onSignUpCoachPressed}
                style={{
                    backgroundColor: 'coral',
                    opacity: .5,

                }}
                styleText={{
                    color: 'black'

                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    }
})

export default SignInScreen