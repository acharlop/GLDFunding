import { currencyMask, phoneMask, zipMask } from './';
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
        placeholder: 'Eg. John Smith ',
        name: 'name',
      },
      {
        label: 'Business Name*',
        placeholder: 'Eg. GLD Funding',
        name: 'businessName',
      },
      {
        label: 'Email*',
        placeholder: 'Eg. joahsmith@gmail.com',
        name: 'email',
        type: 'email',
      },
      {
        label: 'Mobile No.*',
        placeholder: '(123) 456-7890',
        name: 'phone',
        tag: 'masked',
        mask: phoneMask,
        inputMode: 'tel',
      },
      {
        label: 'How did you hear about us?*',
        name: 'fromSource',
        tag: 'select',
        value: '',
        options: [
          {
            disabled: true,
            hidden: true,
            label: 'Select an option',
            value: '',
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
        placeholder: '0,000',
        tag: 'masked',
        inputMode: 'numeric',
        name: 'amount',
        mask: currencyMask(),
      },
      {
        label: 'Monthly Revenue*',
        placeholder: '0,000',
        tag: 'masked',
        inputMode: 'numeric',
        name: 'revenue',
        mask: currencyMask(),
      },
      {
        label: 'Purpose*',
        name: 'purpose',
        tag: 'select',
        value: '',
        options: [
          {
            disabled: true,
            hidden: true,
            label: 'Select an option',
            value: '',
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
        placeholder: 'Eg. 1 year',
        name: 'time',
      },
      {
        label: 'Category*',
        name: 'category',
        tag: 'select',
        value: '',
        options: [
          {
            disabled: true,
            hidden: true,
            label: 'Select an option',
            value: '',
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
        placeholder: 'Eg. 123 Main Street, New York, NY 10030',
        name: 'address',
      },
      {
        label: 'State*',
        name: 'state',
        tag: 'select',
        value: '',
        options: [
          {
            disabled: true,
            value: '',
            hidden: true,
            label: 'Select an option',
          },
          { label: 'Alabama' },
          { label: 'Alaska' },
          { label: 'Arizona' },
          { label: 'Arkansas' },
          { label: 'California' },
          { label: 'Colorado' },
          { label: 'Connecticut' },
          { label: 'Delaware' },
          { label: 'Florida' },
          { label: 'Georgia' },
          { label: 'Hawaii' },
          { label: 'Idaho' },
          { label: 'Illinois' },
          { label: 'Indiana' },
          { label: 'Iowa' },
          { label: 'Kansas' },
          { label: 'Kentucky' },
          { label: 'Louisiana' },
          { label: 'Maine' },
          { label: 'Maryland' },
          { label: 'Massachusetts' },
          { label: 'Michigan' },
          { label: 'Minnesota' },
          { label: 'Mississippi' },
          { label: 'Missouri' },
          { label: 'Montana' },
          { label: 'Nebraska' },
          { label: 'Nevada' },
          { label: 'New Hampshire' },
          { label: 'New Jersey' },
          { label: 'New Mexico' },
          { label: 'New York' },
          { label: 'North Carolina' },
          { label: 'North Dakota' },
          { label: 'Ohio' },
          { label: 'Oklahoma' },
          { label: 'Oregon' },
          { label: 'Pennsylvania' },
          { label: 'Rhode Island' },
          { label: 'South Carolina' },
          { label: 'South Dakota' },
          { label: 'Tennessee' },
          { label: 'Texas' },
          { label: 'Utah' },
          { label: 'Vermont' },
          { label: 'Virginia' },
          { label: 'Washington' },
          { label: 'West Virginia' },
          { label: 'Wisconsin' },
          { label: 'Wyoming' },
        ],
      },
      {
        label: 'City*',
        placeholder: 'Eg. Boston',
        name: 'city',
      },
      {
        label: 'ZIP code*',
        placeholder: 'Eg.  12345-6789',
        tag: 'masked',
        inputMode: 'numeric',
        name: 'zip',
        mask: zipMask,
      },
    ],
  },
];
