import express from "express";
import pool from "./db.js";

const router = express.Router();


router.get("/:id", async (req, res) => {

  const { id } = req.params;

  try {

    const result = await pool.query(
      "SELECT id, phone FROM users WHERE id = $1",
      [id]
    );


    if(result.rows.length === 0){

      return res.status(404).json({
        message:"Usuario no encontrado"
      });

    }


    res.json(result.rows[0]);


  } catch(error){

    console.log(error);

    res.status(500).json({
      message:"Error del servidor"
    });

  }

});


export default router;