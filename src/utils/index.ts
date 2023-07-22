import {Item} from '../components';

export const defaultLocationData: Item[] = [
  {
    label:
      'Malaysian Anti-Corruption Commission (MACC) Headquarters, Lebuh Wawasan, Presint 7, Putrajaya, Malaysia',
    value: 'ChIJC2htZ7a3zTERyu7asudurgc',
  },
  {
    label:
      'KLCC Convention Centre Loading Bay Checkpoint, Persiaran KLCC, Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia',
    value: 'ChIJATaCWGU3zDER32m__CAwDyY',
  },
  {
    label:
      'IOI City Mall, Lebuh IRC, Ioi Resort, Putrajaya, Selangor, Malaysia',
    value: 'ChIJQWjHIQzKzTERgAEUgEQ4mCw',
  },
  {
    label:
      'IOI Mall Puchong, Jalan Puchong, Bandar Puchong Jaya, Puchong, Selangor, Malaysia',
    value: 'ChIJW6IeoW9LzDERRhh2kBCUJaE',
  },
];

export const formatTimeShow = (h_24: string) => {
  let HH = Number(h_24.slice(0, 2));
  let min = h_24.slice(2, 4);
  let AMPM = HH >= 12 ? 'pm' : 'am';
  let hours;
  if (HH == 0) {
    hours = HH + 12;
  } else if (HH > 12) {
    hours = HH - 12;
  } else {
    hours = HH;
  }
  return hours + ':' + min + ' ' + AMPM;
};
