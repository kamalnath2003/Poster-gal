import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { Link, useNavigate } from 'react-router-dom'
import { collection, doc, onSnapshot } from 'firebase/firestore';

function Shoptest() {
    const [images, setimages] = useState([])
    const nav = useNavigate();
    useEffect(()=>{
        const unsub = onSnapshot(collection(db,'imageInfo'), (snapshot)=>{
            let list = [];
            snapshot.docs.forEach((doc)=>{
                list.push({id:doc.id,...doc.data()})
            });
            setimages(list);
            console.log(images)
           
            
        },(err)=> console.log(err));
        
        return ()=>{
            unsub();

        };

    },[])


    

  return (
    <div>
        

        <div className="container">
            <div className="row">
                <div className="col">
                    <h1></h1>
                </div>
                <div className="col">
                    {images && images.map((items)=>(
                        <Link to = {`/item/${items.id}`}>
                        <div className="row">
                            <div className="col" key={items.id}>
                                <img src={items.img} alt="" />
                                <h1>{items.name}</h1>
                                <h1>{items.id}</h1>
                                <h1>{items.price}</h1>
                                 </div>
                        </div>
                           </Link>
                    ))}
                </div>
            </div>
        </div>
        
 
    </div>
  )
}

export default Shoptest
