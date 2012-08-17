Ext.define('myMoney.store.Presupuesto', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'myMoney.model.Presupuesto',
		autoLoad: true,
		
		proxy: {
			type: 'localstorage',
			id: 'presupuestoid',
		},
		
		sorter: [{property: 'name'}, {direction: 'DESC'}],
	}
});