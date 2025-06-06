from fastapi import APIRouter, HTTPException, Request # type: ignore
import service.clima as service

clima_route = APIRouter()


@clima_route.post("/sensor")
async def sensor_receiver(request: Request):
    payload = await request.json()
    distancia = payload.get("distancia")

    if distancia is None:
        return {"error": "Distância não enviada"}

    result = service.process_sensor_data(distancia)
    return result
    
    
@clima_route.get("/busca_clima_cidade")
def cptec_por_cidade(cidade: str):
    """Retorna dados do clima por cidade."""
    print('api')
    try:
        response = service.obter_clima_cptec_por_cidade(cidade)
        return response
    except Exception as e:
        print(f"Erro: {e}")
        return {"erro": str(e)}

@clima_route.get("/busca_clima_inmet")
def cptec_por_cod(cod: str):
    """Retorna dados do clima pelo código INMET."""
    print('api')
    try:
        response = service.obter_clima_inmet(cod)
        return response
    except Exception as e:
        print(f"Erro: {e}")
        return {"erro": str(e)}