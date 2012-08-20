Ext.define('myMoney.model.HistorialGrafico', {
	extend: 'Ext.data.Model',
	
	config: {
		
		identifier: {
			type: 'uuid'
		},
		
		idProperty: 'id',
		
		fields: [
			{name: 'name', type: 'string'},
			{name: 'montoR', type: 'float'},
			{name: 'montoIdl', type: 'float'},
		],
	}
});