Ext.define('myMoney.store.Clasificacion',{
	extend: 'Ext.data.Store',
	
	config: {
		model: 'myMoney.model.Name',
		autoLoad: true,
		
		proxy: {
			type: 'ajax',
			url: 'resources/ddefault/clasificacion.json',
			reader: 'json'
		},
	}
});