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
		
		var topBar = {
			xtype: 'toolbar',
			docked: 'top',
			title: 'Presupuesto',
			
			items: [{xtype: 'spacer'}, addButton]
		};
		
		//Items del Menu desplegable
		var buttonSave = {
			xtype: 'button',
			ui: 'confirm',
			text: 'Guardar'
		};
		
		var buttonCancel = {
			xtype: 'button',
			text: 'Cancel'
		};
		
		var buttonDelete = {
			xtype: 'button',
			ui: 'decline',
			text: 'Guardar'
		};
		//Menu de opciones desplegable
		var menu = {
			xtype: 'panel',
			id: 'myMenu',
			
			items: [buttonSave, buttonCancel, buttonDelete]
		}
		
		//Boton que muestra el menu
		var menuButton = {
			iconMask: true,
			ui: 'plain',
			iconCls: 'organize',
			handler: this.showMenu(),
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