Ext.define('myMoney.model.Notificaciones',{
	extend: 'Ext.data.Model',
	
	config: {
		
		idProperty: 'id',
		
		fields: [
			{name: 'id', type: 'id'},
			{name: 'title', type: 'string'},
			{name: 'fecha', type: 'auto'}
		],
		
		validations: [
			{type: 'presence', field: 'fecha'},
			{type: 'presence', field: 'title', message: 'Debe introducir un titulo'}
		],
		
		//belongsTo: 'Contactos'
	}
});