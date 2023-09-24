import { db } from '../firebase'
import { Link, useNavigate } from 'react-router-dom'
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './Shop.css'
function Shop() {
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
    <div className="filter">
      <div className="row">
        <div className="col-2 d-none d-md-block text-nowrap">
          <div className="d-flex">
            <p>Home</p>
            <img className="px-2 mb-3" src="/img/Vector1.svg" alt="" />
            <p>All Products</p>
          </div>
          <div className="filter-wrap">
            <p className="browsby">Browse by</p>
            <div className="filter-box">
              <a href=""><p className="filter-list">All products</p></a>
              <a href=""><p className="filter-list">Freedom Collection</p></a>
              <a href=""><p className="filter-list">Prickly Collection</p></a>
              <a href=""><p className="filter-list">Tropical Collection</p></a>
            </div>
            <div>
              <p className="browsby color">Filter by</p>
              <div className="filter-box">
                <a href=""><p className="filter-list">Price</p></a>
                {/* Add the slider input here if needed */}
                <div className="d-flex size">
                  <p className="color">Color</p>
                  <p className="color" style={{ paddingLeft: '70%' }}>+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <p className="all">All Products</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">


                    {images && images.map((items)=>(
                      
                      <div className="col-6 col-md-4 mb-5"key={items.id}>
                      <div>
                        <Link style={{textDecoration:'none'}} to={`/item/${items.id}`}>
                        <img className="w-100" src={items.img} alt="" />
                        <p className="pname">{items.name}</p>
                        <div className="separate"></div>
                        <p className="price">{items.price}</p>
                      </Link>
                      </div>
                    </div>
                        

                    ))}
            
                
                
                <div className="col-6 col-md-4 mb-5">
                  <div>
                    <img className="w-100" src="/img/1.png" alt="" />
                    <p className="pname">I'M A PRODUCT</p>
                    <div className="separate"></div>
                    <p className="price">₹25.00</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-5">
                  <div>
                    <img className="w-100" src="/img/2.png" alt="" />
                    <p className="pname">I'M A PRODUCT</p>
                    <div className="separate"></div>
                    <p className="price">₹25.00</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-5">
                  <div>
                    <img className="w-100" src="/img/3.png" alt="" />
                    <p className="pname">I'M A PRODUCT</p>
                    <div className="separate"></div>
                    <p className="price">₹25.00</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-5">
                  <div>
                    <img className="w-100" src="/img/4.png" alt="" />
                    <p className="pname">I'M A PRODUCT</p>
                    <div className="separate"></div>
                    <p className="price">₹25.00</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-5">
                  <div>
                    <img className="w-100" src="/img/5.png" alt="" />
                    <p className="pname">I'M A PRODUCT</p>
                    <div className="separate"></div>
                    <p className="price">₹25.00</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-5">
                  <div>
                    <img className="w-100" src="/img/6.png" alt="" />
                    <p className="pname">I'M A PRODUCT</p>
                    <div className="separate"></div>
                    <p className="price">₹25.00</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-5">
                  <div>
                    <img className="w-100" src="/img/7.png" alt="" />
                    <p className="pname">I'M A PRODUCT</p>
                    <div className="separate"></div>
                    <p className="price">₹25.00</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-5">
                  <div>
                    <img className="w-100" src="/img/8.png" alt="" />
                    <p className="pname">I'M A PRODUCT</p>
                    <div className="separate"></div>
                    <p className="price">₹25.00</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-5">
                  <div>
                    <img className="w-100" src="/img/9.png" alt="" />
                    <p className="pname">I'M A PRODUCT</p>
                    <div className="separate"></div>
                    <p className="price">₹25.00</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      
    </div>
  )
}

export default Shop
