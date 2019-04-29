export default class {
    constructor(object){
        //Animation class
        this.anime = object.anime;
        //All blocks from page
        this.elements = [... document.querySelectorAll(`.${object.elements}`)];
        //Container current block
        this.current = document.querySelector(`.${object.current}`); 
        //Container total
        this.total = document.querySelector(`.${object.total}`); 
        //Observer
        this.observer = undefined;
        //Buttons
        this.buttons = {
            prev: document.querySelector(`.${object.buttons.prev}`),
            next: document.querySelector(`.${object.buttons.next}`),
        }
        //Index of current element
        this.indexOfElement = 0;

        if ( this.elements ){
            //Insert into html total blocks
            this.total.textContent = this.elements.length - 1;
            this.init();
        }
        else 
            this.current.parentNode.remove();
    }
    init(){
        this.registerObserver();
        window.addEventListener('resize',()=>{this.registerObserver();});
    }

    registerObserver(){
        //Options for intersectionobserver
        let options = {
                rootMargin: `-${(window.innerHeight / 2) - 10}px 0px -${(window.innerHeight / 2) - 10}px 0px`,
                threshold: 0
            };

        //If observer is defined, disconnect all observes from elements
        if ( this.observer !== undefined )
            this.observer.disconnect();      
            
        //Init intersectionobserver
        this.observer = new IntersectionObserver((entries)=>{
            //After initialization, "entries" return array with all elements, I need to search one with true "isIntersecting"
            if ( entries.length > 1 ){
                entries.forEach(entry=>{
                    if ( entry.isIntersecting ){
                        //Search index by element from observer                        
                        this._indexOfElement(entry.target);
                        //Update current number of block
                        this._current()
                    } 
                });
                //Link buttons for prevent and next element
                this.linkButtons();
            }  
            else {
                //Search index by element from observer
                this._indexOfElement(entries[0].target);
                //Update current number of block
                this._current();
                //Link buttons for prevent and next element
                this.linkButtons();
            }
        }, options);

        this.elements.forEach((el)=>{
            let target = el;
            this.observer.observe(target);
        });
    }

    //Search index by element from observer
    _indexOfElement(target){
        this.indexOfElement = this.elements.findIndex((el)=>{return target === el});
    }

    //Update current number of block
    _current(){
        this.current.textContent = this.indexOfElement;
    }

    /**
     * 
     * On scroll update all button, by block id
     * IF this is first or last block,
     * Fade buttons
     * 
     */
    linkButtons(){
        let prev = this.elements[this.indexOfElement - 1],
            next = this.elements[this.indexOfElement + 1];

        if ( prev === undefined )
            this.anime.animate([{
                element: this.buttons.prev,
                type: 'unfade', 
                act: 'add'
            }]);
        else{
            this.anime.animate([{
                element: this.buttons.prev,
                type: 'unfade', 
                act: 'remove'
            }]);
            this.buttons.prev.href = `#${prev.id}`;
        }
        if ( next === undefined )
            this.anime.animate([{
                element: this.buttons.next,
                type: 'unfade', 
                act: 'add'
            }]);
        else{
            this.anime.animate([{
                element: this.buttons.next,
                type: 'unfade', 
                act: 'remove'
            }]);
            this.buttons.next.href = `#${next.id}`;
        }
    }

}