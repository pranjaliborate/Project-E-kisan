import react from 'react'
import { Component } from 'react'

class AuthenticateService extends Component
{
    farmerLogin(username)
    {
        const type = "farmer"
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('userType',type);
    }

    buyerLogin(username)
    {
        const type = "buyer"
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('userType',type);
    }

    AdminLogin(username){
        const type = "admin"
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('userType',type);
    }

    logout()
    {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('userType');
    }

    isUserLoggedIn()
    {
        let user = sessionStorage.getItem('authenticatedUser');

        if(user=== null)
        {
            return false;
        }
        else{
            return true;
        }
    }
}

export default new AuthenticateService();