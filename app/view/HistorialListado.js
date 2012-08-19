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
                store: Ext.getStore('Transacciones'),
				onItemDisclosure: true,
		        loadingText: "Cargando Transacciones...",
		        emptyText: '</pre> <div class="notes-list-empty-text">Sin Transacciones.</div> <pre>',
				grouped: true,
				itemTpl:'</pre><div class="list-item-title">{descripcion}</div><div class="list-item-narrative">{monto}&nbsp;Bsf.</div><pre>',
				
				listeners: {
					disclose: {fn: this.editaTransaccion, scope: this}
				}
                
		}
		
		this.add([topBar, lista]);
	},
	
	//Funciones locales
	backButtonTap: function(){
		this.fireEvent('needBack')
	},
	
	//Edita transaccion
	editaTransaccion: function(list, record){
		this.fireEvent('editaTransaccionCommand',this, record);
	}
});