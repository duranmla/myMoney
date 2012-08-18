Ext.define('myMoney.store.Notificaciones',{
	extend: 'Ext.data.Store',
	
	config:{
		model: 'myMoney.model.Notificaciones',
		autoLoad: true,
				
		proxy: {
			type: 'localstorage',
			id: 'data-notificaciones-id'
		},
				
		sorters: [{	property: 'fecha'}],
		
		grouper: {
			grouperFn: function(record){
				return record.get('fecha');
			}
		},
	}
});