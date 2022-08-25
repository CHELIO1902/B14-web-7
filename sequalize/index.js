const express = require( 'express' );
const app = express();


//Middlewares

app.use( express.json() );
app.use(express.urlencoded({extended: false}))
//Routes
require("./app/routes/employees.routes")(app)

//Libraries


//Engine Config
app.listen( 3000, () => {
    console.log('Server is running')
})