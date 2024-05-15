import axios from "axios";

const BASE_URI = process.env.REACT_APP_BASE_URI;

class Gallery {
    async getAllAlbums() {
        try {
            const response = await axios.get(BASE_URI +"/album/getAllAlbum", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("accesstoken")
                }
            });

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error("Unexpected response status: " + response.status);
            }
        } catch (error) {
            if (error.response && (error.response.status === 403 || error.response.status === 401)) {
                return "You are not Authorized";
            } else {
                return "An unexpected error occurred. Please try again later.";
            }
        }
    }
    async getAllPhotos(albumName) {
        try {
            const response = await axios.get(BASE_URI +"/photos/getAllPhotos/"+albumName, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("accesstoken")
                }
            });

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error("Unexpected response status: " + response.status);
            }
        } catch (error) {
            if (error.response && (error.response.status === 403 || error.response.status === 401)) {
                return "You are not Authorized";
            } else {
                return "An unexpected error occurred. Please try again later.";
            }
        }
    }
}

const galleryInstance = new Gallery();

export default galleryInstance;
