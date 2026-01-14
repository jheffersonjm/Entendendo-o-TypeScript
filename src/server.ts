import express from "express";
import path from "path";

const app = express(); 
const PORT= 3000; 

app.use(express.static(path.join(__dirname, "/public")));

app.get("/api/mansagem", (req, res) => { 
    res.json({msg:"ola do servidor do TypeScrips"});
}); 

app.listen(PORT, () => { 
console.log('servidor rodando em http//localhost:$(PORT)');
});