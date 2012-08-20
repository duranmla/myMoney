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
			title: 'Hist. Ilustrado',
			
			items: [backButton]
		};
		
		var lista = {
				xtype: 'list',
                store: Ext.getStore('prueba'),
                itemTpl: '{name}&nbsp;Ideal:{monto}&nbsp;Acumulado',
				ui: 'round',
		        styleHtmlContent: true,
		}
		
		this.add([topBar, lista]);
	},
	
	backButtonTap: function(){
		this.fireEvent('needBack')
	},
	
	acumulado: function(){
		
	}
});