import Cookies from './components/ccokies';
import MobileNav from './components/cmobilenav';
import ProductCards from './components/cproducts';
import Map from './components/cmap';
import Anime from './components/canime';
import Validation from './components/cvalidation';
import Scroll from './components/cscroll';

const anime = new Anime();

//Cookies component
const cookies = new Cookies({  
    anime: anime,
    container: {
        element: 'cookies',
        animation: 'unfade'
    },  
    button: 'button-cookies' 
});

window.addEventListener('load', ()=>{ 
    
    const scroll = new Scroll({
        anime: anime,
        elements: 'trigger-scroll',
        current: 'navigation-aside__current',
        total: 'navigation-aside__all',
        buttons: {
            prev: 'navigation-aside__prev',
            next: 'navigation-aside__next'
        }
    });

    //Mobile navagation component    
    const mobilenav = new MobileNav({
        anime: anime,
        navigation: {
            element: 'navigation-hmobile',
            animation: 'fade'
        }, 
        listNavigation: {
            element: 'list-hmobile',
            animation: 'fadeup'
        },
        burger: {
            element: 'burger',
            animation: 'burger'
        }
    }); 

    //Product cards component
    const productcards = new ProductCards({
        cards: 'card-product', 
        images: 'image-product',
        colors: {
            normal: 'black',
            hover: 'white'
        }
    }); 

    //Initialize swiper
    const mySwiper = new Swiper ('.block-clients__container', {
        // Optional parameters
        direction: 'horizontal',
        effect: 'fade',
        // If we need pagination
        pagination: { 
            el: '.pagination-clients',
            type: 'bullets',
            clickable: true
        },
    });

    //Initialize validation
    const validationContact = new Validation({
        form: 'form-contact',
        elements: [
            {
                class: 'validate-text',
                validateBy: ['text'],
                alert: 'validate-alert__text'
            },
            {
                class: 'validate-mail',
                validateBy: ['text', 'mail'],
                alert: 'validate-alert__text'
            },
            {
                class: 'validate-phone',
                validateBy: ['text', 'phone'],
                alert: 'validate-alert__text'
            },
            {
                class: 'validate-checkbox',
                validateBy: ['checkbox'],
                alert: 'validate-alert__checkbox'
            }
        ]
    });

    //Initialize map
    const map = new Map({
        token: 'pk.eyJ1IjoiaWx5YW1pc2hraW4iLCJhIjoiY2p1aWRrbDl2MTRrcDQ0cGdlMTN3ZWJ1cCJ9.tTVIhbBmMOhuH_Z5DKUN4A',
        settings: {
            container: 'contact-map',
            style: 'mapbox://styles/ilyamishkin/cjv0w6sn745w41fqs732kx37n', // stylesheet location
            center: [23.122,53.117], // starting position [lng, lat]
            zoom: 2 // starting zoom
        },
        marker: {
            pos: [23.122,53.117],
            imageurl: 'img/marker.png',
            alt: 'Marker'
        }
    });

});  