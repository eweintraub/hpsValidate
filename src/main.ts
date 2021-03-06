/// <reference path="index.d.ts" />


class Config {
    public static version: string = '0.3.10';
    public static ver(): void {
        console.log(this.version);
    }
}

class ValidatorConfig {
    public count: number;
    public ValidationSettings = {
        identifier:'',
        runOnLoad: true,
        validateIfHidden: false,
        disableSubmit: true,
        validateOnLoadIfPopulated: true,
        validateIfEmpty: true
    }
    constructor(r: any) {
        // Getting TRUE/FALSE settings
        if(r.runOnLoad === 'true'){
            this.ValidationSettings.runOnLoad = true} 
        else if(r.runOnLoad === 'false'){
            this.ValidationSettings.runOnLoad = false
        }
        if(r.disableSubmit === 'true'){
            this.ValidationSettings.disableSubmit = true
        } 
        else if(r.disableSubmit === 'false'){
            this.ValidationSettings.disableSubmit = false
        }
        if(r.validateIfHidden === 'true'){
            this.ValidationSettings.validateIfHidden = true
        } 
        else if(r.validateIfHidden === 'false'){
            this.ValidationSettings.validateIfHidden = false
        }

        if(r.validateIfEmpty === 'true'){
            this.ValidationSettings.validateIfEmpty = true
        } 
        else if(r.validateIfEmpty === 'false'){
            this.ValidationSettings.validateIfEmpty = false
        }

        if(r.validateOnLoadIfPopulated === 'true'){
            this.ValidationSettings.validateOnLoadIfPopulated = true
        } 
        else if(r.validateOnLoadIfPopulated === 'false'){
            this.ValidationSettings.validateOnLoadIfPopulated = false
        }
       
        this.ValidationSettings.identifier = r.identifier || '[data-validate]';

        // GET and set the checkbox settings
        if(r.checkbox){
            if(r.checkbox.checking){
                if(r.checkbox.checking.class){
                    this.checkbox.checking.class = r.checkbox.checking.class;
                }
                // if(r.checkbox.checking.function){
                //     this.checkbox.checking.function = r.checkbox.checking.function;
                // }
            }
            if(r.checkbox.success){
                if(r.checkbox.success.class){
                    this.checkbox.success.class = r.checkbox.success.class;
                }
                // if(r.checkbox.success.function){
                //     this.checkbox.success.function = r.checkbox.success.function;
                // }
            }
            if(r.checkbox.failed){
                if(r.checkbox.failed.class){
                    this.checkbox.failed.class = r.checkbox.failed.class;
                }
                // if(r.checkbox.failed.function){
                //     this.checkbox.failed.function = r.checkbox.failed.function;
                // }
            }
            if(r.checkbox.empty){
                if(r.checkbox.empty.class){
                    this.checkbox.empty.class = r.checkbox.empty.class;
                }
                // if(r.checkbox.empty.function){
                //     this.checkbox.empty.function = r.checkbox.empty.function;
                // }
            }
        }
    }

    
    public text = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'valid-success',
            function: ''
        },
        failed: {
            class: 'valid-failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        },
        matchPattern: /^[A-Za-z]{1,}$/
    }
    public mixedText = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'valid-success',
            function: ''
        },
        failed: {
            class: 'valid-failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        },
        matchPattern: /^(.+){1,}$/
    }
    public number = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'valid-success',
            function: ''
        },
        failed: {
            class: 'valid-failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        },
        matchPattern: /^[0-9]{1,}$/
    }
    public zipCode = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'valid-success',
            function: ''
        },
        failed: {
            class: 'valid-failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        },
        matchPattern: /^[0-9]{5}$/
    }
    public email = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'valid-success',
            function: ''
        },
        failed: {
            class: 'valid-failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        },
        matchPattern: /^([a-zA-Z0-9_\-\.]*)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,5})$/
    }
    public ssn = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'valid-success',
            function: ''
        },
        failed: {
            class: 'valid-failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: '',
            message: 'This field must be populated'
        },
        matchPattern: /^([0-9]{9,9})$/
    }
    public phone = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'valid-success',
            function: ''
        },
        failed: {
            class: 'valid-failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        },
        matchPattern: /^([0-9]{10,10})$/
    }
    public date = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'success',
            function: ''
        },
        failed: {
            class: 'failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        },
        matchPattern: /^([0-9]{2,2})\/([0-9]{2,2})\/([0-9]{4,4})$/
    }
    public stateAbbr = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'valid-success',
            function: ''
        },
        failed: {
            class: 'valid-failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        },
        matchPattern: /^([A-Z]{2})$/
    };
    public taxId = {
            checking: { "class": 'valid-checking', "function": '' },
            success: {
                "class": 'valid-success',
                "function": ''
            },
            failed: {
                "class": 'valid-failed',
                "function": ''
            },
            empty: {
                "class": 'valid-empty',
                "function": ''
            },
            matchPattern: /^[0-9]{2}\-[0-9]{7}$/
        };
    public properName = {
        checking: { "class": 'valid-checking', "function": '' },
        success: {
            "class": 'valid-success',
            "function": ''
        },
        failed: {
            "class": 'valid-failed',
            "function": ''
        },
        empty: {
            "class": 'valid-empty',
            "function": ''
        },
        matchPattern: /^[a-zA-Z\s?]+(?:[-\,?\'?\-?][\s?a-zA-Z]+)*$/
    };
    public notNull = {
        checking: { "class": 'valid-checking', "function": '' },
        success: {
            "class": 'valid-success',
            "function": ''
        },
        failed: {
            "class": 'valid-failed',
            "function": ''
        },
        empty: {
            "class": 'valid-empty',
            "function": ''
        },
        matchPattern: /.+/
    };
    public checkbox = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'success',
            function: ''
        },
        failed: {
            class: 'failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        },
        minCount: 1
    }
    public radioButton = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'success',
            function: ''
        },
        failed: {
            class: 'failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        },
        minCount: 1
    }
    public dropdown = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'success',
            function: ''
        },
        failed: {
            class: 'failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        }
    }
    public custom = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'success',
            function: ''
        },
        failed: {
            class: 'failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        }
    }
}

