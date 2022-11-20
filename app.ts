import express from "express";
import path from "path";

const app = express()

var srcPath = path.join(__dirname, 'src');

app.use(express.static(srcPath));

app.listen({port: 3000}, ()=> {
    console.log('server running')
})



