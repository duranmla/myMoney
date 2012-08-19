Ext.define('myMoney.store.Bancos', {
	extend: 'Ext.data.Store',
	requires:"Ext.data.proxy.LocalStorage",
	
	config: {
		model: 'myMoney.model.Name',
		autoLoad: true,
		
		proxy: {
			type: 'localstorage',
			id: 'data-bancos-id'
		},
		
		sorters: [{property: 'name'}, {direction: 'DESC'}],
	}	
})