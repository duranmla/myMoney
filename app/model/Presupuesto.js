Ext.define('myMoney.model.Presupuesto', {
	extend: 'Ext.data.Model',
	requires: 'Ext.data.identifier.Uuid',
	
	config: {
		
		idProperty: 'id',
		
		identifier: {
			type: 'uuid'
		},
		
		fields: [
			{name: 'name', type: 'string'},
			{name: 'monto', type: 'float'},
		]
	}
});