export default class AuthService {
    constructor(domain) {
        console.log("AuthService Constructor")
        this.domain = domain || 'http://localhost:9000'
    }
    register(userModel){
        // This is how the real function would look like
        // return this.fetch(`${this.domain}/api/auth/signup`, {
        //     method: 'POST',
        //     body: JSON.stringify( {identifier: username,  password: password,email: email,firstName: firstName,lastName: lastName} )
        // }).then(res => {
        //     return Promise.resolve(res);
        // })
        return Promise.resolve({token:"testtoken",expires:"01/01/2019"});
    }
    login(userInfo){
        return Promise.resolve({token:"testtoken",expires:"01/01/2019"});
    }
}