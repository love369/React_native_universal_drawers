/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Image, StatusBar } from 'react-native';
import styles from './Login.styles';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { authUser } from '../../service/auth.service';


const LoginContainer = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [userNameError, setUserNameError] = useState('');

    const validate = () => {

        setPasswordError('');
        setUserNameError('');

        if (userName === '') {
            setUserNameError('Enter User Name');
            return;
        }
        else if (password === '') {
            setPasswordError('Enter Password');
            return;
        }
        else {
            proceedLogin();
        }

    };

    const proceedLogin = () => {
        authUser({ userName, password });
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='white' barStyle='dark-content' />
            <View style={styles.subContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.logoStyle}
                        source={require('../../assets/logo.jpeg')}
                    />
                </View>

                <TextInput
                    type="outlined"
                    label="UserName"
                    returnKeyType="next"
                    value={userName}
                    onChangeText={text => setUserName(text)}
                    error={!!userNameError}
                    style={styles.inputTextStyle}
                    errorText={userNameError}
                    autoCapitalize="none"
                    theme={{ colors: { primary: '#F23F5D', underlineColor: 'transparent', } }}

                />
                <HelperText type="error" visible={!!userNameError}>
                    {userNameError}
                </HelperText>
                <TextInput
                    type="outlined"
                    label="Password"
                    activeOutlineColor='#F23F5D'
                    returnKeyType="done"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    error={!!passwordError}
                    errorText={passwordError}
                    style={styles.inputTextStyle}
                    secureTextEntry
                    theme={{ colors: { primary: '#F23F5D', underlineColor: 'transparent', } }}
                />
                <HelperText type="error" visible={!!passwordError}>
                    {passwordError}
                </HelperText>

                <Button color='#F23F5D' style={styles.buttonStyle} mode="contained" onPress={() => validate()}>
                    Sign In
                </Button>
            </View>
        </View>
    );
};
export default LoginContainer;