import {getOffers} from './data.js';
import { renderCard } from './card.js';
const offers = getOffers();
const card = offers[0];

renderCard(card);
