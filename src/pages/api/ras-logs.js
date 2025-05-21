// import axios from 'axios'

// export default function handler(req, res) {
//     const token = req.headers['authorization']
//     console.log('TOKEN', token)

//     axios.get('https://ras-backend.ap.ngrok.io/api/logs', {
//     })
//     .then( response => {
//         return res.status(200).json({ data: response.data });
//     }).catch(err => {
//         return res.status(err.response?.data.error.status).json(err.response?.data)
//     })
// }