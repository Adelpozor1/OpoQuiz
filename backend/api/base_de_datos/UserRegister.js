import express from "express";
import db from "../../db.js"

const router = express.Router();

router.post("/UserRegister", async (req, res) => {

    try{
        const {nombre, email, password } = req.body;

        if (!email || !password) {
            
        }
    }



}


