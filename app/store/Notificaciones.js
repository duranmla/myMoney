Ext.define('myMoney.store.Notificaciones',{
	extend: 'Ext.data.Store',
	
	config:{
		model: 'myMoney.model.Notificaciones',
		autoLoad: true,
		
		sorters: [{	property: 'fecha'}],
		
		grouper: {
			grouperFn: function(record){
				return record.get('fecha');
			}
		},
				
		proxy: {
			type: 'localstorage',
			id: 'notificacionesid'
		}
	}
});