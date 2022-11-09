
import axios from "axios";


export default async function data(req, res) {
  
  switch (req.method) {
    case `GET`:
      res.status(200).json(await get(req.query));
      break;
    default:
      res.status(200).json({ data: `no hay datos que mostrar` })
      break;
  }

}

// función que se encarga de traer los datos de contacto desde la api en github para su posterior uso
const get = async ( {range, type} ) => {

  //si hay alguna acción extra aquí se ejecutaría otro tipo de código
  if (range !== undefined) {
    //obtiene los datos de la api de github de las skills
    const res = await axios.get(`https://jvespid.github.io/apis/portafolio/${type}.json`);

    if ((res.data.length) > parseInt(range)) {
      //retorna los datos obtenidos de la api
      return JSON.stringify(((res.data).slice(res.data.length - parseInt(range), res.data.length)));
    }

    return JSON.stringify(res.data);
  }

  //obtiene los datos de la api de github de los contactos
  const res = await axios.get(`https://jvespid.github.io/apis/portafolio/${type}.json`);

  //retorna los datos obtenidos de la api
  return JSON.stringify(res.data);
}
