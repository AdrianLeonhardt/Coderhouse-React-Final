import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/datafirebase";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
    
    useEffect(() => {
        
        const detallesFire = doc(db, "productos", id);

        getDoc(detallesFire)
            .then((resp) => {
                setItem(
                    { ...resp.data(), id: resp.id}
                );
            })

    },[id])
    
    
    return (
    <div className="item-detail-container">
        {item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer