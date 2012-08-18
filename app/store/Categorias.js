Ext.define('myMoney.store.Categorias',{
	extend: 'Ext.data.Store',
	requires:"Ext.data.proxy.LocalStorage",
	
	config: {
		model: 'myMoney.model.Name',
		autoLoad: true,
		
		proxy: {
            type: 'localstorage',
            id: 'data-categorias-id'
        },
		
		sorters: [{property: 'name'}, {direction: 'DESC'}],
	}
});