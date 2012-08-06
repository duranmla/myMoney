Ext.define('myMoney.store.Transacciones',{
	extend: 'Ext.data.Store',
	
	config: {
		model: 'myMoney.model.Transaccion',
		autoLoad: true,
		
		proxy: {
			type: 'ajax',
			url: 'resources/ddefault/transaccion.json'
		}
	}

});