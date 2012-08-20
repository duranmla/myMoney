Ext.define('myMoney.view.Presupuesto', {
	extend: 'Ext.form.Panel',
	alias: 'widget.presupuesto',
	id: 'presId',
	
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
			name: 'montoBase',
			id: 'baseP',
			label: 'Monto Base',
			labelWidth: screen.availWidth/2,
			value: 0,
			minValue: 0,
		};
		
		var  buttonEA = {
			xtype: 'button',
			id: 'lockB',
			text: 'Editar', 
			ui: 'action',
			width: screen.availWidth/3
		};
		
		var buttonReturn = {
			xtype: 'button',
			ui: 'back',
			text: 'Atras',
			handler: this.backView,
			scope: this
		};
		
		var topBar = {
			xtype: 'toolbar',
			docked: 'top',
			title: 'Presupuesto',
			
			items: [buttonReturn, {xtype: 'spacer'}]
		};
		
		//Boton que muestra el menu
		var menuButton = {
			iconMask: true,
			id: 'menuB',
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
				{xtype: 'fieldset', id: 'myFSm',disabled: true, title: 'Monto Base', instructions: 'Indique el monto mensual aproximado para la creacion del presupuesto', 
				items: [field]},
				{xtype: 'fieldset', id: 'myFSp',disabled: true, title: 'Parametros', instructions: 'Valores ideales de gastos para el cumplimiento del presupuesto',
				}, bottomBar]);
				
		this.fillParametres();
	},
	
	showMenu: function(){
		this.fireEvent('showMenuCommand');
	},
	
	fillParametres: function(){
		this.fireEvent('fillParametresCommand');
	},
	
	backView: function(){
		this.fireEvent('backViewCommand');
	}
});