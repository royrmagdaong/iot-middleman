import axios from 'axios'

export default function handler(req, res) {
    // console.log(req)
    axios.get('https://i-pond-backend.ap.ngrok.io/api/logs')
    .then(function (response) {
        // handle success
        // console.log(response);
        console.log(response.data)
        return res.status(200).json({ data: response.data });
    }).catch(err=>{
        res.status(500).json({ message: 'error' })
    })
    
}