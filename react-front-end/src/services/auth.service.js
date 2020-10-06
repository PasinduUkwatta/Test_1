import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "sign-in", {
                email,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(firstname,lastname, email, password) {
        return axios.post(API_URL + "sign-up", {

            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();