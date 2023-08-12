import axios from 'axios'

export default async function handler(req, res) {
    const token = req.headers['authorization']
    const data = req.body
    console.log('data', data)
    // console.log(req)

    const config = {
        headers: {
            // "Authorization": token
        }
    }

    return new Promise((resolve, reject) => {
        axios.post('https://ras-backend.ap.ngrok.io/api/sensor-readings', {data}, config)
          .then(response => {
            console.log('data',response.data)
            res.status(200).json({ data: response.data });
          resolve();
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err.response?.data)
          resolve(); // in case something goes wrong in the catch block (as vijay commented)
        });
    });


    // axios.post('https://i-pond-backend.ap.ngrok.io/api/sensor-readings', data, config)
    // .then( response => {
    //     // console.log(response.data)
    //     return res.status(200).json({ data: response.data });
    // }).catch(err => {
    //     // console.log('Error Response',err.response)
    //     return res.status(err.response?.data.error.status).json(err.response?.data)
    // })

    // if(data){
    //     const config = {
    //         // headers: {
    //         //     "Authorization": token
    //         // }
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
}