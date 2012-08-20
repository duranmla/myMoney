Ext.define('myMoney.store.HistorialGrafico',{
	extend: 'Ext.data.Store',
	
	config: {
		model: 'myMoney.model.HistorialGrafico',
		autoLoad: true,
		
		proxy: {
			type: 'localstorage',
			id: 'data-historial'
		},
		
		sorters: [{property: 'name', direction: 'DESC'}]
	}
})