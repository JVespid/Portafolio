import React, {useEffect,useState} from "react";
import axios from "axios";

export default function SkillsComponent() {
  let key =0;
  const [data, setData] = useState([]);

  const request = async () => {
    const res = await axios.get("/api/skills/data");

    console.log(JSON.parse(res.data));
    setData(JSON.parse(res.data));
  };

  useEffect(() => {
    console.log('first')
    request();
  
  }, [])
  

  return (
    <>
      <div>SkillsComponent</div>

      <input type="button" value="dale" onClick={request} />

      <div className="pruebas">
        {data
          ? data.map(item => (
              <div key={key++}>
                <p>
                  {item.skill} -- {item.description}
                </p>
              </div>
            ))
          : null}
      </div>
    </>
  );
}
