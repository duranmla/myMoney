Ext.define('myMoney.store.SettingsValues', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'myMoney.model.SettingsValues',
		autoLoad: true,
		
		proxy: {
			type: 'localstorage', 
			id: 'data-settings-id'
		}
	}
});