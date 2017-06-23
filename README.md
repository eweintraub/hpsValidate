Sorry this isn't formatted yet :(

All fields must have a *data-validate=[]* attribute.  The accepted values at the moment are:
>**text**:         /^[A-Za-z]{1,}$/

>**number**:       /^[0-9]{1,}$/

>**mixedText**:    /^[0-9A-Za-z]{1,}$/

>**email**:        /^([a-zA-Z0-9_\-\.]*)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,5})$/

>**phone**:        /^([0-9]{10,10})$/

>**ssn**:          /^([0-9]{9,9})$/

>**date**:         /^([0-9]{2,2})\/([0-9]{2,2})\/([0-9]{4,4})$/

>**stateAbbr**:    /^([A-Z]{2})$/

>**properName**:   /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/

>**checkbox**

>**radioButton**

>**custom**         Enter pattern in a data-pattern attribute (example in markup sample below)

The input(s) should be inside an element with the class "input-wrapper".  If the input(s) this is the element that will have the css classes assigned to it.  Without this element the field will be validated but will not change in the UI.

# Usage

## Markup:

    <div class="form-group">
        <label data-label>Text</label>
        <div class="input-wrapper row">
            <input 
                class="form-control no-validate-if-empty" 
                id="text" 
                placeholder="Enter Text" 
                data-validate="custom" 
                data-pattern="^[0-9]{3}$"
                data-error-empty="This field is required"
                data-error-failed="Please enter a number between 99 and 1000"
            ></div> 
    </div>

>data-label: identifies the field that should have a title on validate (empty, failed, success)

>data-validate: identifies field(s) that should be validated

>data-pattern: if data-validate is set to custom then this field identifies the pattern to match

>data-error-empty: identifies the text displayed if field is empty

>data-error-failed: identifies the text displayed if field fails validation

>data-always-invalid: Use this attribute on an input if you do not want the form to validate and enable the submit button.  You will need to enable the button manually as the field will show success but the checkForAllValidated() function will always return false.

## Javascript

```javascript
$(document).hpsValidate();
```

## Example:
```javascript
$(document).hpsValidate({
    runOnLoad:'false',
    disableSubmit:'false',
    validateIfEmpty:'false'
});  
```



# Options

>**identifier** (*'[data-validate']*) : the attribute that the validator will look for.  Do not change this unless there is a really good reason to do so (such as another less flexible plugin is using this attribute).

>**runOnLoad** (*true*) : validate fields when the document is done loading.

>**validateIfHidden** (*false*) : validate fields that are hidden.

>**disableSubmit** (*true*) : used for forms, will disable any submit buttons if any fields have not been validated successfully.

>**validateIfEmpty** (*true*) : this determines if the field is always validated or only when populated.  A use case for this is middle name, if someone doesn't have a middle name that's fine but if you do it's probably not "12345".  Using this option will apply globally.  To apply to specific fields use the *no-validate-if-empty* class.

# Classes

## CSS Classes

> **.input-wrapper**: Input container.  By default any success / fail updates will target this container.  Validator will climb the DOm to find the next instance of this class.

>**.valid-checking**: Not currently used.

>**.valid-empty**:  Applied to *validated INPUT* when element is validated and is empty except for SELECT inputs.

>**.valid-success**: Applied to *closest .input-wrapper* when element is validated and successful. 

>**.valid-failed**: Applied to *closest .input-wrapper* when element is validated and fails.

## Other Classes
***

>**.no-validate-if-empty** : **NOT CURRENTLY IMPLEMENTED** This determines if the field is always validated or only when populated.  A use case for this is middle name, if someone doesn't have a middle name that's fine but if you do it's probably not "12345".  Using this option will apply only to element with the class.  To apply globally use the *validateIfEmpty* option.

## Classes That Are Applied By The Library
***
>**.validate-watching**: Applied dynamically to element to identify elements that are to be watched and validated when updated

>**.validated**: Applied dynamically to element to identify it as *successfully validated*.  Different from .valid-success as this is applied to element, *not .input-wrapper*

>**.hidden-for-multi**: Applied to dynamically created hidden field when there are multiple fields that must be validated together (such as a phone number).  This becomes the field that is validated.

>**.do-not-validate**: Applied to multiple fields so they are not validated, instead using the *.hidden-for-multi*

# Methods

>**.hpsValidator('validate')**: Immediately validate all fields inside target.  Useful when event handler will not be triggered on an element.
    example:
```javascript
$('.datepicker').datepicker({
    todayBtn: "linked",
    format: "mm/dd/yyyy",
    autoclose: true,
    todayHighlight: true,
    onSelect:function(){
        $(this).closest('.date-picker-container').hpsValidate('validate');
    }
});
```

>**.hpsValidator('update')**: Immediately update validation rules on all fields inside target.
```javascript
$('form').hpsValidate('update');
```

# Changelog
### 0.1.2
**Bug Fixes:**
    Fixed bug that caused validator to skip groups of checkboxes that were not immediate children of .input-wrapper

### 0.1.3
**Additions:**
    Added hpsValidator('Validate') method

**Bug Fixes:**
    various

### 0.1.4
**Additions:**
    Added radioButton type support
    Added ('validate') method
    Added ('update') method


**Bug Fixes:**
    Satisfying radio button and checkboxes will now properly enable the submit button

### 0.1.5
**Additions:**
    Added custom data-validate types!  See Usage for...usage.

### 0.1.6
**Additions:**
    Added error tooltips! See Usage
    
### 0.1.7
**Bug Fixes:**
    Hidden fields were not being validated correctly

### 0.1.8
**Additions:**
    Added option to prevent enabling the submit button when all fields are validated.  Useful if another function is taking care of this based on other logic.

### 0.1.8
**Bug Fixes:**
    Fixed bug that prevented success class from being removed on blur for multi-input fields.

**Additions**
    Added properName validate type

### 0.2.1
**Bug Fixes:**
    Form will now properly validate fields that are populated on load.  Please set 'runOnLoad' to 'true'.

### 0.3.3
**Additions**
    Added taxId

### 0.3.4

### 0.3.5
**Bug Fixes:**
    Fixed bug on form postback.  No longer need to click in a multi field to enable submit.

## See samples in [index](../index.html)
