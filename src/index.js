
//Go grab the tool box called express 
const express = require('express');

//
const app = express();

//req = request, res = response
app.get("/", (req,res) =>{
    res.json({ status: "Vault API is running"});
})

app.listen(4000, "127.0.0.1", () => {
    console.log("Vault API is running on http://127.0.0.1:4000");
});