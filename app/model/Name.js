Ext.define('myMoney.model.Name', {
    extend: 'Ext.data.Model',
    requires: 'Ext.data.identifier.Uuid',
    config: {
		
		identifier: {
        	type: 'uuid' //Genera id's unicos
        },
		
        fields: [
            {name: 'name', type: 'string'}
        ],
		
		validations: [
			{type: 'presence', field: 'name', message: 'La clasificacion debe tener al menos un caracter'}
		]
    }
});