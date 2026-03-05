from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(
    api_key="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",
    base_url="https://openrouter.ai/api/v1"
)

class Question(BaseModel):
    question: str

@app.post("/ask-ai")
def ask_ai(data: Question):

    completion = client.chat.completions.create(
        model="meta-llama/llama-3-8b-instruct",
        messages=[{"role": "user", "content": data.question}]
    )

    return {"answer": completion.choices[0].message.content}
@app.get("/")
def home():
    return {"message": "AI Campus Assistant backend running"}