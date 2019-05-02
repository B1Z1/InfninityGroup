export default class {
    constructor(object){
        //Anime class from "canime.js"
        this.anime = object.anime;
        this.button = document.querySelector(`.${object.button}`);
        this.container = {
            element: document.querySelector(`.${object.container.element}`),
            animation: object.container.animation //Type of animation
        };
        //Template for serach cookie accept
        this.template = /accepted=true/;

        //Check, if cookies was accepted, remove container from html
        if ( this.hasAccepted() )
            this.removeContainer();
        else
            this.init();
    }
    //On click accepted class to cookie and save cookie
    init(){
        console.log('work');
        this.button.addEventListener('click', (ev)=>{
            this.anime.animate([
                {
                    element: this.container.element, 
                    type: this.container.animation, 
                    act: 'add'
                }
            ]);
            setTimeout(()=>{ 
                this.container.element.remove();
            }, 400);
            document.cookie = "accepted=true;expires=Fri, 31 Dec 9999 23:59:59 GMT;";
        });
    }
    //Check the cookie accept
    hasAccepted(){
        return this.template.test(document.cookie);
    }
    //Add class accepted to cookie
    removeContainer(){
        this.container.element.remove();
    }
}