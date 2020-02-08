import { currencyMask, phoneMask, zipMask } from './masks';
import { inputProps } from '../components';

export type stepProps = {
  title: string;
  fields: Array<inputProps>;
};
export const steps: Array<stepProps> = [
  {
    title: 'Contact information',
    fields: [
      {
        label: 'Name*',
        placeholder: 'Name',
        name: 'name',
      },
      {
        label: 'Business Name*',
        placeholder: 'Business Name*',
        name: 'businessName',
      },
      {
        label: 'Email*',
        placeholder: 'Email',
        name: 'email',
        type: 'email',
      },
      {
        label: 'Mobile No.*',
        placeholder: 'Mobile No.',
        name: 'phone',
        tag: 'masked',
        mask: phoneMask,
        inputMode: 'tel',
      },
      {
        label: 'How did you hear about us?*',
        name: 'fromSource',
        tag: 'select',
        options: [
          {
            disabled: true,
            selected: true,
            hidden: true,
            label: 'How did you hear about us?',
          },
          {
            label: 'Google',
          },
          {
            label: 'By a friend',
          },
        ],
      },
    ],
  },
  {
    title: 'Business Needs',
    fields: [
      {
        label: 'Requested Amount*',
        placeholder: 'Requested Amount',
        tag: 'masked',
        inputMode: 'numeric',
        name: 'amount',
        mask: currencyMask(),
      },
      {
        label: 'Monthly Revenue*',
        placeholder: 'Monthly Revenue',
        tag: 'masked',
        inputMode: 'numeric',
        name: 'revenue',
        mask: currencyMask(),
      },
      {
        label: 'Purpose*',
        name: 'purpose',
        tag: 'select',
        options: [
          {
            disabled: true,
            selected: true,
            hidden: true,
            label: 'Purpose*',
          },
          {
            label: 'Google',
          },
          {
            label: 'By a friend',
          },
        ],
      },
      {
        label: 'Time in business*',
        placeholder: 'Time in business',
        name: 'time',
      },
      {
        label: 'Category*',
        name: 'category',
        tag: 'select',
        options: [
          {
            disabled: true,
            selected: true,
            hidden: true,
            label: 'Category',
          },
          {
            label: 'Google',
          },
          {
            label: 'By a friend',
          },
        ],
      },
    ],
  },
  {
    title: 'Business Information',
    fields: [
      {
        label: 'Address*',
        placeholder: 'Address',
        name: 'address',
      },
      {
        label: 'State*',
        name: 'state',
        tag: 'select',
        options: [
          {
            disabled: true,
            selected: true,
            hidden: true,
            label: 'State',
          },
          {
            label: 'Google',
          },
          {
            label: 'By a friend',
          },
        ],
      },
      {
        label: 'City*',
        placeholder: 'City',
        name: 'city',
      },
      {
        label: 'ZIP code*',
        placeholder: 'ZIP code',
        tag: 'masked',
        inputMode: 'numeric',
        name: 'zip',
        mask: zipMask,
      },
    ],
  },
];
