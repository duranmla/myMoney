Ext.define('myMoney.model.Contactos', {
    extend: 'Ext.data.Model',
    requires: 'Ext.data.identifier.Uuid',
	
    config: {
		
		idProperty: 'id',
		
		identifier: {
			type: 'uuid'
		},
		
        fields: [
            {name: 'firstName', type: 'string'},
            {name: 'lastName', type: 'string'},
            {name: 'title', type: 'auto'},
            {name: 'telephone', type: 'auto'},
            {name: 'email', type: 'auto'},
			{name: 'cedula', type: 'auto'},
			{name: 'bankName', type: 'string'},
            {name: 'accountNumber', type: 'double'}
        ],
		
		validations: [
			{ type: 'presence', field: 'firstName', message: 'El contacto debe tener un nombre'},
		],
		
		//hasMany: 'Notificaciones'
    }
});