Ext.define('myMoney.store.TipoPago',{
	extend: 'Ext.data.Store',
	
	config: {
		model: 'myMoney.model.Name',
		autoLoad: true,
		sorters: 'name',
		grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            },
        },
		proxy: {
            type: 'ajax',
            url: 'resources/ddefault/tipoPago.json'
        }
	}
});