$.fn.hpsValidate = function( options?:any ){
    //console.log(options);
    if(!this){console.error('Unable to find hpsValidate target');}
    var v = new ValidatorConfig(options || {});
            
            if(options == 'validate'){
                ValidateElement(this[0], v);
            } else if (options == 'update'){
                AddValidationToElement(this[0],v);
                checkForAllValidated(this[0],v.ValidationSettings);
            } else if (options == 'remove'){
                //createValidationRemover(this[0]);
            } else {
                if(v.ValidationSettings.disableSubmit) disableSubmit(this[0]);
                AddValidationToElement(this[0],v);
            }
};
var ValidateElement = function(target:any ,v: any){
    let identifier:string = v.ValidationSettings.identifier + ':not(.do-not-validate)';
    let elements = target.querySelectorAll(identifier);
        for(let x = 0;x < elements.length; ++x){
                if (v.ValidationSettings.validateIfHidden == false && $(elements[0]).is(':hidden')) {
                    if(elements[0].classList.contains('hidden-for-multi')){

                    }
                    else {
                        //elements[x].removeAttribute('data-validate');
                        //continue;
                    } 
                }
               createValidator(v,elements[x],true);
            }
};

var AddValidationToElement = function(target:any, v: any){
    let identifier:string = v.ValidationSettings.identifier + ':not(.do-not-validate):not(.validate-watching)';
    if(target){
        let elements = target.querySelectorAll(identifier);
        while(elements.length > 0){
            if (v.ValidationSettings.validateIfHidden == false && $(elements[0]).is(':hidden')) {
                if(elements[0].classList.contains('hidden-for-multi') || (elements[0].classList.contains('validate-if-hidden'))){

                }
                else {
                    //elements[0].removeAttribute('data-validate');
                    elements = target.querySelectorAll(identifier);
                } 
            }
            createValidator(v,elements[0]);
            elements = target.querySelectorAll(identifier);
        }
        handlePageLoad();
    }
    
};

