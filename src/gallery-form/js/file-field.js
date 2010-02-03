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
    NAME : 'file-field',
    INPUT_TEMPLATE: '<input type="file"/>'
});

Y.extend(FileField, Y.FormField, {
    _nodeType : 'file',
	_renderFieldNode : function () {
		var contentBox = this.get('contentBox'),
			field = contentBox.query('#' + this.get('id'));
				
		if (!field) {
			field = Y.Node.create(FileField.INPUT_TEMPLATE);
			contentBox.appendChild(field);
		}

		this._fieldNode = field;
	}
});

Y.FileField = FileField;
