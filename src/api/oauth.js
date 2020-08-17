// Traemos el método post de 'axios'
import { post } from 'axios'

// Cogemos los datos de nuestra cuenta de Blizzard
// 🔥 Recuerda que debes usar tus datos a la hora de hacer las llamadas a las APIs
// 🔥 Como dice la documentación, tienes un máximo de llamadas por segundo y por hora a la API.
// 🔥 Estos datos deberían ser privados
const clientId = 'ef24081a2ecc4103b302245a3e0a0c00'
const clientSecret = 'sahsGm4YWP9nSYqwBInTrzDTaE9N111Y'

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  // Creamos un objeto de tipo 'FormData', que es un conjunto de pares clave/valor
  const body = new FormData()

  // Con 'append', le agregamos la clave 'grant_type' y el valor 'client_credentials'
  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    // Nuestros datos de cliente para OAuth: id y secret
    auth: { username: clientId, password: clientSecret }
  }

  return post(API_URL, body, config)
}

export {
  getToken
}
