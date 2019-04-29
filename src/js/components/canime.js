/**
 * 
 * Type of animations: 
 *  ->fade,
 *  ->unfade,
 *  ->fadeup,
 *  ->burger,
 *  ->overflow,
 * 
 */
export default class {
    constructor(){
        this.animations = {
            fade: 'trigger-fade--active',
            unfade: 'trigger-unfade--active',
            fadeup: 'trigger-fadeup--active',
            burger: 'trigger-burger--active',
            overflow: 'trigger-overflow--active'
        };
    }

    //Animate all elements by type and act
    animate(elements){
        elements.forEach((el)=>{
            let element = el.element,
                type = el.type,
                act = el.act;

                switch (act){
                    case 'add': 
                        element.classList.add(this.animations[type]);
                    break;
                    case 'remove':
                        element.classList.remove(this.animations[type]);
                    break;
                    case 'toggle':
                        element.classList.toggle(this.animations[type]);
                    break;
                }
        });
    }

}