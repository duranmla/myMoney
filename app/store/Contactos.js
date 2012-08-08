	Ext.define('myMoney.store.Contactos', {
    extend: 'Ext.data.Store',

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