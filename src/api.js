import axios from "axios"
import { toast } from "react-toastify"
axios.defaults.baseURL = "http://142.93.246.144"

class Api {
    async fetchMessages() {
        try {
            const config = {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
            const fetchMessages = await axios.get("/messages", config)
            return fetchMessages.data
        } catch(err) {
            toast.error(err)
        }
    }

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

    async messages(data) {
        try {
            const config = {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
            const message = await axios.post("/messages", data, config)
            return message.data
        } catch(err) {
            toast.error(err)
        }
    }

    async deleted(id) {
        try {
            const config = {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
            const deleted = await axios.delete(`messages/${id}`, config)
            return deleted.data
        } catch(err) {
            toast.error(err)
        }
    }
}

export const api = new Api()