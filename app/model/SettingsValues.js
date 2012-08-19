Ext.define('myMoney.model.SettingsValues', {
	extend: 'Ext.data.Model',
	
	config: {
		idProperty: 'id',
		
		identifier: {
			type: 'uuid'
		},
		
		fields: [
			{name: 'syncWeb', type: 'int'},
			{name: 'wifi', type: 'boolean'},
			{name: 'movil', type: 'boolean'},
			{name: 'sortHist', type: 'string'},
		]
	}
});