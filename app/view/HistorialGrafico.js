Ext.define('myMoney.view.HistorialGrafico', {
	extend: 'Ext.Panel',
	alias: 'widget.historialGrafico',
	
	config: {
		layout: 'fit'
	},
	
	initialize: function(){
		this.callParent(arguments);
		
		var backButton = {
			xtype: 'button',
			text: 'Historial',
			ui: 'back',
			handler: this.backButtonTap,
			scope: this,
		};
		
		var topBar = {
			xtype: 'toolbar',
			docked: 'top',
			title: 'Historial',
			
			items: [backButton]
		};
		
		var lista = {
				xtype: 'list',
                itemTpl: '{name}',
				ui: 'round',
		        styleHtmlContent: true,
                store: Ext.getStore('Clasificacion')
		}
		
		this.add(topBar, lista);
	},
	
	backButtonTap: function(){
		this.fireEvent('needBack')
	}
});