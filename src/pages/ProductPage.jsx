import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { FaArrowRight } from "react-icons/fa";

function ProductPage() {
  return (
    <>
      <NavBar />
      <ProductHero />
      <div className="flex flex-row gap-3">
        <Product1 />
        <Product2 />
        <Product3 />
        <Product4 />
      </div>

      <Footer />
    </>
  );
}

export default ProductPage;

function ProductHero() {
  return (
    <div
      className="hero h-[450px]"
      style={{
        backgroundImage: "url(src/assets/ProductPage.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-5xl mb-2">
            Our Coffee Products
          </h1>
          <div>
            <p className="mx-auto max-w-[700px] text-xl md:text-2xl mb-2">
              Premium Arabica and Robusta beans from Indonesia's finest growing
              regions
            </p>
          </div>
          <button className="btn btn-primary bg-amber-700 rounded-xl mt-2">
            Request Samples <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

function Product1() {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="src\assets\Americano.jpg"
            alt="Americano"
            className="rounded-xl w-70 h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Americano</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

function Product2() {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="src\assets\Espresso.jpg"
            alt="Espresso"
            className="rounded-xl w-70 h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Espresso</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

function Product3() {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="src\assets\Latte.jpg"
            alt="Latte"
            className="rounded-xl w-70 h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Latte</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

function Product4() {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="src\assets\LongBlack.jpg"
            alt="Long Black"
            className="rounded-xl w-70 h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Long Black</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
