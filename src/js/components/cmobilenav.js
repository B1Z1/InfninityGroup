//After click to burger menu, toggle all active classes (burger, navigation, body)
export default class {
    constructor(object){
        //Anime class from "canime.js"
        this.anime = object.anime;
        //Navigation container
        this.navigation = {
            element: document.querySelector(`.${object.navigation.element}`),
            animation: object.navigation.animation
        };
        //List of navigation container
        this.listNavigation = {
            element: document.querySelector(`.${object.listNavigation.element}`),
            animation: object.listNavigation.animation
        };
        //Burger
        this.burger = {
            element: document.querySelector(`.${object.burger.element}`),
            animation: object.burger.animation
        };
        this.init();
    }
    init(){ 
        /**
         * 
         * Burger on click, toggle all classes:
         *  -> navigation
         *  -> listnavigation
         *  -> burger
         *  -> body - overflow hidden for iphone
         * 
         */
        this.burger.element.addEventListener('click', ()=>{
            this.anime.animate([
                {
                    element: this.navigation.element, 
                    type: this.navigation.animation, 
                    act: 'toggle'
                },
                {
                    element: this.listNavigation.element, 
                    type: this.listNavigation.animation, 
                    act: 'toggle'
                },
                {
                    element: this.burger.element, 
                    type: this.burger.animation, 
                    act: 'toggle'
                },
                {
                    element: document.body, 
                    type: 'overflow', 
                    act: 'toggle'
                }
            ]);
        });
    }
}