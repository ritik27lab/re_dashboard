import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./componentStyles.css";

export default function NewProductModal({ isOpenProduct, setIsOpenProduct }) {
    let subtitle;

    function afterOpenModal() {
        // subtitle.style.color = "#f00";
    }

    function closeModal() {
        setIsOpenProduct(false);
    }

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };
    return (
        <div>
            <Modal
                isOpen={isOpenProduct}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div></div>
                <button onClick={closeModal}>Close</button>
                {/* <div>I am a modal</div>
        <form>
          <input />
          <button>Tab navigation</button>
          <button>Stays</button>
          <button>Inside</button>
          <button>The modal</button>
        </form> */}





<form>

  <div class="form-row">
    <label for="description">Description</label>
    <input
      id="description"
      name="description"
      type="text" 
    />
  </div>

  <div class="form-row">
    <label for="price">Price</label>
    <div class="input-with-currency">
      <span class="currency-symbol">$</span>
      <input
        id="price"
        name="price"
        type="text"
        placeholder="0.00"
        pattern="\d+(\.\d{2})?"
        required
      />
    </div>
  </div>

  <div class="form-row">
    <label for="free">Free</label>
    <div class="checkbox-container">
      <input
        id="agreeTerms"
        name="agreeTerms"
        type="checkbox"
      />
      <label for="agreeTerms"></label>
    </div>
  </div>
  <div class="form-row">
    <label for="agreeTerms">Discounted</label>
    <div class="checkbox-container">
      <input
        id="agreeTerms"
        name="agreeTerms"
        type="checkbox"
      />
      <label for="agreeTerms"></label>
    </div>
  </div>
  <div class="form-row">
    <label for="agreeTerms">Suptract Quantity</label>
    <div class="checkbox-container">
      <input
        id="agreeTerms"
        name="agreeTerms"
        type="checkbox"
      />
      <label for="agreeTerms"></label>
    </div>
  </div>
  <div class="form-row">
    <label for="agreeTerms">Require Shipping</label>
    <div class="checkbox-container">
      <input
        id="agreeTerms"
        name="agreeTerms"
        type="checkbox"
      />
      <label for="agreeTerms"></label>
    </div>
  </div>
  <div class="form-row">
    <label for="agreeTerms">Taxed</label>
    <div class="checkbox-container">
      <input
        id="agreeTerms"
        name="agreeTerms"
        type="checkbox"
      />
      <label for="agreeTerms"></label>
    </div>
  </div>
  <div class="form-row">
    <label for="agreeTerms">Feature</label>
    <div class="checkbox-container">
      <input
        id="agreeTerms"
        name="agreeTerms"
        type="checkbox"
      />
      <label for="agreeTerms"></label>
    </div>
  </div>
  <div class="form-row">
    <label for="agreeTerms">Active</label>
    <div class="checkbox-container">
      <input
        id="agreeTerms"
        name="agreeTerms"
        type="checkbox"
      />
      <label for="agreeTerms"></label>
    </div>
  </div>
  

  <div class="form-row">
    <button type="submit">Submit</button>
  </div>
</form>


               
            </Modal>
        </div>
    );
}
