	Ext.define('myMoney.store.Contactos', {
    extend: 'Ext.data.Store',

    config: {
        model: 'myMoney.model.Contactos',
        autoLoad: true,
        sorters: 'firstName',
        grouper: {
            groupFn: function(record) {
                return record.get('lastName')[0];
            }
        },
        proxy: {
            type: 'ajax',
            url: 'resources/ddefault/contactos.json'
        }
    }
});