var createValidator = function(v:any,element:any,validateNow?:boolean){
    let t = element.getAttribute('data-validate');
    switch (t) {
        
        case 'text':
        case 'mixedText':
        case 'number':
        case 'zipCode':
        case 'stateAbbr':
        case 'properName':
        case 'email':
        case 'taxId':
        case 'dropdown':
            var va = new Validator(v[t], v.ValidationSettings);
            validateNow ? va.validate(true, element) : va.load(element);
            break;
        case 'ssn':
        case 'phone':
        case 'date':
            var f = checkForOneOrMultipleFields(element, element.getAttribute('data-validate'), v[t]);
            var va = new Validator(v[t], v.ValidationSettings);
            validateNow ? va.validate(true, element) : va.load(element, f); 
            break;
        case 'checkbox':
            new CheckBoxValidator(element, v[t], v.ValidationSettings);
            break;
        case 'radioButton':
            new RadioButtonValidator(element, v[t], v.ValidationSettings);
            break;
        case 'custom':
            var pattern = element.getAttribute('data-pattern');
            let v1 = v[t];
            v1.matchPattern = pattern;
            var va = new Validator(v1, v.ValidationSettings);
            validateNow ? va.validate(true, element) : va.load(element);
            break;
        // Just check to see if it is null
        case "":
        case "data-validate":
        case "true":
            var va = new Validator(v['notNull'], v.ValidationSettings);
            validateNow ? va.validate(true, element) : va.load(element);
    }
};
class Validator {
    private element: any;
    private rules: any;
    private settings: any;
    private altElement: any;
    private container: any;
    private lblField:any;
    private emptyMsg: string;
    private failedMsg: string;
    constructor(rules: any, settings: any){
        this.rules = rules;
        this.settings = settings;
    }
    public load = (el: any, altElement?: any):void => {
        var that = this;
        this.element = el;
        if(altElement) this.altElement = altElement;
        let elToTest = this.altElement || this.element;
        this.container = getParentWrapperElement(elToTest) || this.element.parentNode;
        elToTest.classList.add('validate-watching');
        elToTest.addEventListener('input',function(){that.validate(true)});
        elToTest.addEventListener('click',function(){that.validate(true)});
        elToTest.addEventListener('change',function(){that.validate(true)});
        elToTest.addEventListener('blur',function(){that.validate(true)});
        this.lblField = getLabelElement(elToTest);
        this.emptyMsg = elToTest.getAttribute('data-error-empty') || 'This field is required';
        this.failedMsg = elToTest.getAttribute('data-error-failed') || 'Please correct this field';
        this.settings.runOnLoad ? this.validate(true) : this.validate(false); // If runOnLoad is set to 'true' then the inputs will be decorated on load
        if(this.rules.keyUp){
            elToTest.addEventListener('keyup', function(){that.rules.keyUp(el)});
        }
    }
    public validate = (validateImmediately:boolean, el?: any, altElement?: any):void => {
        var re = new RegExp(this.rules.matchPattern);
        if(el) this.element = el;
        if(altElement) this.altElement = altElement;
        let elToTest = this.altElement || this.element;
        try {
            if(elToTest.value){
                elToTest.value = trimValue(elToTest);
            }
        }
        catch (e){
            console.log(e);
        }
        try{
            if(this.container){
                this.container.classList.add(this.rules.checking.class);
            }
        }
        catch(e){
           console.log(e); 
        }
        if($(this.container).is(':visible') || elToTest.classList.contains('validate-if-hidden')){
            if(elToTest.hasAttribute('data-validate-optional')){ // check to see if element is optional
                if(elToTest.value == '' && this.settings.validateIfEmpty){
                    if(elToTest.tagName == 'SELECT') {
                        if(elToTest.selectedOptions){
                            if(!elToTest.selectedOptions.length || elToTest.selectedOptions.length < 1 || elToTest.selectedOptions[0].text == '') {
                                this.success(validateImmediately);
                            } else {
                                this.success(validateImmediately);
                            }
                        }
                        else if(elToTest.value){
                            if(!elToTest.value || elToTest.value == '') {
                                this.success(validateImmediately);
                            } else {
                                this.success(validateImmediately);
                            }
                        }
                    }
                    else {this.success(validateImmediately);}
                }
                else {
                    elToTest.value != '' && re.test(elToTest.value) ? this.success(validateImmediately) : this.fail(validateImmediately);
                }
            }
            else {
                if(elToTest.value == '' && this.settings.validateIfEmpty){
                    if(elToTest.tagName == 'SELECT') {
                        if(elToTest.selectedOptions){
                            if(!elToTest.selectedOptions.length || elToTest.selectedOptions.length < 1 || elToTest.selectedOptions[0].text == '') {
                                this.empty(validateImmediately);
                            } else {
                                this.success(validateImmediately);
                            }
                        }
                        else if(elToTest.value){
                            if(!elToTest.value || elToTest.value == '') {
                                this.empty(validateImmediately);
                            } else {
                                this.success(validateImmediately);
                            }
                        }
                    }
                    else {this.empty(validateImmediately);}
                }
                else{
                    elToTest.value != '' && re.test(elToTest.value) ? this.success(validateImmediately) : this.fail(validateImmediately);
                }
            }
            
        } 
    }
    private empty = (validateImmediately?: boolean):void => {
        let elToTest = this.altElement || this.element;
        if(this.lblField){
            addErrorMessage(this.lblField,this.emptyMsg);
        }
        if(elToTest.classList.contains('no-validate-if-empty')){
            UpdateFieldValidationStatus(elToTest, this.rules, this.settings, true, false, false,validateImmediately); 
        } else {
            elToTest.setAttribute('data-message',this.rules.empty.message );
            UpdateFieldValidationStatus(elToTest, this.rules, this.settings, true, false, false,validateImmediately);  
        }     
    }
    private success = (validateImmediately?: boolean):void => {
        var that = this;
        let elToTest = this.altElement || this.element;
        if(this.lblField){
            addErrorMessage(this.lblField,"");
        }
        elToTest.removeAttribute('data-message');
        UpdateFieldValidationStatus(elToTest, this.rules, this.settings, false, true, false, validateImmediately);
        if(this.container){
            let inputs = this.container.querySelectorAll('input');
            if(inputs.length > 1){
                for(let i = 0; i < inputs.length; ++i){
                    inputs[i].addEventListener('blur',function(){that.clear()});
                    inputs[i].addEventListener('focusout',function(){that.clear()});
                }
            }
        }
        this.element.addEventListener('blur',function(){that.clear()});
        this.element.addEventListener('focusout',function(){that.clear()});
    }
    private fail = (validateImmediately?: boolean):void => {
        let elToTest = this.altElement || this.element;
        if(this.lblField){
            addErrorMessage(this.lblField,this.failedMsg);
        }
        elToTest.setAttribute('data-message',this.rules.failed.message);
        UpdateFieldValidationStatus(elToTest, this.rules, this.settings, false, false, true,validateImmediately); 
    }
    private clear = ():void => {
        if(this.container){
            this.container.classList.remove(this.rules.success.class);
            if(this.altElement) this.container.classList.remove(this.rules.success.class);
        }
    }
}

