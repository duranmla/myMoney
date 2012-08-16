Ext.define('myMoney.view.Presupuesto', {
	extend: 'Ext.Panel',
	alias: 'widget.presupuesto',
	
	config: {
		scrollable: true,
		fullscreen: true,
	},
	
	initialize: function(){
		this.callParent(arguments);
		
		var field = {
				xtype: 'numberfield',
				label: 'Monto Mensual',
				value: 0,
				minValue: 0,
		};
		
		var addButton = {
		   iconMask: true, 
		   ui: 'plain', 
		   iconCls: 'add',
		   handler: this.addField,
		   scope: this,
		};
		
		var topBar = {
			xtype: 'toolbar',
			docked: 'top',
			title: 'Presupuesto',
			
			items: [{xtype: 'spacer'}, addButton]
		};
		
		this.add([topBar, {xtype: 'fieldset', id: 'myFS', title: 'Parametros de Presupuesto', instructions: 'Indique el monto mensual aproximado para la creacion del presupuesto', centered: true, 				styleHtmlContent: true,
						  items: [field]}]);
	},
	
	addField: function(){
		this.fireEvent('addFieldCommand');
	}
});