import { DocumentTitle } from '../components/DocumentTitle';
import { ProgressiveBar } from '../components/ProgressiveBar/ProgressiveBar.jsx';
import { useState } from 'react';
import { StepsList } from '../helpers/constants.js';
import { Button } from '../components/Button/Button.jsx';
import { OrderStepsWrapper } from '../components/OrderStepsWrapper/OrderStepsWrapper.jsx';
import { StartOrder } from '../components/StartOrder/StartOrder.jsx';

const OrderPage = () => {
  // const steps = [
  //   "Collection Date",
  //   "Cake Size",
  //   "Sponge",
  //   "Icing & Filling",
  //   "Design",
  //   "Review Order",
  // ];

  const [currentStep, setcurrentStep] = useState(0);

  const [order, setOrder] = useState({
    collectionDate: new Date(),
    collectionTime: '',
    size: '',
    sponge: 'Plain',
    icing: '',
    jam: '',
    photo: '',
    descriptionCharacter: '',
    writingOnTop: '',
    colourOfWriting: '',
    customWritingColour: '',
    sides: '',
    decorations: [],
    customerPhone: '',
    customerFullName: '',
    price: 0,
  });

  console.log('order in order page', order);

  const updateOrder = (field, value) => {
    setOrder((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const toggleOrderArray = (field, value) => {
    setOrder((prev) => {
      const currentArray = prev[field] || [];

      const updatedArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];

      return {
        ...prev,
        [field]: updatedArray,
      };
    });
  };

  const nextStep = () => {
    if (currentStep <= StepsList.length - 1) {
      setcurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setcurrentStep(currentStep - 1);
    }
  };

  const setStep = (step) => {
    setcurrentStep(step);
  };

  return (
    <>
      <DocumentTitle>Order</DocumentTitle>

      {currentStep > 0 && (
        <ProgressiveBar currentStep={currentStep} onClick={setStep} />
      )}
      {currentStep > 1 && (
        <Button onClick={previousStep} textPosition="center">
          Back
        </Button>
      )}

      <OrderStepsWrapper
        currentStep={currentStep}
        order={order}
        updateOrder={updateOrder}
        toggleOrderArray={toggleOrderArray}
      />

      {currentStep === 0 && <StartOrder />}
      <Button onClick={nextStep} type="button" textPosition="center">
        Next
      </Button>
    </>
  );
};

export default OrderPage;
