Ext.define('myMoney.model.Transaccion', {
    extend: 'Ext.data.Model',
    requires: 'Ext.data.identifier.Uuid',
	
    config: {
		
		identifier: {
			type: 'uuid'
		},
		
        fields: [
            {name: 'clasificacion', type: 'auto'},
            {name: 'descripcion', type: 'auto'},
			{name: 'monto', type: 'auto'},
			{name: 'cuenta', type: 'auto'},
			{name: 'date', type: 'date', dateFormat: 'c'},
        ],
		
		validations: [
			{type: 'presence', field: 'descripcion', message: 'La transaccion debe tener una descripcion'},
			{type: 'presence', field: 'monto', message: 'La transaccion debe tener un monto'}
		]
    }
});