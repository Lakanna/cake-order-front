import { StepsList } from '../../helpers/constants.js';
import css from './OrderStepsWrapper.module.css';

export const OrderStepsWrapper = ({ currentStep, order, updateOrder }) => {
  const currentStepData = StepsList.find((step) => step.step === currentStep);

  if (!currentStepData) return null;

  const CurrentStepComponent = currentStepData.component;

  return (
    <div>
      <h2 className={css.stepTitle}>
        {currentStepData.step}. {currentStepData.label}
      </h2>
      <CurrentStepComponent order={order} updateOrder={updateOrder} />
    </div>
  );
};
