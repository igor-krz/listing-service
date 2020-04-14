const express=require("express");
const app=express();
const PORT=process.env.PORT || 8000;
const fs=require('fs');
const bodyParser=require('body-parser');
let path = require('path');

app.use(express.urlencoded({
    extended: false
}));
app.use(express.static("public"));

fs.writeFile('database.json', '{"submissions":[]}', (err) => {
    if (err) {
        console.log('error saving to file');
        return
    };
    console.log('Default file setup complete');
});

app.get('/',(req,res)=>{
    app.render('index.html');
});
app.get('/route', (req,res)=>{
    res.sendFile(path.join(__dirname + '/public/route.html'));
});

app.post('/route', (req,res)=>{
    let nameCont=req.body.name;
    let itemCont=req.body.item;
    let descriptionCont=req.body.description;
    console.log(nameCont);
    console.log(itemCont);
    console.log(descriptionCont);
    together=nameCont+' '+itemCont+' '+descriptionCont+' ';
    res.send(together);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});