class CheckBoxValidator {
    private _rules: any;
    private _settings: any;
    private _container: any;
    private _element:any;
    constructor(element: any, rules: any, settings: any){
        this._rules = rules;
        this._settings = settings;
        this._element = element;
        this._container = getParentWrapperElement(element);
        this.ConfigureSubmitButton();

    }
    private ConfigureSubmitButton = (): void => {
        if(this._settings.disableSubmit) disableSubmit(this._element);
        this._getElements();
    }
    private _getElements = (): void => {
        let that = this;
        let elements = this._container.querySelectorAll('[type=checkbox]');
        for(let d = 0; d < elements.length; ++d){
            elements[d].classList.add('validate-watching');
            elements[d].addEventListener('change',function(){that._checkIfAnySelected();});
            elements[d].addEventListener('click',function(){that._checkIfAnySelected();});
        }
        this._checkIfAnySelected(false);
    }
    private _checkIfAnySelected = (validateImmediately?: boolean): void => {
        let selected = false;
        let checkedItems = this._container.querySelectorAll("[type=checkbox]");
        for(let c = 0;c<checkedItems.length;++c){
            if(checkedItems[c].checked){
                selected = true;
                this.success(validateImmediately);
                return;
            }
        }
        this.fail();

    }
    private empty = (validateImmediately?: boolean):void => {
        this._container.parentNode.classList.remove(this._rules.checking.class);
        this._container.parentNode.classList.remove(this._rules.success.class);
        this._container.parentNode.classList.remove(this._rules.failed.class);
        if(validateImmediately) this._container.parentNode.classList.add(this._rules.empty.class);
        this._container.classList.remove('validated');
        
    }
    private success = (validateImmediately?: boolean):void => {
        this._container.parentNode.classList.remove(this._rules.empty.class);
        this._container.parentNode.classList.remove(this._rules.checking.class);
        this._container.parentNode.classList.remove(this._rules.failed.class);
        if(validateImmediately) this._container.parentNode.classList.add(this._rules.success.class);
        let checkedItems = this._container.querySelectorAll("[type=checkbox]");
        for(let c = 0;c<checkedItems.length;++c){
            checkedItems[c].classList.add('validated');
        }
        this._container.classList.add('validated');
        checkForAllValidated(this._element, this._settings);
        document.addEventListener('click',this.clear(event));

    }
    private fail = (validateImmediately?: boolean):void => {
        if(validateImmediately) this._container.parentNode.classList.add(this._rules.empty.class);
        this._container.parentNode.classList.remove(this._rules.checking.class);
        this._container.parentNode.classList.remove(this._rules.success.class);
        let checkedItems = this._container.querySelectorAll("[type=checkbox]");
        for(let c = 0;c<checkedItems.length;++c){
            checkedItems[c].classList.remove('validated');
        }
        this._container.classList.remove('validated');
        checkForAllValidated(this._element, this._settings);
    }
    private clear = (event: any):any => {
        if(!event) event = window.event;
        let a = event.target;
        var els = [];
        while (a) {
            els.unshift(a);
            a = a.parentNode;
        }
        if(els.indexOf(this._container) < 0){

            this._container.parentNode.classList.remove(this._rules.success.class);
        } 
    }
}

