from fastapi import FastAPI
from pydantic import BaseModel

app=FastAPI()

class FormSchema(BaseModel):
    ALB:float
    ALP:float
    ALT:float
    AST:float
    BIL:float
    CHE:float
    CHOL:float
    CREA:float
    GGT:float
    PROT:float

@app.get("/")
def hello():
    return {"message":"This is a Hepatitis C Prediction App"}

