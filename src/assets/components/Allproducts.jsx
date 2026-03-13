import React, { useEffect, useState } from "react";
import "../cssComponents/Allproduct.css"
import axios from "axios";
function AllProducts() {

  const [getdata, setdata] = useState([]);

  function handlechnage() {
    axios.get("https://69ad35d1b50a169ec87ee5ed.mockapi.io/clothes")

      .then((res) => {

        setdata(res.data);
      })
  }
  useEffect(() => {
    handlechnage();
  }, []);

  function handledelete(id) {
    let confirm = window.confirm("Are you sure you want to delete this product?");

    if (!confirm) {
      return;
    }

    axios.delete("https://69ad35d1b50a169ec87ee5ed.mockapi.io/clothes/" + id)
      .then((res) => {
        console.log(res.data);
  
        handlechnage();
      }).catch((err) => {
        console.log(err);
      })

  }


  return (
    <div className="admin-main">

      <div className="admin-navbar">
        <h3>Product List</h3>
      </div>

      <div className="admin-table-section">

        <table className="admin-table text-center">

          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              getdata.map((item, i) => {
                console.log("item:", item);
                return (

                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.brand}</td>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        height="50"
                        width="50"
                      />
                    </td>
                    <td>
                      <button className="admin-btn me-5">Edit</button>
                      <button onClick={() => handledelete(item.id)} className="admin-btn">Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AllProducts;