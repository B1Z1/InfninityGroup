export default class {
    constructor(object){
        this.form = document.querySelector(`.${object.form}`);
        this.elements = object.elements;
        //Templates for validation
        this.mailTemplate = /\w@\w{2}/;
        this.phoneTemplate = /\d{1,}/;

        if ( this.form )
            this.init();
    }
    
    /**
     * 
     * Initialization function
     * After form submit validate and clear inputs
     * 
     */
    init(){
        this.form.addEventListener('submit', (ev)=>{
            ev.preventDefault();
            
            if ( this.checkInputs() ){
                this.clearInputs();
                alert('Sended');
            }
        });
    }

    //After submit, check inputs
    checkInputs(){
        //Global validataion variable
        let globalValidate = true;

        this.elements.forEach((el)=>{
            let inputs = [... this.form.querySelectorAll(`.${el.class}`)],
                type = el.validateBy,
                alert = el.alert;

            //Loop all inputs and validate by their type
            inputs.forEach((el)=>{
                let input = el,
                    validated = Boolean;

                //Validate inputs by their type
                if ( type.length > 0 ){

                    for ( let el of type ){
                        validated = this.checkTypeOfValidation(el, input);
                        if ( !validated )
                            break;
                    }

                    /**
                     * 
                     * If global validate variable is valide and validation not valide, 
                     * change global validation variable
                     * 
                     */
                    if ( globalValidate && !validated )
                        globalValidate = false;

                    /**
                     * 
                     * If is not validated and input is not contain alert class,
                     * Add alert class to input
                     * 
                     */
                    if ( !validated && !input.classList.contains(alert) )
                        input.classList.add(alert);
                    /**
                     * 
                     * If is valide and input containe alert class,
                     * remove from input that class
                     * 
                     */
                    else if ( validated && input.classList.contains(alert) )
                        input.classList.remove(alert);

                }
            })
        });
        return globalValidate;
    }

    //Search function by type of validation
    checkTypeOfValidation(type, element){
        switch ( type ){
            case 'text': return this.validateByText(element.value);
            case 'mail': return this.validateByMail(element.value);
            case 'phone': return this.validateByPhone(element.value);
            case 'checkbox': return this.validateByCheckBox(element);
        }
    }

    //Validations
    validateByText(element){
        return element.length !== 0;
    }
    validateByMail(element){
        return this.mailTemplate.test(element);
    }
    validateByPhone(element){
        return this.phoneTemplate.test(element);
    }
    validateByCheckBox(element){
        return element.querySelector('input[type=checkbox]').checked;
    }

    
    //Clear all inputs after Success
    clearInputs(){
        this.elements.forEach((el)=>{
            let inputs = [... document.querySelectorAll(`.${el.class}`)],
                type = el.validateBy;
            /**
             * 
             * If in type we have "checkbox",
             * Uncheck that input
             * 
             */
            if ( type.find(el=>{return el === 'checkbox'}) )
                inputs.map(el=>{ el.querySelector('input[type=checkbox]').checked = false; });
            else 
                inputs.map((el)=>{ el.value = ''; });
        });
    }

}