Sorry this isn't formatted yet :(

All fields must have a *data-validate=[]* attribute.  The accepted values at the moment are:
>**text**:         /^[A-Za-z]{1,}$/

>**number**:       /^[0-9]{1,}$/

>**mixedText**:    /^[0-9A-Za-z]{1,}$/

>**email**:        /^([a-zA-Z0-9_\-\.]*)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,5})$/

>**phone**:        /^([0-9]{10,10})$/

>**ssn**:          /^([0-9]{9,9})$/

>**date**:         /^([0-9]{2,2})\/([0-9]{2,2})\/([0-9]{4,4})$/

>**checkbox**

The input(s) should be inside an element with the class "input-wrapper".  If the input(s) this is the element that will have the css classes assigned to it.  Without this element the field will be validated but will not change in the UI.

# Usage
```javascript
$(document).hpsValidate();
```

## example:
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



## See samples in [index](../index.html)
