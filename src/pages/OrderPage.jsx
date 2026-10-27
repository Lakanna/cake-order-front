import { DocumentTitle } from '../components/DocumentTitle';
import { ProgressiveBar } from '../components/ProgressiveBar/ProgressiveBar.jsx';
import { useState } from 'react';
import { StepsList } from '../helpers/constants.js';
import { PiCalendarDotsLight } from 'react-icons/pi';
import css from './OrderPage.module.css';
import { Button } from '../components/Button/Button.jsx';
import { OrderStepsWrapper } from '../components/OrderStepsWrapper/OrderStepsWrapper.jsx';

const OrderPage = () => {
  // const steps = [
  //   "Collection Date",
  //   "Cake Size",
  //   "Sponge",
  //   "Icing & Filling",
  //   "Design",
  //   "Review Order",
  // ];

  const [currentStep, setcurrentStep] = useState(0;

  const [order, setOrder] = useState({
    collectionDate: new Date(),
    collectionTime: '',
    size: '',
    sponge: 'Plain',
    icing: '',
    jam: '',
    decorations: [],
    price: 0,
  });

  console.log('order in order page', order);

  function updateOrder(field, value) {
    setOrder((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function nextStep() {
    if (currentStep <= StepsList.length - 1) {
      setcurrentStep(currentStep + 1);
    }
  }

  function previousStep() {
    if (currentStep > 0) {
      setcurrentStep(currentStep - 1);
    }
  }

  return (
    <>
      <DocumentTitle>Order</DocumentTitle>

      {currentStep > 0 && <ProgressiveBar currentStep={currentStep} />}
      {currentStep > 1 && (
        <Button onClick={previousStep} textPosition="center">
          Back
        </Button>
      )}

      <OrderStepsWrapper
        currentStep={currentStep}
        order={order}
        updateOrder={updateOrder}
      />

      {currentStep === 0 && (
        <section>
          <h1 className={css.pageTitle}>Order your cake</h1>
          <p>Let's create something special!</p>
          <p>Follow the steps to customize your cake.</p>
          <div className={css.picture}></div>
          <div className={css.calendarBox}>
            <PiCalendarDotsLight className={css.calendarIcon} />
            <div className={css.text}>
              <p>
                <span className={css.calendarSpan}>
                  Please allow at least 2 calendar days
                </span>{' '}
                for preparation.
              </p>
              <p>
                Earliest collection time: 10:00 AM (from the day after tomorrow)
              </p>
            </div>
          </div>{' '}
        </section>
      )}
      <Button onClick={nextStep} type="button" textPosition="center">
        Next
      </Button>
    </>
  );
};

export default OrderPage;
