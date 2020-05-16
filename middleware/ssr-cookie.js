import axios from '../plugins/axios'
// const axios = require('../middleware/axios')

export default function({ isServer, req }) {
    if (isServer) {
        axios.defaults.headers.common.cookie = req.headers.cookie
    }
}