import axios from 'axios'

// export default function handler(req, res) {
//     const token = req.headers['authorization']
//     console.log(token)
//     if(token){
//         axios.get('https://ras-backend.ap.ngrok.io/api/sensor-readings', {
//             headers: {
//                 "Authorization": token
//             }
//         })
//         .then( response => {
//             // console.log(response.data)
//             return res.status(200).json({ data: response.data });
//         }).catch(err => {
//             // console.log('Error Response',err.response)
//             return res.status(err.response?.data.error.status).json(err.response?.data)
//         })
//     }else{
//         return res.status(403).json({message: 'Unauthorized access'})
//     }
// }

export default async function(req, res) {
    const token = req.headers['authorization']
    console.log(token)
    return new Promise((resolve, reject) => {
        axios.get('https://ras-backend.ap.ngrok.io/api/sensor-readings', {
            headers: {
                "Authorization": token
            }
        })
          .then(response => {
          res.statusCode = 200
        //   res.setHeader('Content-Type', 'application/json');
        //   res.setHeader('Cache-Control', 'max-age=180000');
          res.json({ data: response.data });
          resolve();
        })
        .catch(err => {
          res.json(err);
          res.status(err.response?.data.error.status).json(err.response?.data)
          resolve(); // in case something goes wrong in the catch block (as vijay commented)
        });
    });
  };