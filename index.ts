import OpenAI from 'openai';
import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

const PORT: number = 8000;

const app: Application = express();
app.use(cors());
app.use(express.json());

const onServerStart = () => {
  console.log(`Server running on port ${PORT}`);
}

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

app.post("/completions", async (req: Request, res: Response) => { 

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{"role": "user", "content": "Create a SQL request to " + req.body.message}],
    });
    res.send(chatCompletion.choices[0].message);
  } 

  catch(error) {
    console.error(error);
    res.status(500).send("There is an Internal Server Error")
  }

});

app.listen(PORT, onServerStart);