/// <reference path="index.d.ts" />

class Config {
    public static version: string = '0.1.1';
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
        validateIfEmpty: true
    }
    constructor(r: any) {
        if(r.runOnLoad === 'true'){
            this.ValidationSettings.runOnLoad = true
        } 
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
        if(r.validateIfEmpty === 'true'){
            this.ValidationSettings.validateIfEmpty = true
        } 
        this.ValidationSettings.identifier = r.identifier || '[data-validate]';
    }
    
    public text = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'valid-success',
            function: ''},
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
            function: ''},
        failed: {
            class: 'valid-failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        },
        matchPattern: /^[0-9A-Za-z]{1,}$/
    }
    public number = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'valid-success',
            function: ''},
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
    public email = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'valid-success',
            function: ''},
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
            function: ''},
        failed: {
            class: 'valid-failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        },
        matchPattern: /^([0-9]{9,9})$/
    }
    public phone = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'valid-success',
            function: ''},
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
            class: 'valid-success',
            function: ''},
        failed: {
            class: 'valid-failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        },
        matchPattern: /^([0-9]{2,2})\/([0-9]{2,2})\/([0-9]{4,4})$/
    }
    public checkbox = {
        checking: {class: 'valid-checking',function: ''},
        success: {
            class: 'valid-success',
            function: ''},
        failed: {
            class: 'valid-failed',
            function: ''
        },
        empty: {
            class: 'valid-empty',
            function: ''
        },
        minCount: 1
    }
}

$.fn.hpsValidate = function( options:any ){

        var v = new ValidatorConfig(options || {});
        let identifier = v.ValidationSettings.identifier + ':not(.do-not-validate):not(.validate-watching)';
        let elements = this[0].querySelectorAll(identifier);
        while(elements.length > 0){
            if (v.ValidationSettings.validateIfHidden == false && elements[0].style.display == 'none') {
                if(elements[0].classList.contains('hidden-for-multi')){

                }
                else {
                    elements[0].removeAttribute('data-validate');
                    elements = this[0].querySelectorAll(identifier);
                    continue;
                } 
            }
            elements[0].classList.add('validate-watching');
            let t = elements[0].getAttribute('data-validate');
            switch (t) {
                case 'text':
                    var va = new Validator(v[t], v.ValidationSettings);
                    va.load(elements[0]);
                    break;
                case 'mixedText':
                    var va = new Validator(v[t], v.ValidationSettings);
                    va.load(elements[0]);
                    break;
                case 'number':
                    var va = new Validator(v[t], v.ValidationSettings);
                    va.load(elements[0]);
                    break;
                case 'email':
                    var va = new Validator(v[t], v.ValidationSettings);
                    va.load(elements[0]);
                    break;
                case 'ssn':
                    var f = checkForOneOrMultipleFields(elements[0], elements[0].getAttribute('data-validate'), v[t]);
                    var va = new Validator(v[t], v.ValidationSettings);
                    va.load(elements[0], f);
                    break;
                case 'phone':
                    var p = checkForOneOrMultipleFields(elements[0], elements[0].getAttribute('data-validate'), v[t]);
                    var va = new Validator(v[t], v.ValidationSettings);
                    va.load(elements[0], p);
                    break;
                case 'date':
                    var d = checkForOneOrMultipleFields(elements[0], elements[0].getAttribute('data-validate'), v[t]);
                    var va = new Validator(v[t], v.ValidationSettings);
                    va.load(elements[0], d);
                    break;
                case 'checkbox':
                    new CheckBoxValidator(elements[0], v[t], v.ValidationSettings);
            }
            elements = this[0].querySelectorAll(identifier);
        }
};
class Validator {
    private element: any;
    private rules: any;
    private settings: any;
    private altElement: any;
    constructor(rules: any, settings: any){
        this.rules = rules;
        this.settings = settings;
    }
    public load = (el: any, altElement?: any):void => {
        var that = this;
        this.element = el;
        if(this.settings.disableSubmit) disableSubmit();
        if(altElement) this.altElement = altElement;
        let elToTest = this.altElement || this.element;
        elToTest.addEventListener('keyup',function(){that.validate()});
        elToTest.addEventListener('click',function(){that.validate()});
        if(this.settings.runOnLoad) this.validate();
        if(this.rules.keyUp){
            elToTest.addEventListener('keyup', function(){that.rules.keyUp(el)});
        }
    }
    private validate = ():void => {
        var re = new RegExp(this.rules.matchPattern);
        let elToTest = this.altElement || this.element;
        elToTest.parentNode.classList.add(this.rules.checking.class);
        if(elToTest.value == '' && this.settings.validateIfEmpty){
            if(elToTest.tagName == 'SELECT') {this.fail();}
            else {this.empty();}
        }
        else{
            elToTest.value != '' && re.test(elToTest.value) ? this.success() : this.fail();
        }
    }
    private empty = ():void => {
        let elToTest = this.altElement || this.element;
        if(elToTest.classList.contains('no-validate-if-empty')){
            UpdateFieldValidationStatus(elToTest, this.rules, this.settings, true, false, false); 
        } else {
            UpdateFieldValidationStatus(elToTest, this.rules, this.settings, true, false, false);  
        }     
    }
    private success = ():void => {
        var that = this;
        let elToTest = this.altElement || this.element;
        UpdateFieldValidationStatus(elToTest, this.rules, this.settings, false, true, false); 
        this.element.addEventListener('blur',function(){that.clear()});
    }
    private fail = ():void => {
        let elToTest = this.altElement || this.element;
        UpdateFieldValidationStatus(elToTest, this.rules, this.settings, false, false, true); 
    }
    private clear = ():void => {
        this.element.parentNode.classList.remove(this.rules.success.class);
        if(this.altElement) this.altElement.parentNode.classList.remove(this.rules.success.class);
    }
}