class RadioButtonValidator {
    
    private _rules: any;
    private _settings: any;
    private _container: any;
    private _element:any;
    constructor(element: any, rules: any, settings: any){
        this._rules = rules;
        this._settings = settings;
        this._element = element;
        this._container = getParentWrapperElement(element);
        this.ConfigureSubmitButton();
    }
    private ConfigureSubmitButton = (): void => {
        if(this._settings.disableSubmit) disableSubmit(this._element);
        this._getElements();
    }
    private _getElements = (): void => {
        let that = this;
        let elements = this._container.querySelectorAll('[type=radio]');
        for(let d = 0; d < elements.length; ++d){
            elements[d].classList.add('validate-watching');
            elements[d].addEventListener('change',function(){that._checkIfAnySelected();})
            elements[d].addEventListener('click',function(){that._checkIfAnySelected();})
        }
        this._checkIfAnySelected(false);
    }
    private _checkIfAnySelected = (validateImmediately?: boolean): void => {
        let selected = false;
        let checkedItems = this._container.querySelectorAll("[type=radio]");
        for(let c = 0;c<checkedItems.length;++c){
            if(checkedItems[c].checked){
                selected = true;
                this.success(validateImmediately);
                return;
            }
        }
        this.fail();

    }
    private empty = (validateImmediately?: boolean):void => {
        this._container.parentNode.classList.remove(this._rules.checking.class);
        this._container.parentNode.classList.remove(this._rules.success.class);
        this._container.parentNode.classList.remove(this._rules.failed.class);
        if(!validateImmediately) this._container.parentNode.classList.add(this._rules.empty.class);
        this._container.classList.remove('validated');
        
    }
    private success = (validateImmediately?: boolean):void => {
        this._container.parentNode.classList.remove(this._rules.empty.class);
        this._container.parentNode.classList.remove(this._rules.checking.class);
        this._container.parentNode.classList.remove(this._rules.failed.class);
        if(!validateImmediately) this._container.parentNode.classList.add(this._rules.success.class);
        let checkedItems = this._container.querySelectorAll("[type=radio]");
        for(let c = 0;c<checkedItems.length;++c){
            checkedItems[c].classList.add('validated');
        }
        this._container.classList.add('validated');
        checkForAllValidated(this._element, this._settings);
        document.addEventListener('click',this.clear(event));

    }
    private fail = (validateImmediately?: boolean):void => {
        this._container.parentNode.classList.add(this._rules.empty.class);
        this._container.parentNode.classList.remove(this._rules.checking.class);
        this._container.parentNode.classList.remove(this._rules.success.class);
        if(!validateImmediately) this._container.parentNode.classList.add(this._rules.failed.class);
        let checkedItems = this._container.querySelectorAll("[type=radio]");
        for(let c = 0;c<checkedItems.length;++c){
            checkedItems[c].classList.remove('validated');
        }
        this._container.classList.remove('validated');
        //checkForAllValidated(this._element, this._settings);
        disableSubmit(this._element);
    }
    private clear = (event: any):any => {
        if(!event) event = window.event;
        let a = event.target;
        var els = [];
        while (a) {
            els.unshift(a);
            a = a.parentNode;
        }
        if(els.indexOf(this._container) < 0){

            this._container.parentNode.classList.remove(this._rules.success.class);
        } 
    }
}

