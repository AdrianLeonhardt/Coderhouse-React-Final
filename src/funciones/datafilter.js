import data from '../datos/data.json';

    const datafilter = (id) => {
        return new Promise ((resolve,reject)=>{
            const item = data.find((producto) => producto.id === id) 

            if (item) {
                resolve(item)
            } else {
                reject({
                    error: "No se encontro el producto"
                })
            }
        })
    }


export default datafilter;