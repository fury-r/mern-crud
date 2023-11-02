
const {connect}=require("./mongoConnect");
const { app } = require('./view/routes');
var cors = require('cors')
app.use(cors())
connect()
app.listen(3001,()=>{
    console.log("running on port 3001")
})