// Single use or specific functions

// Add tooltip from data-message
var addToolTip = function(element: any){

};

var trimValue = function(el: any):string{
    let max = el.getAttribute('data-max-length');
    if(max){
        return el.value.trim().substr(0,max);
    } else {
        return el.value;
    }
}

//This will chekc to see if fields are using one field or multiple (ie. SSN or phone number)
var checkForOneOrMultipleFields = function(el: any, type: string, rules: any){
    if(el.classList.contains('do-not-validate')) {
        return; //This should prevent validating the rest of the multiple fields
    }
    let p = el.parentNode;
    var parentWrapper = getParentWrapperElement(p);
    let l = parentWrapper.querySelectorAll('[data-validate]');
    let count = parentWrapper.querySelectorAll('[data-validate]').length;
    if(count > 1){
        let e = document.createElement('input');
        if(el.hasAttribute('data-validate-optional')){ e.setAttribute('data-validate-optional', 'true' ); } 
        e.setAttribute('data-validate',type);
        e.style.display = 'none';
        // Will need to add ability to skip validation on hidden-for-multi fields
        e.classList.add('hidden-for-multi');
        let last = count - 1;
        l[last].parentNode.appendChild(e);
        for(let x = 0; x < count; ++x){
            l[x].removeAttribute('data-validate');
            l[x].parentNode.classList.remove(rules.checking.class);
            l[x].parentNode.classList.remove(rules.success.class);
            l[x].parentNode.classList.remove(rules.failed.class);
            l[x].classList.add('do-not-validate');
            l[x].addEventListener('keyup',function(){concatinateInHiddenField(l,e)})
            l[x].addEventListener('click',function(){concatinateInHiddenField(l,e)})
            
        }
        return e;
    }
    return false;
};

var guid = function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4();
}

// var end = function(){
    
// }

var getParentWrapperElement = function(el: any): any{
    let parent;
    if(el.classList.contains('input-wrapper')) return el;
    while(el){
        parent = el.parentNode;
        if(el.classList){
            if(el.classList.contains('input-wrapper')) return el;
            el = parent;
        }
    }
}
//Find parent Form
var getParentForm = function(element: any): any{
    let parent;
    let el = element;
    if(el){
        if(el.tagName === 'FORM') return el;
        while(el){
            parent = el.parentNode;
            if(el.tagName === 'FORM') return el;
            if(el.tagName === 'BODY') return element;
            el = parent;
        }
    }
}

//Get element's label
var getLabelElement = function(element: any): any{
    let prev;
    let el = element;
    if(el){
        let parent = getParentWrapperElement(element);
        while(parent && parent != null){
            prev = parent.previousElementSibling;
            if(prev){
                if(prev.tagName === 'BODY'){
                    console.error('No label found for ',element);
                    return null;
                }
                if(prev.hasAttribute('data-label')){
                    return prev;
                }
            }
            parent = prev;
        }
    }
}
// create value to be validated
var concatinateInHiddenField = function(fields: any, el: any){
    let v = '';
    for(let x = 0; x < fields.length; ++x){
        v += fields[x].value;
    }
    el.value = v;
    el.click();
    

};

