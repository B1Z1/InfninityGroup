export default class{
    constructor(object){
        this.images = [... document.querySelectorAll(`.${object.images}`)]; //All images from card product object
        this.cards = [... document.querySelectorAll(`.${object.cards}`)]; //All cards from card product
        this.colors = object.colors; 
        if ( this.images.length > 0 && this.cards.length > 0 ){
            this.init();
            window.addEventListener('resize', ()=>{this.init();});
        }
    }

    //On hover change the fill of image to hover color
    init(){
        this.images.forEach((el, index)=>{
            let image = el,
                //I don't know why, but chrome didn't allow frames, please turn on server
                imageSVG = (image.contentDocument.getElementsByTagName('path')[0] || image.contentWindow.getElementsByTagName('path')[0]);
            //Add transition to SVG image
            imageSVG.style.transition = 'fill .3s ease-in-out';
            if ( window.innerWidth < 768 ){
                imageSVG.style.fill = this.colors.hover;
                this.removeHoverListeners(imageSVG, index);
            }
            else {
                imageSVG.style.fill = this.colors.normal;
                this.addHoverListeners(imageSVG, index);
            }
        });
    }

    //Remove all mouse listeners if window width < 768px
    removeHoverListeners(imageSVG, index){
        this.cards[index].removeEventListener('mouseenter', ()=>{
            imageSVG.style.fill = this.colors.hover;
        });
        this.cards[index].removeEventListener('mouseleave', ()=>{
            imageSVG.style.fill = this.colors.normal;
        });
    }

    //Add mouse listeners if window width > 768px
    addHoverListeners(imageSVG, index){
        this.cards[index].addEventListener('mouseenter', ()=>{
            imageSVG.style.fill = this.colors.hover;
        });
        this.cards[index].addEventListener('mouseleave', ()=>{
            imageSVG.style.fill = this.colors.normal;
        });
    }

}