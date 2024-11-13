import express, { json } from "express";
import cors from "cors";
import pool from "./db.js"; 

const app = express();
app.use(cors());
app.use(json());

app.post("/write_text", (req,res)=>{
    
})

app.listen(6000, () => {
  console.log(`Server started on port http://localhost:6000`);
});