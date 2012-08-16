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
				grouped: true,
                //itemTpl: '{clasificacion}:&nbsp;{descrip}&nbsp;&nbsp;{monto}Bsf',
				itemTpl:'</pre><div class="list-item-title">{clasificacion}:&nbsp;{descrip}</div><div class="list-item-narrative">{monto}Bsf.</div><pre>',
                store: Ext.getStore('Transacciones')
		}
		
		this.add([topBar, lista]);
	},
	
	backButtonTap: function(){
		this.fireEvent('needBack')
	}
});