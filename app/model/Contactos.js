Ext.define('myMoney.model.Contactos', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'firstName', type: 'auto'},
            {name: 'lastName', type: 'auto'},
            {name: 'headshot', type: 'auto'},
            {name: 'title', type: 'auto'},
            {name: 'telephone', type: 'auto'},
            {name: 'email', type: 'auto'},
            {name: 'accountnumber', type: 'auto'}
        ]
    }
});