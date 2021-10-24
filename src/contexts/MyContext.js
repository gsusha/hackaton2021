import React, { createContext, Component } from "react";
import axios from 'axios'
export const MyContext = createContext({name: '', auth: false, theUser: null});

// Define the base URL
const Axios = axios.create({
    baseURL: 'https://j16301712.myjino.ru/php/',
});

class MyContextProvider extends Component{
    constructor(){
        super();
        this.isLoggedIn();
    }

    // Root State
    state = {
        showLogin:true,
        isAuth:false,
        theUser:null,
    }

    // Toggle between Login & Signup page
    toggleNav = () => {
        const showLogin = !this.state.showLogin;
        this.setState({
            ...this.state,
            showLogin
        })
    }

    logoutUser = () => {
        localStorage.removeItem('loginToken');
        this.setState({
            ...this.state,
            isAuth:false
        })
    }

    loginUser = async (user) => {
        const login = await Axios.post('login.php',{
            name:user.name,
            password:user.password
        });
        return login.data;
    }

    isLoggedIn = async () => {
        const loginToken = localStorage.getItem('loginToken');

        if(loginToken){
            Axios.defaults.headers.common['Authorization'] = 'bearer '+loginToken;

            const {data} = await Axios.get('user-info.php');

            if(data.success && data.user){
                this.setState({
                    ...this.state,
                    isAuth:true,
                    theUser:data.user
                });
            }

        }
    }

    render(){
        const contextValue = {
            rootState:this.state,
            toggleNav:this.toggleNav,
            isLoggedIn:this.isLoggedIn,
            loginUser:this.loginUser,
            logoutUser:this.logoutUser
        }
        return(
            <MyContext.Provider value={contextValue}>
                {this.props.children}
            </MyContext.Provider>
        )
    }

}

export default MyContextProvider;