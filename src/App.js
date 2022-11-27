import React, {useEffect} from "react";
import { collection, getDocs } from 'firebase/firestore';
import db from "./firebase/firebaseConfig";
import "./style.css";

const App = () => {
  useEffect(()=>{
    
      const obtenerDatos = async () => {            
        const datos = await getDocs(collection(db, 'usuarios'));
        // const datosList = datos.docs.map(doc => doc.data() );
        // return datosList;    
        datos.forEach((documento) => {
            console.log(documento.data());
        });       
    
      }
      obtenerDatos();

  },[]);

  return (
    <div>
      <h1>Firebase 9!</h1>
     
    </div>
  );
}

export default App


