import axios from "axios"

const BASE_URI = process.env.REACT_APP_BASE_URI
class Users {
    async login(creds,setLoginError){ 
        axios.post(BASE_URI + "/auth/authenticate", creds)
        .then((response) => {
            if (response.status === 200) {
            localStorage.setItem("accesstoken", response.data.token);
            setLoginError("")
        }
        })
        .catch((error) => {
            if (error.response && (error.response.status === 403 || error.response.status === 401)) {
                setLoginError("Please enter correct credentials")
            } else {
                setLoginError("An unexpected error occurred. Please try again later.")
            }
        })
    
    
  
    }
}

const userInstance = new Users();

export default userInstance;