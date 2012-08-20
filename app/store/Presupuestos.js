Ext.define('myMoney.store.Presupuestos', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'myMoney.model.Presupuesto',
		autoLoad: true,
		
		proxy: {
			type: 'localstorage',
			id: 'data-presupuestos-id'
		}
	}
});