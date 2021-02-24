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
const testimonials = new Carousel(testimonialsData);
testimonials.init();

/* blogs */
/* contact me */
/* footer */
