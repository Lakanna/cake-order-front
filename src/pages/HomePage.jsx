import { DocumentTitle } from "../components/DocumentTitle";

import css from "./HomePage.module.css";
import { Button } from "../components/Button/Button.jsx";
import { OrdersList } from "../helpers/constants.js";

import { RiCake3Line } from "react-icons/ri";
import { MdOutlineCake } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <section className={css.mainSection}></section>
      <section className={css.textSection}>
        <h1 className={css.pageTitle}>Life is sweeter with cake!</h1>
        <h3 className={css.pageSubtitle}>
          Order your perfect cake or cupcakes for any occasion. Freshly made,
          just for you!{" "}
        </h3>
      </section>
      <section className={css.btnSection}>
        {OrdersList.map((order) => (
          <Button key={order} onClick={() => navigate("/order")}>
            {order === "Order a Cake" && <MdOutlineCake size="30" />}
            {order === "Order Cupcakes" && <RiCake3Line size="30" />}
            {order}
            {<FaArrowRightLong size="20" />}
          </Button>
        ))}
        {/* <Cake className={css.cakeIcon} /> */}
      </section>

      <GoHeartFill size="20" className={css.heartIcon} />
      <p>Sweet moments</p>

      {/* <p>
        Step {step + 1} of {steps.length}
      </p>

      <h2>{steps[step]}</h2>

      {step === 1 && (
        <select
          value={order.size}
          onChange={(event) => {
            const size = event.target.value;
            updateOrder({
              size,
              shape: size === "8 inch" ? "Round" : "Square",
            });
          }}
        >
          {[
            "8 inch",
            "10 inch",
            "12 inch",
            "14 inch",
            "16 inch",
            "18 inch",
          ].map((size) => (
            <option key={size}>{size}</option>
          ))}
        </select>
      )}

      {step === 2 && (
        <select
          value={order.sponge}
          onChange={(event) => updateOrder({ sponge: event.target.value })}
        >
          <option value="">Choose a sponge</option>
          <option>Plain</option>
          <option>Chocolate</option>
          <option>Red Velvet</option>
          <option>Chocolate Fudge</option>
          <option>Sponge Cake</option>
        </select>
      )} */}
      {/* 
      <div>
        <button onClick={previousStep} disabled={step === 0}>
          Back
        </button>

        <button onClick={nextStep} disabled={step === steps.length - 1}>
          Next
        </button>
      </div> */}

      {/* <pre>{JSON.stringify(order, null, 2)}</pre> */}
    </>
  );
};

export default HomePage;
