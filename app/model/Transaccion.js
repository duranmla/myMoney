Ext.define('myMoney.model.Transaccion', {
    extend: 'Ext.data.Model',
    requires: 'Ext.data.identifier.Uuid',
	
    config: {
		
		idProperty: 'id',
		
		identifier: {
			type: 'uuid'
		},
		
        fields: [
            {name: 'clasificacion', type: 'string'},
            {name: 'descripcion', type: 'string'},
			{name: 'monto', type: 'float'},
			{name: 'cuenta', type: 'string'},
			{name: 'date', type: 'date', dateFormat: 'c'},
        ],
		
		validations: [
			{type: 'presence', field: 'descripcion', message: 'La transaccion debe tener una descripcion'},
			{type: 'presence', field: 'monto', message: 'La transaccion debe tener un monto'}
		]
    }
});