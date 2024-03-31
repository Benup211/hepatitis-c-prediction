from fastapi import FastAPI,status
from fastapi.responses import Response
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel,Field
import joblib
import os

app = FastAPI()
origins = [
    "http://localhost:5173",
    "http://192.168.101.7:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class FormSchema(BaseModel):
    Age:int
    Sex: int = Field(..., ge=0, le=1)
    ALB: float
    ALP: float
    ALT: float
    AST: float
    BIL: float
    CHE: float
    CHOL: float
    CREA: float
    GGT: float
    PROT: float

static_folder = os.path.join(os.path.dirname(__file__), "static")
app.mount("/static", StaticFiles(directory=static_folder), name="static")

@app.get("/")
def hello():
    return {"message": "This is a Hepatitis C Prediction App"}
finding={
    0:"Blood Donor",
    1:"Suspected Blood Donor",
    2:"Hepatitis,Fibrosis,Cirrhosis"
}
@app.post("/")
def predict(form: FormSchema,response:Response):
    try:
        model_path = os.path.join(static_folder, "hepatitis_model.pkl")
        with open(model_path, 'rb') as f:
            model = joblib.load(f)
        value = [form.Age,form.Sex,form.ALB,form.ALP,form.ALT,form.AST,form.BIL,form.CHE,form.CHOL,form.CREA,form.GGT,form.PROT]
        y_pre = model.predict([value])
        output = finding[y_pre[0]]
        response.status_code=status.HTTP_200_OK
        return {"value": form, "output": output}
    except Exception as E:
        response.status_code=status.HTTP_400_BAD_REQUEST
        return {"error":E}