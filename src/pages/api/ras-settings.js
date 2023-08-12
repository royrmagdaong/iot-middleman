import axios from 'axios'

export default async function handler(req, res) {
    const token = req.headers['authorization']
    console.log(token)
    if(token){
      return new Promise((resolve, reject) => {
          axios.get('https://ras-backend.ap.ngrok.io/api/setting', {
              headers: {
                  "Authorization": token
              }
          })
            .then(response => {
            res.status(200).json({ data: response.data });
            resolve();
          })
          .catch(err => {
            res.status(err.response?.data.error.status).json(err.response?.data)
            resolve(); // in case something goes wrong in the catch block (as vijay commented)
          });
      });
    }else{
      return res.status(403).json({message: 'Unauthorized access'})
    }
  };