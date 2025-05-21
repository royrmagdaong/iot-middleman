// import axios from 'axios'

// export default async function handler(req, res) {
//     const token = req.headers['authorization']
//     const data = req.body
//     // console.log('data', data.data.machine)

//     const config = {
//         headers: {
//             "Authorization": token
//         }
//     }
//     if(token){
//       return await new Promise(async (resolve, reject) => {
//         // await axios.get(`https://iot-backend.ap.ngrok.io/api/machine-connections?populate=*&filters[machine][id][$eq]=${data?.data.machine}`, config)
//         await axios.get(`http://10.10.122.91:1340/api/machine-connections?populate=*&filters[machine][id][$eq]=${data?.data.machine}`, config)
//         .then(async response => {
//           let machine_connection = response.data.data[0].id
//           let data2 = {
//             is_connected: true
//           }
//           // await axios.put(`https://iot-backend.ap.ngrok.io/api/machine-connections/${machine_connection}`, {data:data2}, config).then(ress=>{
//           await axios.put(`http://10.10.122.91:1340/api/machine-connections/${machine_connection}`, {data:data2}, config).then(ress=>{
//             console.log('Updated', ress.data)
//             res.status(200).json({ data: ress.data });
//             resolve();
//           }).catch(err=>{res.status(500).json({message: err.message})})

//         }).catch(err=>{res.json({message: "fetch machine connection failed"})})
//         .catch(err => {
//             // console.log(err)
//           res.status(500).json({message:err.message})  
//           resolve(); // in case something goes wrong in the catch block (as vijay commented)
//         });
//       });
//     }else{
//       return res.status(403).json({message: 'Unauthorized access'})
//     }
// }