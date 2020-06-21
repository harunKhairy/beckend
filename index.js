const express = require ('express');
const app = express();
const cors = require ('cors')
const bodyParser = require ('body-parser');
const bearerToken = require ('express-bearer-token');


const PORT = 5000;
app.use(cors()); //akses dari frontend ke beackend
app.use(bearerToken());
app.use(bodyParser.json()); //user kirim data ke server
app.use(bodyParser.urlencoded({ extended: false }) );  //akses user kirim data ke server
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('<h1>Welcom to API</h1>')
})

const {
    AuthRouter
} = require ('./routers')

app.use('/auth', AuthRouter)

app.listen(PORT, ()=> console.log(`API running on PORT ${PORT}`))