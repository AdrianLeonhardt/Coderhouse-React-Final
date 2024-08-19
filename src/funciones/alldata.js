import data from '../datos/data.json';

    const alldata = () => {

        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(data);
            },800)
                
        })
    }

export default alldata;