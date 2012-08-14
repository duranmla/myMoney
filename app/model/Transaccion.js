Ext.define('myMoney.model.Transaccion', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'clasificacion', type: 'auto'},
            {name: 'descrip', type: 'auto'},
			{name: 'monto', type: 'auto'},
			{name: 'cuenta', type: 'auto'},
			{name: 'date', type: 'date', dateFormat: 'c'},
        ],
		
		validations: [
			{type: 'presence', field: 'descrip', message: 'La transaccion debe tener una descripcion'}
		]
    }
});