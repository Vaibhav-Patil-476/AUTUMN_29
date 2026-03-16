import React, { useEffect, useState } from "react";
import "../cssComponents/Addproduct.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function AddProduct() {

  const [id, setId] = useState(undefined);

  const [product, setproduct] = useState({
    productname: "",
    catogory: "",
    price: "",
    stock: ""
  })
 
    if (id) {
      setId(id);
      axios.get("https://69ad35d1b50a169ec87ee5ed.mockapi.io/clothes/" + id)
        .then((e) => {
          setproduct({
            productname: e.product.productname,
            catogory: e.product.catogory,
            price: e.product.price,
            stock: e.product.stock
          })
        })
    }




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
        catogory: "",
        price: "",
        stock: ""
      })
    }else{
      axios.put("https://69ad35d1b50a169ec87ee5ed.mockapi.io/clothes/"+id,product)
      .then((e)=>{
        console.log(e.product);
        alert("Product Update Successfully....");
        setId(undefined);
      }).catch((e)=>{
        console.log(e);
      });
        setproduct({
        productname: "",
        catogory: "",
        price: "",
        stock: ""
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
              <input value={product.catogory} onChange={handlechange} id="catogory" type="text" placeholder="Category" />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input value={product.price} onChange={handlechange} id="price" type="number" placeholder="Price" />
            </div>

            <div className="form-group">
              <label>Stock</label>
              <input value={product.stock} onChange={handlechange} id="stock" type="number" placeholder="Stock quantity" />
            </div>

            <div className="form-group  ">
              <label>Upload Image</label>
              <input type="file" />
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