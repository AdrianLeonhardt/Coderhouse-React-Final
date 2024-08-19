import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../../firebase/datafirebase.js"
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";

function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams();
 
    useEffect(()=> {
        
        const productosFire = collection (db, "productos");

        let consulta;
        if (categoryId) {
            consulta = query(productosFire, where ("categoria", "==", categoryId));
        } else {
            consulta = productosFire;
        }

        getDocs(consulta)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id };
                    })
                );
            })
            //Si hay algun error cuando la promesa falla, la muestra en consola
            .catch((error) => {
                console.error("Error fetching documents: ", error);
            });
        
    }, [categoryId]);
  
    return (
    <div>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer