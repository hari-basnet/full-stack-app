import axios from 'axios'
const setAuthheader = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token
    } else {
        axios.defaults.headers.common['Authorization']
    }
}