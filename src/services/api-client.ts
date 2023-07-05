import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "7042b7b4ebd94b0e8679fbe7cf5b0927"
    }
})