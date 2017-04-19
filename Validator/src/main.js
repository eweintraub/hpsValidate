/// <reference path="index.d.ts" />
var Config = (function () {
    function Config() {
    }
    Config.ver = function () {
        console.log(this.version);
    };
    return Config;
}());
Config.version = '0.1.1';
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
            matchPattern: /^[0-9A-Za-z]{1,}$/
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
                "function": ''
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
        this.checkbox = {
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
            minCount: 1
        };
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
    }
    return ValidatorConfig;
}());
$.fn.hpsValidate = function (options) {
    var v = new ValidatorConfig(options || {});
    var identifier = v.ValidationSettings.identifier + ':not(.do-not-validate):not(.validate-watching)';
    var elements = this[0].querySelectorAll(identifier);
    while (elements.length > 0) {
        if (v.ValidationSettings.validateIfHidden == false && elements[0].style.display == 'none') {
            if (elements[0].classList.contains('hidden-for-multi')) {
            }
            else {
                elements[0].removeAttribute('data-validate');
                elements = this[0].querySelectorAll(identifier);
                continue;
            }
        }
        elements[0].classList.add('validate-watching');
        var t = elements[0].getAttribute('data-validate');
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
var Validator = (function () {
    function Validator(rules, settings) {
        var _this = this;
        this.load = function (el, altElement) {
            var that = _this;
            _this.element = el;
            if (_this.settings.disableSubmit)
                disableSubmit();
            if (altElement)
                _this.altElement = altElement;
            var elToTest = _this.altElement || _this.element;
            elToTest.addEventListener('keyup', function () { that.validate(); });
            elToTest.addEventListener('click', function () { that.validate(); });
            if (_this.settings.runOnLoad)
                _this.validate();
            if (_this.rules.keyUp) {
                elToTest.addEventListener('keyup', function () { that.rules.keyUp(el); });
            }
        };
        this.validate = function () {
            var re = new RegExp(_this.rules.matchPattern);
            var elToTest = _this.altElement || _this.element;
            elToTest.parentNode.classList.add(_this.rules.checking["class"]);
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
        };
        this.empty = function () {
            var elToTest = _this.altElement || _this.element;
            if (elToTest.classList.contains('no-validate-if-empty')) {
                UpdateFieldValidationStatus(elToTest, _this.rules, _this.settings, true, false, false);
            }
            else {
                UpdateFieldValidationStatus(elToTest, _this.rules, _this.settings, true, false, false);
            }
        };
        this.success = function () {
            var that = _this;
            var elToTest = _this.altElement || _this.element;
            UpdateFieldValidationStatus(elToTest, _this.rules, _this.settings, false, true, false);
            _this.element.addEventListener('blur', function () { that.clear(); });
        };
        this.fail = function () {
            var elToTest = _this.altElement || _this.element;
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
    function CheckBoxValidator(container, rules, settings) {
        var _this = this;
        this._getElements = function () {
            var that = _this;
            var elements = _this._container.querySelectorAll('[type=checkbox]');
            for (var d = 0; d < elements.length; ++d) {
                elements[d].addEventListener('change', function () { that._checkIfAnySelected(); });
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
            _this._container.classList.add('validated');
            checkForAllValidated(_this._settings);
            document.addEventListener('click', _this.clear);
            //this._container.addEventListener('blur',function(){that.clear()});
        };
        this.fail = function () {
            _this._container.parentNode.classList.remove(_this._rules.empty["class"]);
            _this._container.parentNode.classList.remove(_this._rules.checking["class"]);
            _this._container.parentNode.classList.remove(_this._rules.success["class"]);
            _this._container.parentNode.classList.add(_this._rules.failed["class"]);
            _this._container.classList.remove('validated');
            checkForAllValidated(_this._settings);
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
        this._container = container;
        this._getElements();
    }
    return CheckBoxValidator;
}());
// Single use or specific functions
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
var checkForAllValidated = function (settings) {
    var b = document.querySelectorAll(settings.identifier);
    var v = true;
    for (var x = 0; x < b.length; ++x) {
        if (b[x].classList.contains('validated')) {
        }
        else {
            v = false;
            if (settings.disableSubmit) {
                disableSubmit();
            }
            return;
        }
    }
    enableSubmit();
};
var disableSubmit = function () {
    var b = document.getElementsByClassName('submit');
    for (var x = 0; x < b.length; ++x) {
        b[x].setAttribute('disabled', 'disabled');
    }
};
var enableSubmit = function () {
    var b = document.getElementsByClassName('submit');
    for (var x = 0; x < b.length; ++x) {
        b[x].removeAttribute('disabled');
    }
};
// Set Success, Fail and clear
var UpdateFieldValidationStatus = function (el, rules, settings, empty, success, fail) {
    var parentWrapper = getParentWrapperElement(el);
    success ? parentWrapper.classList.add(rules.success["class"]) : parentWrapper.classList.remove(rules.success["class"]);
    if (success)
        el.classList.add('validated');
    empty ? parentWrapper.classList.add(rules.empty["class"]) : parentWrapper.classList.remove(rules.empty["class"]);
    fail ? parentWrapper.classList.add(rules.failed["class"]) : parentWrapper.classList.remove(rules.failed["class"]);
    if (empty || fail)
        el.classList.remove('validated');
    checkForAllValidated(settings);
};
var empty = function () {
};
var success = function () {
};
var fail = function () {
};
(function () {
    // var sel = document.getElementById('bottom');
    // validate({
    //     selector:sel
    // });
    $('#top').hpsValidate({
        runOnLoad: 'true'
    });
})();
