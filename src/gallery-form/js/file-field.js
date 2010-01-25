/**
 * @class PasswordField
 * @extends FormField
 * @param config {Object} Configuration object
 * @constructor
 * @description A password field node
 */
function FileField () {
    FileField.superclass.constructor.apply(this,arguments);
}

Y.mix(FileField, {
    NAME : 'file-field'
});

Y.extend(FileField, Y.FormField, {
    _nodeType : 'file'
});

Y.FileField = FileField;