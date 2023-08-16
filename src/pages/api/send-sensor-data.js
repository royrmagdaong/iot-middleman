import axios from 'axios'

export default function handler(req, res) {
    const token = req.headers['authorization']
    const data = req.body

    // if(token){
    //     const config = {
    //         headers: {
    //             "Authorization": token
    //         }
    //     }
    //     axios.post('https://i-pond-backend.ap.ngrok.io/api/sensor-readings', data, config)
    //     .then( response => {
    //         // console.log(response.data)
    //         return res.status(200).json({ data: response.data });
    //     }).catch(err => {
    //         // console.log('Error Response',err.response)
    //         return res.status(err.response?.data.error.status).json(err.response?.data)
    //     })
    // }else{
    //     return res.status(403).json({message: 'Unauthorized access'})
    // }

    axios.post('https://i-pond-backend.ap.ngrok.io/api/sensor-readings', data, {})
        .then( response => {
            // console.log(response.data)
            return res.status(200).json({ data: response.data });
        }).catch(err => {
            // console.log('Error Response',err.response)
            return res.status(err.response?.data.error.status).json(err.response?.data)
        })
}