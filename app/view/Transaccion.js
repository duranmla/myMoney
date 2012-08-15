Ext.define('myMoney.view.Transaccion', {
	extend: 'Ext.form.Panel',
	alias: 'widget.transaccion',
	
	config: {
		styleHtmlContent: true,
		url: 'consumo.php',
	},
	
	initialize: function(){
		this.callParent(arguments);
		
		var pClas = {
			xtype: 'selectfield',
			label: 'Clasificacion',
			name: 'clasificacion',
			store: 'Clasificacion',
			displayField: 'name',
			valueField: 'name'
		};
		
		var pDesc = {
			xtype: 'textfield',
			name: 'descripcion',
			label: 'Descripcion'
		};
		
		var pMont = {
			xtype: 'numberfield',
			label: 'Monto',
			minvalue: 0.1,
			name: 'monto'
		};
		
		var pAcco = {
			xtype: 'selectfield',
			label: 'Cuenta',
			name: 'cuenta',
			store: 'Cuentas',
			displayField: 'name',
			valueField: 'name',
		};
		
		var pDate = {
			xtype: 'datepickerfield',
			label: 'Fecha',
			name: 'fecha',
			value: new Date()
		};
		
		//Boton para el almacenamiento de datos
		var confirmButton = {
			xtype: 'button',
			text: 'Aceptar',
			ui: 'confirm',
			handler: function(){
				//console.log(this.up('formpanel').submit());
			}
		};
		
		
		this.add({xtype: 'fieldset',
					 items: [pClas, pDesc, pMont, pAcco, pDate]}, confirmButton);
	}
});