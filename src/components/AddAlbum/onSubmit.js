import axios from "axios"

const BASE_URI = process.env.REACT_APP_BASE_URI
class AddAlbum {
    async addAlbum(data){ 
        axios.post(BASE_URI + "/album/createAlbum", data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accesstoken")
            }
        })
        .then((response) => {
            if (response.status === 200) {
            return response.data;
        }
        })
        .catch((error) => {
            if (error.response && (error.response.status === 403 || error.response.status === 401)) {
                return "You are not Authorized to create"
            } else {
                return "An unexpected error occurred. Please try again later."
            }
        })
    
    
  
    }
}

const addAlbumInstance = new AddAlbum();

export default addAlbumInstance;