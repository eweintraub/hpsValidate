/// <reference path="index.d.ts" />
var Config = (function () {
    function Config() {
    }
    Config.ver = function () {
        console.log(this.version);
    };
    return Config;
}());
Config.version = '0.1.6';
var ValidatorConfig = (function () {
    function ValidatorConfig(r) {
        this.ValidationSettings = {
            identifier: '',
            runOnLoad: true,
            validateIfHidden: false,
            disableSubmit: true,
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
        if (r.validateIfEmpty === 'true') {
            this.ValidationSettings.validateIfEmpty = true;
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
    console.log(options);
    var v = new ValidatorConfig(options || {});
    if (options == 'validate') {
        ValidateElement(this[0], v);
    }
    else if (options == 'update') {
        AddValidationToElement(this[0], v);
        checkForAllValidated(this[0], v.ValidationSettings);
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
};
var createValidator = function (v, element, validateNow) {
    var t = element.getAttribute('data-validate');
    switch (t) {
        case 'text':
        case 'mixedText':
        case 'number':
        case 'zipCode':
        case 'stateAbbr':
        case 'email':
        case 'dropdown':
            var va = new Validator(v[t], v.ValidationSettings);
            validateNow ? va.validate(element) : va.load(element);
            break;
        case 'ssn':
        case 'phone':
        case 'date':
            var f = checkForOneOrMultipleFields(element, element.getAttribute('data-validate'), v[t]);
            var va = new Validator(v[t], v.ValidationSettings);
            validateNow ? va.validate(element) : va.load(element, f);
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
            validateNow ? va.validate(element) : va.load(element);
            break;
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
            elToTest.classList.add('validate-watching');
            elToTest.addEventListener('keyup', function () { that.validate(); });
            elToTest.addEventListener('click', function () { that.validate(); });
            elToTest.addEventListener('change', function () { that.validate(); });
            _this.lblField = getLabelElement(elToTest);
            _this.emptyMsg = elToTest.getAttribute('data-error-empty') || 'This field is required';
            _this.failedMsg = elToTest.getAttribute('data-error-failed') || 'Please correct this field';
            if (_this.settings.runOnLoad)
                _this.validate();
            if (_this.rules.keyUp) {
                elToTest.addEventListener('keyup', function () { that.rules.keyUp(el); });
            }
        };
        this.validate = function (el, altElement) {
            var re = new RegExp(_this.rules.matchPattern);
            if (el)
                _this.element = el;
            if (altElement)
                _this.altElement = altElement;
            var elToTest = _this.altElement || _this.element;
            elToTest.parentNode.classList.add(_this.rules.checking["class"]);
            if ($(elToTest).is(':visible') || elToTest.classList.contains('validate-if-hidden')) {
                if (elToTest.value == '' && _this.settings.validateIfEmpty) {
                    if (elToTest.tagName == 'SELECT') {
                        _this.fail();
                    }
                    else {
                        _this.empty();
                    }
                }
                else {
                    elToTest.value != '' && re.test(elToTest.value) ? _this.success() : _this.fail();
                }
            }
        };
        this.empty = function () {
            var elToTest = _this.altElement || _this.element;
            if (_this.lblField) {
                addErrorMessage(_this.lblField, _this.emptyMsg);
            }
            if (elToTest.classList.contains('no-validate-if-empty')) {
                UpdateFieldValidationStatus(elToTest, _this.rules, _this.settings, true, false, false);
            }
            else {
                elToTest.setAttribute('data-message', _this.rules.empty.message);
                UpdateFieldValidationStatus(elToTest, _this.rules, _this.settings, true, false, false);
            }
        };
        this.success = function () {
            var that = _this;
            var elToTest = _this.altElement || _this.element;
            if (_this.lblField) {
                addErrorMessage(_this.lblField, "");
            }
            elToTest.removeAttribute('data-message');
            UpdateFieldValidationStatus(elToTest, _this.rules, _this.settings, false, true, false);
            _this.element.addEventListener('blur', function () { that.clear(); });
            _this.element.addEventListener('focusout', function () { that.clear(); });
        };
        this.fail = function () {
            var elToTest = _this.altElement || _this.element;
            if (_this.lblField) {
                addErrorMessage(_this.lblField, _this.failedMsg);
            }
            elToTest.setAttribute('data-message', _this.rules.failed.message);
            UpdateFieldValidationStatus(elToTest, _this.rules, _this.settings, false, false, true);
        };
        this.clear = function () {
            _this.element.parentNode.classList.remove(_this.rules.success["class"]);
            if (_this.altElement)
                _this.altElement.parentNode.classList.remove(_this.rules.success["class"]);
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
        };
        this._checkIfAnySelected = function () {
            var selected = false;
            var checkedItems = _this._container.querySelectorAll("[type=checkbox]");
            for (var c = 0; c < checkedItems.length; ++c) {
                if (checkedItems[c].checked) {
                    selected = true;
                    _this.success();
                    return;
                }
            }
            _this.fail();
        };
        this.empty = function () {
            _this._container.parentNode.classList.remove(_this._rules.checking["class"]);
            _this._container.parentNode.classList.remove(_this._rules.success["class"]);
            _this._container.parentNode.classList.remove(_this._rules.failed["class"]);
            _this._container.parentNode.classList.add(_this._rules.empty["class"]);
            _this._container.classList.remove('validated');
        };
        this.success = function () {
            _this._container.parentNode.classList.remove(_this._rules.empty["class"]);
            _this._container.parentNode.classList.remove(_this._rules.checking["class"]);
            _this._container.parentNode.classList.remove(_this._rules.failed["class"]);
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
        this.fail = function () {
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
        };
        this._checkIfAnySelected = function () {
            var selected = false;
            var checkedItems = _this._container.querySelectorAll("[type=radio]");
            for (var c = 0; c < checkedItems.length; ++c) {
                if (checkedItems[c].checked) {
                    selected = true;
                    _this.success();
                    return;
                }
            }
            _this.fail();
        };
        this.empty = function () {
            _this._container.parentNode.classList.remove(_this._rules.checking["class"]);
            _this._container.parentNode.classList.remove(_this._rules.success["class"]);
            _this._container.parentNode.classList.remove(_this._rules.failed["class"]);
            _this._container.parentNode.classList.add(_this._rules.empty["class"]);
            _this._container.classList.remove('validated');
        };
        this.success = function () {
            _this._container.parentNode.classList.remove(_this._rules.empty["class"]);
            _this._container.parentNode.classList.remove(_this._rules.checking["class"]);
            _this._container.parentNode.classList.remove(_this._rules.failed["class"]);
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
        this.fail = function () {
            _this._container.parentNode.classList.add(_this._rules.empty["class"]);
            _this._container.parentNode.classList.remove(_this._rules.checking["class"]);
            _this._container.parentNode.classList.remove(_this._rules.success["class"]);
            _this._container.parentNode.classList.add(_this._rules.failed["class"]);
            var checkedItems = _this._container.querySelectorAll("[type=radio]");
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
    return RadioButtonValidator;
}());
// Single use or specific functions
// Add tooltip from data-message
var addToolTip = function (element) {
};
//This will chekc to see if fields are using one field or multiple (ie. SSN or phone number)
var checkForOneOrMultipleFields = function (el, type, rules) {
    if (el.classList.contains('do-not-validate')) {
        console.log('contains dnv');
        return; //This should prevent validating the rest of the multiple fields
    }
    var p = el.parentNode;
    var parentWrapper = getParentWrapperElement(p);
    var l = parentWrapper.querySelectorAll('[data-validate]');
    var count = parentWrapper.querySelectorAll('[data-validate]').length;
    if (count > 1) {
        var e_1 = document.createElement('input');
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
var end = function () {
    console.log('really want to stop everything');
};
var getParentWrapperElement = function (el) {
    var parent;
    if (el.classList.contains('input-wrapper'))
        return el;
    while (el) {
        parent = el.parentNode;
        if (el.classList.contains('input-wrapper'))
            return el;
        el = parent;
    }
};
//Find parent Form
var getParentForm = function (element) {
    var parent;
    var el = element;
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
};
//Get element's label
var getLabelElement = function (element) {
    var prev;
    var el = element;
    var parent = getParentWrapperElement(element);
    while (parent && parent != null) {
        prev = parent.previousElementSibling;
        if (prev) {
            if (prev.tagName === 'BODY') {
                console.error('No label found for ', element);
                return null;
            }
            if (prev.hasAttribute('data-label')) {
                return prev;
            }
        }
        parent = prev;
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
// Review all fields, if all are validated enable submit else disable
var checkForAllValidated = function (element, settings) {
    var thisForm = getParentForm(element);
    var b = thisForm.querySelectorAll(settings.identifier);
    var v = true;
    for (var x = 0; x < b.length; ++x) {
        if (b[x].classList.contains('validated') || b[x].classList.contains('do-not-validate')) {
        }
        else {
            if (jQuery(b[x]).is(':visible') || settings.validateIfHidden) {
                v = false;
                if (settings.disableSubmit) {
                    disableSubmit(element);
                }
                return;
            }
        }
    }
    enableSubmit(element);
};
var disableSubmit = function (element) {
    var thisForm = document;
    if (element) {
        thisForm = getParentForm(element);
    }
    var b = thisForm.querySelectorAll('[type=submit]');
    for (var x = 0; x < b.length; ++x) {
        if (jQuery(b[x]).is(":visible")) {
            b[x].setAttribute('disabled', 'disabled');
        }
    }
};
var enableSubmit = function (element) {
    var thisForm = getParentForm(element);
    var b = thisForm.querySelectorAll('[type=submit]');
    for (var x = 0; x < b.length; ++x) {
        if (jQuery(b[x]).is(":visible")) {
            b[x].removeAttribute('disabled');
        }
    }
};
// Set Success, Fail and clear
var UpdateFieldValidationStatus = function (el, rules, settings, empty, success, fail) {
    var parentWrapper = getParentWrapperElement(el);
    parentWrapper.classList.remove(rules.checking["class"]);
    success ? parentWrapper.classList.add(rules.success["class"]) : parentWrapper.classList.remove(rules.success["class"]);
    if (success)
        el.classList.add('validated');
    empty ? parentWrapper.classList.add(rules.empty["class"]) : parentWrapper.classList.remove(rules.empty["class"]);
    fail ? parentWrapper.classList.add(rules.failed["class"]) : parentWrapper.classList.remove(rules.failed["class"]);
    if (empty || fail)
        el.classList.remove('validated');
    checkForAllValidated(el, settings);
};
var addErrorMessage = function (element, message) {
    element.setAttribute('title', message);
};
var empty = function () {
};
var success = function () {
};
var fail = function () {
};
(function () {
    $('.datepicker').datepicker({
        todayBtn: "linked",
        format: "mm/dd/yyyy",
        autoclose: true,
        todayHighlight: true,
        onSelect: function () {
            $(this).closest('.date-picker-container').hpsValidate('validate');
        }
    });
    $('#pageForm').hpsValidate();
})();