const express = require('express');
const router = express.Router();

const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY // This is also the default, can be omitted
});


router.post(`/help`, async (req,res)=>{
    const {title} = req.body;
    console.log('teste: ', title)

    try{
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: "Write a text about the title: "+title,
                },
            ],
        });
        res.json({msg: completion.choices[0].message.content, type: 'success'});

    }catch(error){
        return res.status(500).json({ type: 'error', msg: 'Error in consulting OpenAI', details: error });
    }
})

module.exports = router;