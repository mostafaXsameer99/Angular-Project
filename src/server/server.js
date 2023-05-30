const express = require("express")
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.post('/enroll',function(req,res){
    //console.log(req.body)
    //calling mongo
    res.status(200).send({"data":"Received Successfully"})
})


//************Not Found****************//
app.use((req, res, next) => {
    res.status(404).json({ message: "not found" });
});

//************Error MW*****************//
app.use((err, req, res) => {
    res.status(500).json({ message: err });
});
