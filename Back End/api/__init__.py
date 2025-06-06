from fastapi import APIRouter
from api.clima import clima_route

api_router = APIRouter()
api_router.include_router(clima_route, prefix="/clima", tags=["Clima"])