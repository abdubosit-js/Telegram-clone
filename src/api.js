import axios from "axios"
import { toast } from "react-toastify"
axios.defaults.baseURL = "http://142.93.246.144"

class Api {
    async signup(data) {
        try {
            const signup = await axios.post("/signup", data)
            return signup.data
        } catch(err) {
            toast.error(err)
        }
    }
    
    async signin(data) {
        try{
            const signin = await axios.post("/login", data)
            return signin.data
        } catch(err) {
            toast.error(err)
        }
    }

    async fetchMessages() {

    }

    async messages(data) {

    }
}

export const api = new Api()