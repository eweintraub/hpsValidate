/// <reference path="index.d.ts" />
var Config = (function () {
    function Config() {
    }
    Config.ver = function () {
        console.log(this.version);
    };
    return Config;
}());
Config.version = '0.3.8';
var ValidatorConfig = (function () {
    function ValidatorConfig(r) {
        this.ValidationSettings = {
            identifier: '',
            runOnLoad: true,
            validateIfHidden: false,
            disableSubmit: true,
            validateOnLoadIfPopulated: true,
            validateIfEmpty: true
        };
        this.text = {
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
            matchPattern: /^[A-Za-z]{1,}$/
        };
        this.mixedText = {
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
            matchPattern: /^(.+){1,}$/
        };
        this.number = {
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
            matchPattern: /^[0-9]{1,}$/
        };
        this.zipCode = {
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
            matchPattern: /^[0-9]{5}$/
        };
        this.email = {
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
            matchPattern: /^([a-zA-Z0-9_\-\.]*)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,5})$/
        };
        this.ssn = {
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
                "function": '',
                message: 'This field must be populated'
            },
            matchPattern: /^([0-9]{9,9})$/
        };
        this.phone = {
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
            matchPattern: /^([0-9]{10,10})$/
        };
        this.date = {
            checking: { "class": 'valid-checking', "function": '' },
            success: {
                "class": 'success',
                "function": ''
            },
            failed: {
                "class": 'failed',
                "function": ''
            },
            empty: {
                "class": 'valid-empty',
                "function": ''
            },
            matchPattern: /^([0-9]{2,2})\/([0-9]{2,2})\/([0-9]{4,4})$/
        };
        this.stateAbbr = {
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
            matchPattern: /^([A-Z]{2})$/
        };
        this.taxId = {
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
        this.properName = {
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
        this.notNull = {
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
        this.checkbox = {
            checking: { "class": 'valid-checking', "function": '' },
            success: {
                "class": 'success',
                "function": ''
            },
            failed: {
                "class": 'failed',
                "function": ''
            },
            empty: {
                "class": 'valid-empty',
                "function": ''
            },
            minCount: 1
        };
        this.radioButton = {
            checking: { "class": 'valid-checking', "function": '' },
            success: {
                "class": 'success',
                "function": ''
            },
            failed: {
                "class": 'failed',
                "function": ''
            },
            empty: {
                "class": 'valid-empty',
                "function": ''
            },
            minCount: 1
        };
        this.dropdown = {
            checking: { "class": 'valid-checking', "function": '' },
            success: {
                "class": 'success',
                "function": ''
            },
            failed: {
                "class": 'failed',
                "function": ''
            },
            empty: {
                "class": 'valid-empty',
                "function": ''
            }
        };
        this.custom = {
            checking: { "class": 'valid-checking', "function": '' },
            success: {
                "class": 'success',
                "function": ''
            },
            failed: {
                "class": 'failed',
                "function": ''
            },
            empty: {
                "class": 'valid-empty',
                "function": ''
            }
        };
        // Getting TRUE/FALSE settings
        if (r.runOnLoad === 'true') {
            this.ValidationSettings.runOnLoad = true;
        }
        else if (r.runOnLoad === 'false') {
            this.ValidationSettings.runOnLoad = false;
        }
        if (r.disableSubmit === 'true') {
            this.ValidationSettings.disableSubmit = true;
        }
        else if (r.disableSubmit === 'false') {
            this.ValidationSettings.disableSubmit = false;
        }
        if (r.validateIfHidden === 'true') {
            this.ValidationSettings.validateIfHidden = true;
        }
        else if (r.validateIfHidden === 'false') {
            this.ValidationSettings.validateIfHidden = false;
        }
        if (r.validateIfEmpty === 'true') {
            this.ValidationSettings.validateIfEmpty = true;
        }
        else if (r.validateIfEmpty === 'false') {
            this.ValidationSettings.validateIfEmpty = false;
        }
        if (r.validateOnLoadIfPopulated === 'true') {
            this.ValidationSettings.validateOnLoadIfPopulated = true;
        }
        else if (r.validateOnLoadIfPopulated === 'false') {
            this.ValidationSettings.validateOnLoadIfPopulated = false;
        }
        this.ValidationSettings.identifier = r.identifier || '[data-validate]';
        // GET and set the checkbox settings
        if (r.checkbox) {
            if (r.checkbox.checking) {
                if (r.checkbox.checking["class"]) {
                    this.checkbox.checking["class"] = r.checkbox.checking["class"];
                }
                // if(r.checkbox.checking.function){
                //     this.checkbox.checking.function = r.checkbox.checking.function;
                // }
            }
            if (r.checkbox.success) {
                if (r.checkbox.success["class"]) {
                    this.checkbox.success["class"] = r.checkbox.success["class"];
                }
                // if(r.checkbox.success.function){
                //     this.checkbox.success.function = r.checkbox.success.function;
                // }
            }
            if (r.checkbox.failed) {
                if (r.checkbox.failed["class"]) {
                    this.checkbox.failed["class"] = r.checkbox.failed["class"];
                }
                // if(r.checkbox.failed.function){
                //     this.checkbox.failed.function = r.checkbox.failed.function;
                // }
            }
            if (r.checkbox.empty) {
                if (r.checkbox.empty["class"]) {
                    this.checkbox.empty["class"] = r.checkbox.empty["class"];
                }
                // if(r.checkbox.empty.function){
                //     this.checkbox.empty.function = r.checkbox.empty.function;
                // }
            }
        }
    }
    return ValidatorConfig;
}());
$.fn.hpsValidate = function (options) {
    //console.log(options);
    if (!this) {
        console.error('Unable to find hpsValidate target');
    }
    var v = new ValidatorConfig(options || {});
    if (options == 'validate') {
        ValidateElement(this[0], v);
    }
    else if (options == 'update') {
        AddValidationToElement(this[0], v);
        checkForAllValidated(this[0], v.ValidationSettings);
    }
    else if (options == 'remove') {
        //createValidationRemover(this[0]);
    }
    else {
        if (v.ValidationSettings.disableSubmit)
            disableSubmit(this[0]);
        AddValidationToElement(this[0], v);
    }
};
var ValidateElement = function (target, v) {
    var identifier = v.ValidationSettings.identifier + ':not(.do-not-validate)';
    var elements = target.querySelectorAll(identifier);
    for (var x = 0; x < elements.length; ++x) {
        if (v.ValidationSettings.validateIfHidden == false && $(elements[0]).is(':hidden')) {
            if (elements[0].classList.contains('hidden-for-multi')) {
            }
            else {
                //elements[x].removeAttribute('data-validate');
                //continue;
            }
        }
        createValidator(v, elements[x], true);
    }
};
var AddValidationToElement = function (target, v) {
    var identifier = v.ValidationSettings.identifier + ':not(.do-not-validate):not(.validate-watching)';
    if (target) {
        var elements = target.querySelectorAll(identifier);
        while (elements.length > 0) {
            if (v.ValidationSettings.validateIfHidden == false && $(elements[0]).is(':hidden')) {
                if (elements[0].classList.contains('hidden-for-multi') || (elements[0].classList.contains('validate-if-hidden'))) {
                }
                else {
                    //elements[0].removeAttribute('data-validate');
                    elements = target.querySelectorAll(identifier);
                }
            }
            createValidator(v, elements[0]);
            elements = target.querySelectorAll(identifier);
        }
        handlePageLoad();
    }
};
var createValidator = function (v, element, validateNow) {
    var t = element.getAttribute('data-validate');
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
            var v1 = v[t];
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
var Validator = (function () {
    function Validator(rules, settings) {
        var _this = this;
        this.load = function (el, altElement) {
            var that = _this;
            _this.element = el;
            if (altElement)
                _this.altElement = altElement;
            var elToTest = _this.altElement || _this.element;
            _this.container = getParentWrapperElement(elToTest) || _this.element.parentNode;
            elToTest.classList.add('validate-watching');
            elToTest.addEventListener('input', function () { that.validate(true); });
            elToTest.addEventListener('click', function () { that.validate(true); });
            elToTest.addEventListener('change', function () { that.validate(true); });
            elToTest.addEventListener('blur', function () { that.validate(true); });
            _this.lblField = getLabelElement(elToTest);
            _this.emptyMsg = elToTest.getAttribute('data-error-empty') || 'This field is required';
            _this.failedMsg = elToTest.getAttribute('data-error-failed') || 'Please correct this field';
            _this.settings.runOnLoad ? _this.validate(true) : _this.validate(false); // If runOnLoad is set to 'true' then the inputs will be decorated on load
            if (_this.rules.keyUp) {
                elToTest.addEventListener('keyup', function () { that.rules.keyUp(el); });
            }
        };
        this.validate = function (validateImmediately, el, altElement) {
            var re = new RegExp(_this.rules.matchPattern);
            if (el)
                _this.element = el;
            if (altElement)
                _this.altElement = altElement;
            var elToTest = _this.altElement || _this.element;
            try {
                elToTest.value = trimValue(elToTest);
            }
            catch (e) {
                console.log(e);
            }
            try {
                _this.container.classList.add(_this.rules.checking["class"]);
            }
            catch (e) {
                console.log(e);
            }
            if ($(_this.container).is(':visible') || elToTest.classList.contains('validate-if-hidden')) {
                if (elToTest.hasAttribute('data-validate-optional')) {
                    if (elToTest.value == '' && _this.settings.validateIfEmpty) {
                        if (elToTest.tagName == 'SELECT') {
                            if (!elToTest.selectedOptions.length || elToTest.selectedOptions.length < 1 || elToTest.selectedOptions[0].text == '') {
                                _this.success(validateImmediately);
                            }
                            else {
                                _this.success(validateImmediately);
                            }
                        }
                        else {
                            _this.success(validateImmediately);
                        }
                    }
                    else {
                        elToTest.value != '' && re.test(elToTest.value) ? _this.success(validateImmediately) : _this.fail(validateImmediately);
                    }
                }
                else {
                    if (elToTest.value == '' && _this.settings.validateIfEmpty) {
                        if (elToTest.tagName == 'SELECT') {
                            if (!elToTest.selectedOptions.length || elToTest.selectedOptions.length < 1 || elToTest.selectedOptions[0].text == '') {
                                _this.empty(validateImmediately);
                            }
                            else {
                                _this.success(validateImmediately);
                            }
                        }
                        else {
                            _this.empty(validateImmediately);
                        }
                    }
                    else {
                        elToTest.value != '' && re.test(elToTest.value) ? _this.success(validateImmediately) : _this.fail(validateImmediately);
                    }
                }
            }
        };
        this.empty = function (validateImmediately) {
            var elToTest = _this.altElement || _this.element;
            if (_this.lblField) {
                addErrorMessage(_this.lblField, _this.emptyMsg);
            }
            if (elToTest.classList.contains('no-validate-if-empty')) {
                UpdateFieldValidationStatus(elToTest, _this.rules, _this.settings, true, false, false, validateImmediately);
            }
            else {
                elToTest.setAttribute('data-message', _this.rules.empty.message);
                UpdateFieldValidationStatus(elToTest, _this.rules, _this.settings, true, false, false, validateImmediately);
            }
        };
        this.success = function (validateImmediately) {
            var that = _this;
            var elToTest = _this.altElement || _this.element;
            if (_this.lblField) {
                addErrorMessage(_this.lblField, "");
            }
            elToTest.removeAttribute('data-message');
            UpdateFieldValidationStatus(elToTest, _this.rules, _this.settings, false, true, false, validateImmediately);
            if (_this.container) {
                var inputs = _this.container.querySelectorAll('input');
                if (inputs.length > 1) {
                    for (var i = 0; i < inputs.length; ++i) {
                        inputs[i].addEventListener('blur', function () { that.clear(); });
                        inputs[i].addEventListener('focusout', function () { that.clear(); });
                    }
                }
            }
            _this.element.addEventListener('blur', function () { that.clear(); });
            _this.element.addEventListener('focusout', function () { that.clear(); });
        };
        this.fail = function (validateImmediately) {
            var elToTest = _this.altElement || _this.element;
            if (_this.lblField) {
                addErrorMessage(_this.lblField, _this.failedMsg);
            }
            elToTest.setAttribute('data-message', _this.rules.failed.message);
            UpdateFieldValidationStatus(elToTest, _this.rules, _this.settings, false, false, true, validateImmediately);
        };
        this.clear = function () {
            if (_this.container) {
                _this.container.classList.remove(_this.rules.success["class"]);
                if (_this.altElement)
                    _this.container.classList.remove(_this.rules.success["class"]);
            }
        };
        this.rules = rules;
        this.settings = settings;
    }
    return Validator;
}());
var CheckBoxValidator = (function () {
    function CheckBoxValidator(element, rules, settings) {
        var _this = this;
        this.ConfigureSubmitButton = function () {
            if (_this._settings.disableSubmit)
                disableSubmit(_this._element);
            _this._getElements();
        };
        this._getElements = function () {
            var that = _this;
            var elements = _this._container.querySelectorAll('[type=checkbox]');
            for (var d = 0; d < elements.length; ++d) {
                elements[d].classList.add('validate-watching');
                elements[d].addEventListener('change', function () { that._checkIfAnySelected(); });
                elements[d].addEventListener('click', function () { that._checkIfAnySelected(); });
            }
            _this._checkIfAnySelected(false);
        };
        this._checkIfAnySelected = function (validateImmediately) {
            var selected = false;
            var checkedItems = _this._container.querySelectorAll("[type=checkbox]");
            for (var c = 0; c < checkedItems.length; ++c) {
                if (checkedItems[c].checked) {
                    selected = true;
                    _this.success(validateImmediately);
                    return;
                }
            }
            _this.fail();
        };
        this.empty = function (validateImmediately) {
            _this._container.parentNode.classList.remove(_this._rules.checking["class"]);
            _this._container.parentNode.classList.remove(_this._rules.success["class"]);
            _this._container.parentNode.classList.remove(_this._rules.failed["class"]);
            if (validateImmediately)
                _this._container.parentNode.classList.add(_this._rules.empty["class"]);
            _this._container.classList.remove('validated');
        };
        this.success = function (validateImmediately) {
            _this._container.parentNode.classList.remove(_this._rules.empty["class"]);
            _this._container.parentNode.classList.remove(_this._rules.checking["class"]);
            _this._container.parentNode.classList.remove(_this._rules.failed["class"]);
            if (validateImmediately)
                _this._container.parentNode.classList.add(_this._rules.success["class"]);
            var checkedItems = _this._container.querySelectorAll("[type=checkbox]");
            for (var c = 0; c < checkedItems.length; ++c) {
                checkedItems[c].classList.add('validated');
            }
            _this._container.classList.add('validated');
            checkForAllValidated(_this._element, _this._settings);
            document.addEventListener('click', _this.clear);
            //this._container.addEventListener('blur',function(){that.clear()});
        };
        this.fail = function (validateImmediately) {
            if (validateImmediately)
                _this._container.parentNode.classList.add(_this._rules.empty["class"]);
            _this._container.parentNode.classList.remove(_this._rules.checking["class"]);
            _this._container.parentNode.classList.remove(_this._rules.success["class"]);
            var checkedItems = _this._container.querySelectorAll("[type=checkbox]");
            for (var c = 0; c < checkedItems.length; ++c) {
                checkedItems[c].classList.remove('validated');
            }
            _this._container.classList.remove('validated');
            checkForAllValidated(_this._element, _this._settings);
        };
        this.clear = function () {
            var a = event.target;
            var els = [];
            while (a) {
                els.unshift(a);
                a = a.parentNode;
            }
            if (els.indexOf(_this._container) < 0) {
                _this._container.parentNode.classList.remove(_this._rules.success["class"]);
            }
        };
        this._rules = rules;
        this._settings = settings;
        this._element = element;
        this._container = getParentWrapperElement(element);
        this.ConfigureSubmitButton();
    }
    return CheckBoxValidator;
}());
var RadioButtonValidator = (function () {
    function RadioButtonValidator(element, rules, settings) {
        var _this = this;
        this.ConfigureSubmitButton = function () {
            if (_this._settings.disableSubmit)
                disableSubmit(_this._element);
            _this._getElements();
        };
        this._getElements = function () {
            var that = _this;
            var elements = _this._container.querySelectorAll('[type=radio]');
            for (var d = 0; d < elements.length; ++d) {
                elements[d].classList.add('validate-watching');
                elements[d].addEventListener('change', function () { that._checkIfAnySelected(); });
                elements[d].addEventListener('click', function () { that._checkIfAnySelected(); });
            }
            _this._checkIfAnySelected(false);
        };
        this._checkIfAnySelected = function (validateImmediately) {
            var selected = false;
            var checkedItems = _this._container.querySelectorAll("[type=radio]");
            for (var c = 0; c < checkedItems.length; ++c) {
                if (checkedItems[c].checked) {
                    selected = true;
                    _this.success(validateImmediately);
                    return;
                }
            }
            _this.fail();
        };
        this.empty = function (validateImmediately) {
            _this._container.parentNode.classList.remove(_this._rules.checking["class"]);
            _this._container.parentNode.classList.remove(_this._rules.success["class"]);
            _this._container.parentNode.classList.remove(_this._rules.failed["class"]);
            if (!validateImmediately)
                _this._container.parentNode.classList.add(_this._rules.empty["class"]);
            _this._container.classList.remove('validated');
        };
        this.success = function (validateImmediately) {
            _this._container.parentNode.classList.remove(_this._rules.empty["class"]);
            _this._container.parentNode.classList.remove(_this._rules.checking["class"]);
            _this._container.parentNode.classList.remove(_this._rules.failed["class"]);
            if (!validateImmediately)
                _this._container.parentNode.classList.add(_this._rules.success["class"]);
            var checkedItems = _this._container.querySelectorAll("[type=radio]");
            for (var c = 0; c < checkedItems.length; ++c) {
                checkedItems[c].classList.add('validated');
            }
            _this._container.classList.add('validated');
            checkForAllValidated(_this._element, _this._settings);
            document.addEventListener('click', _this.clear);
            //this._container.addEventListener('blur',function(){that.clear()});
        };
        this.fail = function (validateImmediately) {
            _this._container.parentNode.classList.add(_this._rules.empty["class"]);
            _this._container.parentNode.classList.remove(_this._rules.checking["class"]);
            _this._container.parentNode.classList.remove(_this._rules.success["class"]);
            if (!validateImmediately)
                _this._container.parentNode.classList.add(_this._rules.failed["class"]);
            var checkedItems = _this._container.querySelectorAll("[type=radio]");
            for (var c = 0; c < checkedItems.length; ++c) {
                checkedItems[c].classList.remove('validated');
            }
            _this._container.classList.remove('validated');
            //checkForAllValidated(this._element, this._settings);
            disableSubmit(_this._element);
        };
        this.clear = function () {
            var a = event.target;
            var els = [];
            while (a) {
                els.unshift(a);
                a = a.parentNode;
            }
            if (els.indexOf(_this._container) < 0) {
                _this._container.parentNode.classList.remove(_this._rules.success["class"]);
            }
        };
        this._rules = rules;
        this._settings = settings;
        this._element = element;
        this._container = getParentWrapperElement(element);
        this.ConfigureSubmitButton();
    }
    return RadioButtonValidator;
}());
// Single use or specific functions
// Add tooltip from data-message
var addToolTip = function (element) {
};
var trimValue = function (el) {
    var max = el.getAttribute('data-max-length');
    if (max) {
        return el.value.trim().substr(0, max);
    }
    else {
        return el.value;
    }
};
//This will chekc to see if fields are using one field or multiple (ie. SSN or phone number)
var checkForOneOrMultipleFields = function (el, type, rules) {
    if (el.classList.contains('do-not-validate')) {
        return; //This should prevent validating the rest of the multiple fields
    }
    var p = el.parentNode;
    var parentWrapper = getParentWrapperElement(p);
    var l = parentWrapper.querySelectorAll('[data-validate]');
    var count = parentWrapper.querySelectorAll('[data-validate]').length;
    if (count > 1) {
        var e_1 = document.createElement('input');
        if (el.hasAttribute('data-validate-optional')) {
            e_1.setAttribute('data-validate-optional', 'true');
        }
        e_1.setAttribute('data-validate', type);
        e_1.style.display = 'none';
        e_1.classList.add('hidden-for-multi');
        var last = count - 1;
        l[last].parentNode.appendChild(e_1);
        for (var x = 0; x < count; ++x) {
            l[x].removeAttribute('data-validate');
            l[x].parentNode.classList.remove(rules.checking["class"]);
            l[x].parentNode.classList.remove(rules.success["class"]);
            l[x].parentNode.classList.remove(rules.failed["class"]);
            l[x].classList.add('do-not-validate');
            l[x].addEventListener('keyup', function () { concatinateInHiddenField(l, e_1); });
            l[x].addEventListener('click', function () { concatinateInHiddenField(l, e_1); });
        }
        return e_1;
    }
    return false;
};
var guid = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4();
};
// var end = function(){
// }
var getParentWrapperElement = function (el) {
    var parent;
    if (el.classList.contains('input-wrapper'))
        return el;
    while (el) {
        parent = el.parentNode;
        if (el.classList) {
            if (el.classList.contains('input-wrapper'))
                return el;
            el = parent;
        }
    }
};
//Find parent Form
var getParentForm = function (element) {
    var parent;
    var el = element;
    if (el) {
        if (el.tagName === 'FORM')
            return el;
        while (el) {
            parent = el.parentNode;
            if (el.tagName === 'FORM')
                return el;
            if (el.tagName === 'BODY')
                return element;
            el = parent;
        }
    }
};
//Get element's label
var getLabelElement = function (element) {
    var prev;
    var el = element;
    if (el) {
        var parent_1 = getParentWrapperElement(element);
        while (parent_1 && parent_1 != null) {
            prev = parent_1.previousElementSibling;
            if (prev) {
                if (prev.tagName === 'BODY') {
                    console.error('No label found for ', element);
                    return null;
                }
                if (prev.hasAttribute('data-label')) {
                    return prev;
                }
            }
            parent_1 = prev;
        }
    }
};
// create value to be validated
var concatinateInHiddenField = function (fields, el) {
    var v = '';
    for (var x = 0; x < fields.length; ++x) {
        v += fields[x].value;
    }
    el.value = v;
    el.click();
};
var handlePageLoad = function () {
    // this function will touch each element.
    $('.validate-watching, .do-not-validate').each(function () {
        if (!$(this).hasClass('validate-if-hidden')) {
            if ($(this).val() != '' || $(this).val()) {
                $(this).click();
                $(this).closest('.input-wrapper').removeClass('valid-success');
            }
        }
    });
};
// Review all fields, if all are validated enable submit else disable
var checkForAllValidated = function (element, settings, saveFailed) {
    var thisForm = getParentForm(element);
    if (thisForm) {
        var b = thisForm.querySelectorAll(settings.identifier);
        var v = true;
        for (var x = 0; x < b.length; ++x) {
            if (b[x].classList.contains('validated') || b[x].classList.contains('do-not-validate')) {
                if (b[x].hasAttribute('data-always-invalid')) {
                    v = false;
                    window['failedElement'] = b[x];
                    if (settings.disableSubmit) {
                        disableSubmit(element);
                    }
                    return;
                }
            }
            else {
                if (jQuery(b[x]).is(':visible') || settings.validateIfHidden || b[x].classList.contains('validate-if-hidden') || b[x].classList.contains('hidden-for-multi')) {
                    v = false;
                    window['failedElement'] = b[x];
                    if (settings.disableSubmit) {
                        disableSubmit(element);
                    }
                    return;
                }
            }
        }
        enableSubmit(element);
    }
};
// Utility function to show fields that are failing
var getFailedElement = function () { return console.log(window['failedElement']); };
var disableSubmit = function (element) {
    var thisForm = document;
    if (element) {
        thisForm = getParentForm(element);
    }
    var b = thisForm.querySelectorAll('[type=submit], .submit');
    for (var x = 0; x < b.length; ++x) {
        if (jQuery(b[x]).is(":visible")) {
            b[x].setAttribute('disabled', 'disabled');
        }
    }
};
var enableSubmit = function (element) {
    var thisForm = document;
    if (element) {
        thisForm = getParentForm(element);
    }
    var b = thisForm.querySelectorAll('[type=submit], .submit');
    for (var x = 0; x < b.length; ++x) {
        if (jQuery(b[x]).is(":visible")) {
            b[x].removeAttribute('disabled');
        }
    }
};
// Set Success, Fail and clear
var UpdateFieldValidationStatus = function (el, rules, settings, empty, success, fail, validateImmediately) {
    var parentWrapper = getParentWrapperElement(el);
    parentWrapper.classList.remove(rules.checking["class"]);
    if (success) {
        el.classList.add('validated');
        if (validateImmediately)
            parentWrapper.classList.add(rules.success["class"]);
    }
    else {
        parentWrapper.classList.remove(rules.success["class"]);
    }
    if (empty) {
        if (validateImmediately)
            parentWrapper.classList.add(rules.empty["class"]);
    }
    else {
        parentWrapper.classList.remove(rules.empty["class"]);
    }
    if (fail) {
        parentWrapper.classList.add(rules.failed["class"]);
    }
    else {
        parentWrapper.classList.remove(rules.failed["class"]);
    }
    if (empty || fail)
        el.classList.remove('validated');
    checkForAllValidated(el, settings);
};
var addErrorMessage = function (element, message) {
    //element.setAttribute('title',message);
    element.setAttribute('data-original-title', message);
    if ($(element).tooltip) {
        $(element).tooltip({
            placement: 'right',
            trigger: 'hover'
        });
    }
};
