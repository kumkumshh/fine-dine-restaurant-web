import images from './images';

const nonAlcoholic = [
  {
    title: 'Lassi',
    price: '₹120',
    tags: 'IN | Glass',
  },
  {
    title: 'Masala Chai',
    price: '₹80',
    tags: 'IN | Cup',
  },
  {
    title: 'Aam Panna',
    price: '₹60',
    tags: 'IN | Glass',
  },
  {
    title: 'Thandai',
    price: '₹80',
    tags: 'IN | Glass',
  },
  // {
  //   title: 'Irish Guinness',
  //   price: '$26',
  //   tags: 'IE | 750 ml',
  // },
];

const alcoholic = [
  {
    title: 'Kingfisher Premium Lager',
    price: '₹150',
    tags: 'IN | Bottle',
  },
  {
    title: "Old Monk Rum",
    price: '₹200',
    tags: ' IN | Bottle',
  },
  {
    title: 'Royal Challenge Whiskey',
    price: '₹450',
    tags: ' IN | Bottle',
  },
  // {
  //   title: 'Amrut Single Malt Whisky',
  //   price: '₹850',
  //   tags: 'IN | Bottle',
  // },
  // {
  //   title: 'Negroni',
  //   price: '$26',
  //   tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  // },
];

const awards = [
  // {
  //   imgUrl: images.award02,
  //   title: 'Bib Gourmond',
  //   subtitle: 'Recognized for exceptional value and high-quality dining.',
  // },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Honored for innovative culinary techniques and creative cuisine.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Awarded for outstanding service and exceptional hospitality standards.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: "Celebrated for culinary excellence and exemplary leadership in the kitchen.",
  },
];

export default { alcoholic, nonAlcoholic, awards };
