export const RADIO_DEMO_CODE = `import { useState } from 'react';
import { Label, Radio } from '@components/atoms';

export const RadioDemo = () => {
  const [selectedValue, setSelectedValue] = useState('paypal');

  return (
    <div className="relative flex w-full flex-col gap-2.5">
      <Label>
        <Radio
          name="radio"
          value="card"
          label="Credit card"
          checked={selectedValue === 'card'}
          onChange={() => setSelectedValue('card')}
        />
      </Label>

      <Label>
        <Radio
          name="radio"
          value="paypal"
          label="PayPal"
          checked={selectedValue === 'paypal'}
          onChange={() => setSelectedValue('paypal')}
        />
      </Label>

      <Label>
        <Radio name="radio" value="apple-pay" label="Apple Pay" disabled />
      </Label>
    </div>
  );
};`;
