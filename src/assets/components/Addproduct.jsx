import React from "react";
import "../cssComponents/Addproduct.css"
function AddProduct() {
  return (
    <div className="admin-main">

      <div className="admin-navbar">
        <h3>ADMIN / ADD PRODUCT</h3>
      </div>

      <div className="product-form-container">

        <form className="product-form-grid">

          <div className="form-group">
            <label>Title</label>
            <input type="text" placeholder="Product title" />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input type="text" placeholder="Category" />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input type="number" placeholder="Price" />
          </div>

          <div className="form-group">
            <label>MRP</label>
            <input type="number" placeholder="MRP" />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input type="text" placeholder="Image link" />
          </div>

          <div className="form-group">
            <label>Upload Image</label>
            <input type="file" />
          </div>

          <div className="form-group">
            <label>Brand</label>
            <input type="text" placeholder="Brand" />
          </div>

          <div className="form-group">
            <label>Color</label>
            <input type="text" placeholder="Color" />
          </div>

          <div className="form-group">
            <label>Size</label>
            <input type="text" placeholder="Size" />
          </div>

          <div className="form-group full-width">
            <label>Description</label>
            <textarea placeholder="Product description"></textarea>
          </div>

          

        </form>

          <div className="container-flude text-center mt-3">
            
            <button className="submit-btn text-center">
              Submit
            </button>
          </div>
      </div>

    </div>
  );
}

export default AddProduct;