export default class AuthService {
    constructor(domain) {
        console.log("AuthService Constructor")
        this.domain = domain || 'http://localhost:9000'
    }

/*
The callback takes two arguments, resolve and reject , which are both functions. 
All your asynchronous code goes inside that callback.
 If everything is successful, the promise is fulfilled by calling resolve() . 
 In case of an error, reject() is called with an Error object. This indicates that the promise is rejected.
*/

    register(userModel){
        // This is how the real function would look like
        // return this.fetch(`${this.domain}/api/auth/signup`, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify( {identifier: username,  password: password,email: email,firstName: firstName,lastName: lastName} )
        // }).then((response) => {
        //     return Promise.resolve(response);
        // }).then((response) => {
        //     return Promise.reject(response.statusText);
        // })
        return Promise.resolve({token:"testtoken",expires:"01/01/2019"});
    }
    login(userInfo){
        return Promise.resolve({token:"testtoken",expires:"01/01/2019"});
    }
}