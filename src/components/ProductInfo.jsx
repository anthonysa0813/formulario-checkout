import React from "react";
import { ProductContainer } from "../componentsCss/style";
import laptop from "../images/laptop.png";

const ProductInfo = () => {
  return (
    <ProductContainer>
      <div className="productContent">
        <h2>Resumen de la orden</h2>
        <div className="productImage">
          <img src={laptop} alt="" />
        </div>
        <div className="countProduct">
          <div className="nameProduct">
            <p>MacBook Pro 14”</p>
            <p>$52,999.00</p>
          </div>
          <div className="counterProduct">
            <button>
              <i className="minus">-</i>
            </button>
            <span>1</span>
            <button>
              <i className="plus">+</i>
            </button>
          </div>
        </div>
        <div className="resumenPrice">
          <div className="subtotal">
            <p>Sub total</p>
            <p>$52,999.00</p>
          </div>
          <div className="envio">
            <p>Envió</p>
            <p className="text-green">Gratis</p>
          </div>
          <div className="total">
            <strong>Total</strong>
            <p>$52,999.00</p>
          </div>
        </div>
        <div className="descount">
          <p>Tarjeta de regalo / código de descuento</p>
          <div className="descountInputs">
            <input type="text" />
            <button>
              <p>Aplicar</p>
            </button>
          </div>
        </div>
        <div className="systemProduct">
          <h3 className="text-indo">Sistema en chip (procesador)</h3>
          <div className="infoContent">
            <p>
              Chip M1 Pro de Apple con CPU de 8 núcleos, GPU de 14 núcleos y
              Neural Engine de 16 núcleos
            </p>
          </div>
          <div className="infoContent">
            <p>
              Chip M1 Pro de Apple con CPU de 10 núcleos, GPU de 14 núcleos y
              Neural Engine de 16 núcleos
            </p>
            <p>+$5,500.00</p>
          </div>{" "}
          <div className="infoContent">
            <p>
              Chip M1 Pro de Apple con CPU de 10 núcleos, GPU de 16 núcleos y
              Neural Engine de 16 núcleos
            </p>
            <p>+$8,000.00</p>
          </div>
        </div>
        <div className="systemProduct">
          <h3 className="text-indo">Almacenamiento</h3>
          <div className="infoContent">
            <p>Almacenamiento SSD de 512 GB</p>
          </div>
          <div className="infoContent">
            <p>Almacenamiento SSD de 1 TB</p>
            <p>+$5,500.00</p>
          </div>{" "}
        </div>
      </div>
    </ProductContainer>
  );
};

export default ProductInfo;
