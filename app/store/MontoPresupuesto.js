Ext.define('myMoney.store.MontoPresupuesto', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'myMoney.model.Presupuesto',
		autoLoad: true,
		
		proxy: {
			type: 'localstorage',
			id: 'data-montoPresupuesto-id'
		}
	}
});