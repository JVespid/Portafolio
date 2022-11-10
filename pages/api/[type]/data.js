
import axios from "axios";


export default async function data(req, res) {
  if (req.query.type !== undefined) {
    switch (req.method) {
      case `GET`:
        res.status(200).json(await get(req.query));
        break;
      default:
        res.status(200).json({ data: `no hay datos que mostrar` })
        break;
    }
  } else {
    res.status(200).json({ data: `no hay datos que mostrar` })
  }
}

// función que se encarga de traer los datos desde la api en github
const get = async ({ range, type, page, maxRange }) => {

  //si hay alguna acción extra aquí se ejecutaría otro tipo de código
  const resOriginal = await axios.get(`https://jvespid.github.io/apis/portafolio/${type}.json`);
  if (range !== undefined) {
    const ranges = parseInt(range);
    //obtiene los datos de la api de github según el tipo
    
    if ((resOriginal.data.length) > ranges) {
      //retorna los datos obtenidos de la api
      return JSON.stringify((resOriginal.data).slice(resOriginal.data.length - ranges, resOriginal.data.length));
    }
    //retorna los datos obtenidos de la api
    return JSON.stringify(resOriginal.data);
  }
  
  
  if (page !== undefined && maxRange !== undefined) {
    const res = resOriginal;
    const pages = parseInt(page);
    const maxRanges = parseInt(maxRange);

    const numberPages = Math.ceil(res.data.length / maxRanges);

    if (numberPages > 1) {
      let initial = 0, finaly = maxRanges;
      for (let i = 1; i < pages; i++) {
        //i == 1? initial += (maxRanges+1): initial += maxRanges;
        initial += maxRanges;
        finaly += (maxRanges);

      }

      let rest = ((res.data).slice(initial, finaly));
      rest.push({ numberPages: numberPages});
      console.log(rest[rest.length - 1]);

      return JSON.stringify(rest);
    }
  } else {
      let rest = ((res.data).slice(0, maxRanges));
      rest.push({ numberPages: numberPages});
      return JSON.stringify(rest);
  }
  //retorna los datos obtenidos de la api
  return JSON.stringify(resOriginal.data);

}