class CheckBoxValidator {
    private _rules: any;
    private _settings: any;
    private _container: any;
    constructor(container: any, rules: any, settings: any){
        this._rules = rules;
        this._settings = settings;
        this._container = container;
        this._getElements();
    }
    private _getElements = (): void => {
        let that = this;
        let elements = this._container.querySelectorAll('[type=checkbox]');
        for(let d = 0; d < elements.length; ++d){
            elements[d].addEventListener('change',function(){that._checkIfAnySelected();})
        }
    }
    private _checkIfAnySelected = (): void => {
        let selected = false;
        let checkedItems = this._container.querySelectorAll("[type=checkbox]");
        for(let c = 0;c<checkedItems.length;++c){
            if(checkedItems[c].checked){
                selected = true;
                this.success();
                return;
            }
        }
        this.fail();

    }
    private empty = ():void => {
        this._container.parentNode.classList.remove(this._rules.checking.class);
        this._container.parentNode.classList.remove(this._rules.success.class);
        this._container.parentNode.classList.remove(this._rules.failed.class);
        this._container.parentNode.classList.add(this._rules.empty.class);
        this._container.classList.remove('validated');
        
    }
    private success = ():void => {
        this._container.parentNode.classList.remove(this._rules.empty.class);
        this._container.parentNode.classList.remove(this._rules.checking.class);
        this._container.parentNode.classList.remove(this._rules.failed.class);
        this._container.parentNode.classList.add(this._rules.success.class);
        this._container.classList.add('validated');
        checkForAllValidated(this._settings);
        document.addEventListener('click',this.clear);
        //this._container.addEventListener('blur',function(){that.clear()});

    }
    private fail = ():void => {
        this._container.parentNode.classList.remove(this._rules.empty.class);
        this._container.parentNode.classList.remove(this._rules.checking.class);
        this._container.parentNode.classList.remove(this._rules.success.class);
        this._container.parentNode.classList.add(this._rules.failed.class);
        this._container.classList.remove('validated');
        checkForAllValidated(this._settings);
    }
    private clear = ():void => {
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

//This will chekc to see if fields are using one field or multiple (ie. SSN or phone number)
var checkForOneOrMultipleFields = function(el: any, type: string, rules: any){
    if(el.classList.contains('do-not-validate')) {
        console.log('contains dnv');
        return; //This should prevent validating the rest of the multiple fields
    }
    let p = el.parentNode;
    var parentWrapper = getParentWrapperElement(p);
    let l = parentWrapper.querySelectorAll('[data-validate]');
    let count = parentWrapper.querySelectorAll('[data-validate]').length;
    if(count > 1){
        let e = document.createElement('input');
        e.setAttribute('data-validate',type);
        e.style.display = 'none';
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

var end = function(){
    console.log('really want to stop everything');
}

var getParentWrapperElement = function(el: any): any{
    let parent;
    if(el.classList.contains('input-wrapper')) return el;
    while(el){
        parent = el.parentNode;
        if(el.classList.contains('input-wrapper')) return el;
        el = parent;
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

// Review all fields, if all are validated enable submit else disable
var checkForAllValidated = (settings: any) => {
    var b = document.querySelectorAll(settings.identifier);
    var v = true;
    for(var x = 0; x < b.length; ++x){
        if (b[x].classList.contains('validated')){
        } else {
            v = false;
            if(settings.disableSubmit){
                disableSubmit();
            }
            return;
        }
    }
    enableSubmit();
}
var disableSubmit = ():void => {
    var b = document.getElementsByClassName('submit');
    for(var x = 0; x < b.length; ++x){
        b[x].setAttribute('disabled','disabled');
    }
}
var enableSubmit = ():void => {
    var b = document.getElementsByClassName('submit');
    for(var x = 0; x < b.length; ++x){
        b[x].removeAttribute('disabled');
    }
}

// Set Success, Fail and clear
var UpdateFieldValidationStatus = (el: any, rules:any, settings: any, empty: boolean, success: boolean, fail: boolean):void => {
        let parentWrapper = getParentWrapperElement(el);
        success ? parentWrapper.classList.add(rules.success.class) : parentWrapper.classList.remove(rules.success.class);
        if (success) el.classList.add('validated');
        empty ? parentWrapper.classList.add(rules.empty.class) : parentWrapper.classList.remove(rules.empty.class);
        fail ? parentWrapper.classList.add(rules.failed.class) : parentWrapper.classList.remove(rules.failed.class);
        if(empty || fail) el.classList.remove('validated');
        checkForAllValidated(settings);
}

var empty = ():void => {

}

var success = ():void => {
    
}

var fail = ():void => {
    
}

(function () {
    // var sel = document.getElementById('bottom');
    // validate({
    //     selector:sel
    // });
    $('#top').hpsValidate({
        runOnLoad:'true'
    });
})();




