Ext.define('myMoney.view.Presupuesto', {
	extend: 'Ext.Panel',
	alias: 'widget.presupuesto',
	
	requires: ['Ext.SegmentedButton'],
	
	config: {
		scrollable: true,
		fullscreen: true,
		align: 'center',
		styleHtmlContent: true
	},
	
	initialize: function(){
		this.callParent(arguments);
		
		var field = {
			xtype: 'numberfield',
			label: 'Monto Mensual',
			value: 0,
			minValue: 0,
		};
		
		var  buttonEA = {
			xtype: 'segmentedbutton',

			items: [
			{text: 'Editar', ui: 'action'},
			{text: 'Aceptar', ui: 'action'}
			]
		};
		
		var addButton = {
		   iconMask: true, 
		   ui: 'plain', 
		   iconCls: 'add',
		   handler: this.addField,
		   scope: this,
		};
		
		var buttonReturn = {
			xtype: 'button',
			ui: 'back',
			text: 'Atras'
		};
		
		var topBar = {
			xtype: 'toolbar',
			docked: 'top',
			title: 'Presupuesto',
			
			items: [buttonReturn, {xtype: 'spacer'}, addButton]
		};
		
		//Boton que muestra el menu
		var menuButton = {
			iconMask: true,
			ui: 'plain',
			iconCls: 'organize',
			handler: this.showMenu,
			scope: this,
		};
		
		var bottomBar = {
			xtype: 'toolbar',
			docked: 'bottom',
			items: [{xtype: 'spacer'}, menuButton]
		};
		
		this.add([topBar,buttonEA,  
				{xtype: 'fieldset', id: 'myFSm', title: 'Monto Base', instructions: 'Indique el monto mensual aproximado para la creacion del presupuesto', 
				items: [field]},
						  {xtype: 'fieldset', id: 'myFSp', title: 'Parametros', instructions: 'Valores ideales de gastos para el cumplimiento del presupuesto'}, bottomBar]);
	},
	
	addField: function(){
		this.fireEvent('addFieldCommand');
	},
	
	showMenu: function(){
		this.fireEvent('showMenuCommand');
	},
	
	hideMenu: function(){
		this.fireEvent('hideMenuCommand');
	},
});