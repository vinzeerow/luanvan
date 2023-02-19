import React, { Component } from 'react';
import axios from 'axios';
import { SafeAreaView, Button, StyleSheet, Text, TextInput, TouchableOpacity, Alert, View } from 'react-native';
export default class LoginScreen extends Component {
  constructor(probs) {
    super(probs);
    this.state = {
      txtUsername: "",
      txtPassword: "",
      checkLogin: 0,
      dataTaiKhoan: [],
    }
  }

  postDemo() {
    var url = "http://10.233.2.87:3000/account";
    Alert.alert(this.state.txtUsername);
    axios.post(url, {
      username: this.state.txtUsername,
      password: this.state.txtPassword
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
    //Reset du lieu
    this.state.txtUsername = "";
    this.state.txtPassword = "";
  }
  login = () => {
    //Gui yeu cau GET du lieu TAIKHOAN den Webservice
    var url = "http://10.233.2.87:3000/account";
    axios.get(url).then((taikhoan) => {
      console.log(taikhoan.data);
      // Lap qua du lieu TAIKHOAN de kiem tra
      taikhoan.data.map((item) => {
        if (this.state.txtUsername == item.username && this.state.txtPassword == item.password) {
          this.props.navigation.navigate('Home');
          
          // this.props.navigation.navigate('Home', {
          //   id: 1,
          //   user: 'Me'
          // })
          // this.props.navigation.getParam('me', defaultValue)
        }
      })
      this.setState({
        dataTaiKhoan: taikhoan.data,
      });
    });
    // Alert.alert(this.state.dataTaiKhoan[1]);
    // this.state.dataTaiKhoan.map((item) => {
    // Alert.alert(item.username + "" + item.password);
    // if (this.state.txtUsername == item.username && this.state.txtPassword == item.password) {
    // Alert.alert(item.username + "" + item.password);
    // this.props.navigation.navigate('Home');
    // this.props.navigation.navigate('Home', {
    //   id: 1,
    //   user: 'Me'
    // })
    // this.props.navigation.getParam('me', defaultValue)
    // }
    // })
  }
  render() {

    const dataFromMySql = this.state.dataTaiKhoan.map((item, index) => {
      var arrayTaiKhoan =
        ['Username: ', item.username, ' Password: ', item.password].join(' ');
      return <Text key={index}>{arrayTaiKhoan}</Text>
    })
    return (

      <SafeAreaView style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(txtUsername) => this.setState({ txtUsername: txtUsername })}
            value={this.state.txtUsername}
            placeholder="Username"
          />

          <TextInput
            style={styles.input}
            onChangeText={(txtPassword) => this.setState({ txtPassword: txtPassword })}
            value={this.state.txtPassword}
            placeholder="Password"
            secureTextEntry={true}
          />

          <TouchableOpacity onPress={this.login.bind(this)} style={styles.loginBtn}>
            <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>
        {/* <View>
          {dataFromMySql}
        </View> */}
      </SafeAreaView>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    marginTop: 14,
    marginBottom: 14,
    textAlign: "center",
  },
  input: {
    height: 40,
    width: 260,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  button: {
    height: 40,
    width: 260,
    marginTop: 10,
    marginBottom: 8,
  },
  loginBtn: {
    width: 260,
    borderRadius: 4,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#00649F",

  },
  loginText: {
    color: "#fff",
  },
  loginBtnGmail: {
    width: 260,
    borderRadius: 4,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00649F",
  }
});


