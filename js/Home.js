// IMPORTS
/* header */
/* hero */
/* about me */
/* services */
import { services } from './components/services/services.js';
import { servicesData } from './data/servicesData.js';

/* resume */
/* freelance */
/* portfolio */
/* testimonials */
import { Carousel } from './components/carousel/Carousel.js';
import { testimonialsData } from './data/testimonialsData.js';
import { testimonials } from './components/testimonials/testimonials.js';
import { shopItem } from './components/shopItem/shopItem.js';

/* blogs */
/* contact me */
/* footer */

// EXECUTION
/* header */
/* hero */
/* about me */
/* services */
services(servicesData);

/* resume */
/* freelance */
/* portfolio */
/* testimonials */
const testimonialsBlock = new Carousel(testimonialsData, testimonials);
testimonialsBlock.init();

const shopData = { ...testimonialsData, selector: '#shop_items_carousel' };

const shopItemsBlock = new Carousel(shopData, shopItem);
shopItemsBlock.init();

/* blogs */
/* contact me */
/* footer */
