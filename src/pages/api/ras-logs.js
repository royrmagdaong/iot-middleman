import axios from 'axios'

export default function handler(req, res) {
    // const token = req.headers['authorization']
    // console.log('TOKEN', token)
    // if(token){
       
    // }else{
    //     return res.status(403).json({message: 'Unauthorized access'})
    // }

    axios.get('https://ras-backend.ap.ngrok.io/api/logs', {
    })
    .then( response => {
        // console.log(response.data)
        return res.status(200).json({ data: response.data });
    }).catch(err => {
        // console.log('Error Response',err.response)
        return res.status(err.response?.data.error.status).json(err.response?.data)
    })
}