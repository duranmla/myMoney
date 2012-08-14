Ext.define('myMoney.store.Contactos', {
    extend: 'Ext.data.Store',
	requires:"Ext.data.proxy.LocalStorage",
	
    config: {
        model: 'myMoney.model.Contactos',
        autoLoad: true,
        
		sorters: [{	property: 'firstName'}, {direction: 'DESC'}],
        
		grouper: {
            groupFn: function(record) {
                return record.get('firstName')[0];
            }
        },
		
        proxy: {
            type: 'localstorage',
			id: 'contactosid'
        }
    }
});