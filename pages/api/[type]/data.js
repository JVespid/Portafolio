
import axios from "axios";


export default async function data(req, res) {
  let data = undefined;

  if (req.query.extra !== undefined) {
    data = extra(req.query.extra);
  }

  switch (req.query.type) {
    case `skills`:
      res.status(200).json(await skills(data));
      break;
    case `hobbies`:
      res.status(200).json(await hobbies(data));
      break;
    case `formacionAcademica`:
      res.status(200).json(await formacionAcademica(data));
      break;
    case `proyectos`:
      res.status(200).json(await proyectos(data));
      break;
    case `contacto`:
      res.status(200).json(await contacto(data));
      break;
    default:
      res.status(200).json({ data: `no hay datos que mostrar` })
      break;
  }

}

// función que se encarga de traer los datos de las skills desde la api en github para su posterior uso
const skills = async (data_) => {

  const exec = require('child_process').exec;

  exec("git add .", (err, stdout)=>{
    if (err) {
      console.log(err);
      return err;
    }
    console.log("git add . ejecutado");
    console.log(stdout);

  });

  //si hay alguna acción extra aquí se ejecutaría otro tipo de código
  if (data_ !== undefined) {
    return data_;
  }
  //obtiene los datos de la api de github de las skills
  const res = await axios.get("https://jvespid.github.io/apis/portafolio/skills.json");

  //retorna los datos obtenidos de la api
  return JSON.stringify(res.data);


}

// función que se encarga de traer los datos de los hobbies desde la api en github para su posterior uso
const hobbies = async (data_) => {

  //si hay alguna acción extra aquí se ejecutaría otro tipo de código
  if (data_ !== undefined) {
    return data_;
  }

  //obtiene los datos de la api de github de los hobbies
  const res = await axios.get("https://jvespid.github.io/apis/portafolio/hobbies.json");

  //retorna los datos obtenidos de la api
  return JSON.stringify(res.data);

}

// función que se encarga de traer los datos de las formaciones Académicas desde la api en github para su posterior uso
const formacionAcademica = async (data_) => {

  //si hay alguna acción extra aquí se ejecutaría otro tipo de código
  if (data_ !== undefined) {
    return data_;
  }

  //obtiene los datos de la api de github de las formaciones académicas
  const res = await axios.get("https://jvespid.github.io/apis/portafolio/FormacionAcademica.json");

  //retorna los datos obtenidos de la api
  return JSON.stringify(res.data);
}

// función que se encarga de traer los datos de los proyectos desde la api en github para su posterior uso
const proyectos = async (data_) => {

  //si hay alguna acción extra aquí se ejecutaría otro tipo de código
  if (data_ !== undefined) {
    return data_;
  }

  //obtiene los datos de la api de github de los proyectos
  const res = await axios.get("https://jvespid.github.io/apis/portafolio/proyectos.json");

  //retorna los datos obtenidos de la api
  return JSON.stringify(res.data);
}

// función que se encarga de traer los datos de contacto desde la api en github para su posterior uso
const contacto = async (data_) => {

  //si hay alguna acción extra aquí se ejecutaría otro tipo de código
  if (data_ !== undefined) {
    return data_;
  }

  //obtiene los datos de la api de github de los contactos
  const res = await axios.get("https://jvespid.github.io/apis/portafolio/Contacto.json");

  //retorna los datos obtenidos de la api
  return JSON.stringify(res.data);
}


// función que manipula los datos dependiendo le lo que se necesite(es una función para posibles futuras actualizaciones)
const extra = async (data_) => {
  console.log(data_);
  return data_;
}