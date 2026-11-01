import { CakeSize } from '../components/CakeSize/CakeSize.jsx';
import { CollectionDate } from '../components/CollectionDate/CollectionDate.jsx';
import { Decoration } from '../components/Decoration/Decoration.jsx';
import { Design } from '../components/Design/Design.jsx';
import { IcingFilling } from '../components/IcingFilling/IcingFilling.jsx';
import { ReviewOrder } from '../components/ReviewOrder/ReviewOrder.jsx';
import { Sponge } from '../components/Sponge/Sponge.jsx';
import Round from '../pictures/round.png';
import Square from '../pictures/square.png';
import Plain from '../pictures/sponges/plain.jpg';
import RV from '../pictures/sponges/rv.jpg';
import Choc from '../pictures/sponges/choc.jpg';
import Fudge from '../pictures/sponges/fudge.jpg';
import Biscuit from '../pictures/sponges/biscuit.jpg';
import buttercream from '../pictures/cream/buttercream.jpg';
import freshcream from '../pictures/cream/freshCream.jpg';
import Jam from '../pictures/filling/jam.jpg';
import NoJam from '../pictures/filling/noJam.jpg';
import ChocShav from '../pictures/sides/ChocShavings.png';
import ColSprinkles from '../pictures/sides/ColourSprinkle.png';
import ButterUp from '../pictures/sides/ButtercreamUp.png';
import { CustomerDetails } from '../components/CustomerDetails/CustomerDetails.jsx';

export const OrdersList = ['Order a Cake', 'Order Cupcakes'];

export const StepsList = [
  { step: 1, label: 'Collection Date & Time', component: CollectionDate },
  { step: 2, label: 'Choose Your Cake Size', component: CakeSize },
  { step: 3, label: 'Choose Your Sponge', component: Sponge },
  { step: 4, label: 'Icing & Filling', component: IcingFilling },
  { step: 5, label: 'Design', component: Design },
  { step: 6, label: 'Choose Your Decoration', component: Decoration },
  { step: 7, label: 'Your Сontact Details', component: CustomerDetails },
  { step: 8, label: 'Review Order', component: ReviewOrder },
];

export const CollectionTimeList = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
];

export const CakeSizeList = [
  { size: '8" Round', label: 'Serves 5 – 7', img: Round },
  { size: '8" Square', label: 'Serves 15', img: Square },
  { size: '10" Square', label: 'Serves 25 – 30', img: Square },
  { size: '12" Square', label: 'Serves 35 – 40', img: Square },
  { size: '14" Square', label: 'Serves 50', img: Square },
  { size: '16" Square', label: 'Serves 60+', img: Square },
];

export const BiscuitCakeSize = ['8" Round', '10" Round'];

export const SpongesType = [
  { label: 'Plain', description: 'Fluffy vanilla', img: Plain },
  { label: 'Chocolate', description: 'Rich chocolate', img: Choc },
  { label: 'Red Velvet', description: 'Vibrant red', img: RV },
  { label: 'Chocolate Fudge', description: 'Rich and fudgy', img: Fudge },
  {
    label: 'Biscuit',
    description: 'Melted chocolate and cookies',
    img: Biscuit,
  },
];

export const CreamTypes = [
  {
    label: 'Buttercream',
    description: 'Thick & sweet',
    img: buttercream,
  },
  {
    label: 'Fresh Cream',
    description: 'Light & airy',
    img: freshcream,
  },
];

export const Filling = [
  { label: 'Yes, add jam', value: true, img: Jam },
  { label: 'No, thanks', value: false, img: NoJam },
];

export const messageColours = [
  { name: 'White', value: '#FFFFFF' },
  { name: 'Chocolate', value: '#68402F' },
  { name: 'Red', value: '#C62828' },
  { name: 'Pink', value: '#f88fc7' },
  { name: 'Blue', value: '#2d8ae7' },
];

export const CakeSides = [
  { name: 'Smooth', img: ButterUp },
  { name: 'Coloured sprinkles', img: ColSprinkles },
  { name: 'Chocolate sprinkles', img: ColSprinkles },
  { name: 'Chocolate curls white', img: ColSprinkles },
  { name: 'Chocolate curls choc', img: ColSprinkles },
  { name: 'Chocolate shavings', img: ChocShav },
  { name: 'Piping fresh cream', img: ButterUp },
  { name: 'Piping white buttercream', img: ButterUp },
  { name: 'Piping coloured buttercream', img: ButterUp },
];

export const DecorOnTop = [
  'Smarties',
  'Maltesers',
  'Chocolate decor',
  'Strawberries',
  'Pink themed decor',
  'Blue themed decor',
];
