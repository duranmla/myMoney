Ext.define('myMoney.view.HistorialListado', {
	extend: 'Ext.Panel',
	alias: 'widget.histList',
	
	config: {
		layout: 'fit',
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
			title: 'Hist. Listado',
			
			items: [backButton]
		};
		
		var lista = {
				xtype: 'list',
		        styleHtmlContent: true,
                store: Ext.getStore('Transacciones'),
				
		        loadingText: "Cargando Transacciones...",
		        emptyText: '</pre> <div class="notes-list-empty-text">Sin Transacciones.</div> <pre>',
				grouped: true,
				itemTpl:'</pre><div class="list-item-title">{descrip}</div><div class="list-item-narrative">{monto}&nbsp;Bsf.</div><pre>',
                
		}
		
		this.add([topBar, lista]);
	},
	
	backButtonTap: function(){
		this.fireEvent('needBack')
	}
});