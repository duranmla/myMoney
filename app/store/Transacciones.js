Ext.define('myMoney.store.Transacciones',{
	extend: 'Ext.data.Store',
	
	config: {
		model: 'myMoney.model.Transaccion',
		autoLoad: true,
		
		proxy: {
			type: 'localstorage',
			id: 'data-transacciones-id'
		},
		
		sorters: [{property: 'date'}, {direction: 'DESC'}],
		
		grouper: {
			groupFn: function(record){
				return record.get('clasificacion');
			}
		}
	}

});