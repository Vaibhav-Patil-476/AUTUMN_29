import React, { useEffect, useState } from "react";
import "../cssComponents/Addproduct.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function AddProduct() {

  let navigate=useNavigate();

  let { id } = useParams()
  // const [id, setId] = useState(undefined);

  const [product, setproduct] = useState({
    productname: "",
    category: "",
    price: "",
    stock: "",
    image:""
  })
 useEffect(()=>{
   if (id) {
     // setId(id);
     axios.get("https://69ad35d1b50a169ec87ee5ed.mockapi.io/clothes/" + id)
       .then((e) => {
         console.log(e)
         setproduct({
           productname: e.data.productname,
           category: e.data.category,
           price: e.data.price,
           stock: e.data.stock,
           image:e.data.image
         })
       })
   }

 },[])

    function handlechange(e) {
    setproduct({ ...product, [e.target.id]: e.target.value });
  };


  function handleupdate(e) {
    e.preventDefault();
    if (id == undefined) {
      axios.post("https://69ad35d1b50a169ec87ee5ed.mockapi.io/clothes", product)
        .then((rev) => {
          console.log(rev.product);
          alert("Data Save....");
        })

      setproduct({
        productname: "",
        category: "",
        price: "",
        stock: "",
        image:""
      })
    }else{
      axios.put("https://69ad35d1b50a169ec87ee5ed.mockapi.io/clothes/"+id,product)
      .then((e)=>{
        console.log(e.product);
        navigate("/admin/allproduct")
        alert("Product Update Successfully....");
       
      }).catch((e)=>{
        console.log(e);
      });
        setproduct({
        productname: "",
        category: "",
        price: "",
        stock: "",
        image:""
      })
    }
    
    }

    return (
      <div className="admin-main">

        <div className="admin-navbar">
          <h3>ADMIN / ADD PRODUCT</h3>
        </div>

        <div className="product-form-container">

          <form className="product-form-grid" >

            <div className="form-group">
              <label>Product Name</label>
              <input value={product.productname} onChange={handlechange} id="productname" type="text" placeholder="Product name" />
            </div>

            <div className="form-group">
              <label>Category</label>
              <input value={product.category} onChange={handlechange} id="category" type="text" placeholder="Category" />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input value={product.price} onChange={handlechange} id="price" type="number" placeholder="Price" />
            </div>

           
            <div className="form-group">
              <label>Stock</label>
              <input value={product.stock} onChange={handlechange} id="stock" type="number" placeholder="Stock quantity" />
            </div>
             <div className="form-group">
              <label>Upload Image</label>
              <input value={product.image} onChange={handlechange} id="image" type="text" placeholder="Stock quantity" />
            </div>

            
          </form>

          <div className="text-center mt-3">
            <button onClick={handleupdate} type="submit" className="submit-btn">Submit</button>
          </div>

        </div>

      </div>
    );
  }

  export default AddProduct;