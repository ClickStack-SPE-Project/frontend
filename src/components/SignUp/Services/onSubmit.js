import axios from "axios"

const BASE_URI = process.env.REACT_APP_BASE_URI
class Users {
    signUp(creds,setsignupError){ 
        axios.post(BASE_URI + "/auth/register", creds)
        .then((response) => {
            if (response.status === 200) {
            localStorage.setItem("accesstoken", response.data.token);
            setsignupError("")
        }
        })
        .catch((error) => {
            if (error.response && (error.response.status === 403 || error.response.status === 401)) {
                setsignupError("Please see that your details is in correct format.")
            } else {
                setsignupError("An unexpected error occurred. Please try again later.")
            }
        })
    
    
  
    }
}

const userInstance = new Users();

export default userInstance;