var handlePageLoad = function(){
    // this function will touch each element.
    $('.validate-watching, .do-not-validate').each(function () {
        if (!$(this).hasClass('validate-if-hidden')) {

            if ($(this).val() != '' || $(this).val()) {
                $(this).click();
                $(this).closest('.input-wrapper').removeClass('valid-success');
            }
        }
    });
}

// Review all fields, if all are validated enable submit else disable
var checkForAllValidated = (element:any,settings: any, saveFailed?:boolean) => {
    let thisForm = getParentForm(element);
    if(thisForm){
        var b = thisForm.querySelectorAll(settings.identifier);
        var v = true;
        for(var x = 0; x < b.length; ++x){
            if (b[x].classList.contains('validated') || b[x].classList.contains('do-not-validate')){
                if(b[x].hasAttribute('data-always-invalid')){
                    v = false;
                    window['failedElement'] = b[x];
                    
                    if(settings.disableSubmit){
                        disableSubmit(element);
                    }
                    return;
                }
            } 
            else {
                if(jQuery(b[x]).is(':visible') || settings.validateIfHidden || b[x].classList.contains('validate-if-hidden') || b[x].classList.contains('hidden-for-multi') ){
                    v = false;
                    window['failedElement'] = b[x];
                    if(settings.disableSubmit){
                        disableSubmit(element);
                    }
                    return;
                }
                
            }
        }
        enableSubmit(element);
    }
}

// Utility function to show fields that are failing
var getFailedElement = () => console.log(window['failedElement']);


var disableSubmit = (element?:any):void => {
    let thisForm = document;
    if(element){thisForm = getParentForm(element);}
    var b = thisForm.querySelectorAll('[type=submit], .submit');
    for(var x = 0; x < b.length; ++x){
        if(jQuery(b[x]).is(":visible")){
            b[x].setAttribute('disabled','disabled');
        }
    }
}
var enableSubmit = (element:any):void => {
    let thisForm = document;
    if(element){thisForm = getParentForm(element);}
    var b = thisForm.querySelectorAll('[type=submit], .submit');
    for(var x = 0; x < b.length; ++x){
        if(jQuery(b[x]).is(":visible")){
            b[x].removeAttribute('disabled');
        }
    }
}

// Set Success, Fail and clear
var UpdateFieldValidationStatus = (el: any, rules:any, settings: any, empty: boolean, success: boolean, fail: boolean,validateImmediately?: boolean):void => { 
        let parentWrapper = getParentWrapperElement(el);
        parentWrapper.classList.remove(rules.checking.class);
        if (success) {
            el.classList.add('validated');
            if(validateImmediately) {
                parentWrapper.classList.add(rules.success.class);
                parentWrapper.classList.remove(rules.empty.class);
                parentWrapper.classList.remove(rules.failed.class);
            } 
            else {
                parentWrapper.classList.remove(rules.success.class);
            }
        }
        if(empty){
            if(validateImmediately) {
                parentWrapper.classList.add(rules.empty.class);
                parentWrapper.classList.remove(rules.success.class);
                parentWrapper.classList.remove(rules.failed.class);
            } 
            else {
                parentWrapper.classList.remove(rules.empty.class);
            }
        }
        if(fail){
            parentWrapper.classList.add(rules.failed.class);
            parentWrapper.classList.remove(rules.empty.class);
                parentWrapper.classList.remove(rules.success.class);
        } 
        else {
            parentWrapper.classList.remove(rules.failed.class);
        }
        if(empty || fail) {
            el.classList.remove('validated');
        }
        checkForAllValidated(el, settings);
}

var addErrorMessage = function(element: any, message: string):void {
    //element.setAttribute('title',message);
    element.setAttribute('data-original-title',message);
    if($(element).tooltip){
        $(element).tooltip({
            placement: 'right',
            trigger: 'hover'
        });
    }
}





