Ext.define('myMoney.model.Contactos', {
    extend: 'Ext.data.Model',
    
    config: {
		
		idProperty: 'id',
		
        fields: [
			{name: 'id', type: 'int'},
            {name: 'firstName', type: 'string'},
            {name: 'lastName', type: 'string'},
            {name: 'title', type: 'auto'},
            {name: 'telephone', type: 'auto'},
            {name: 'email', type: 'auto'},
			{name: 'bankName', type: 'string'},
            {name: 'accountNumber', type: 'double'}
        ],
		
		validations: [
			{ type: 'presence', field: 'id'},
			{ type: 'presence', field: 'firstName', message: 'El contacto debe tener un nombre'},
		],
		
		//hasMany: 'Notificaciones'
    }
});