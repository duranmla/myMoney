Ext.define('myMoney.view.Transaccion', {
	extend: 'Ext.form.Panel',
	alias: 'widget.transaccion',
	id: 'tView',
	
	config: {
		styleHtmlContent: true,
//		url: 'consumo.php',
		listeners: {
			painted: function(){
				estado = this.verificaEdicion();
			},
		},
	},
	
	miEstado: function(){
		return estado;
	},
	
	initialize: function(){
		this.callParent(arguments);
		
		var pClas = {
			xtype: 'selectfield',
			label: 'Categoría',
			name: 'clasificacion',
			store: 'Categorias',
			displayField: 'name',
			valueField: 'name'
		};
		
		var pDesc = {
			xtype: 'textfield',
			name: 'descripcion',
			label: 'Descripción'
		};
		
		var pMont = {
			xtype: 'numberfield',
			label: 'Monto',
			minvalue: 0.1,
			name: 'monto',
		};
		
		var pAcco = {
			xtype: 'selectfield',
			label: 'Cuenta',
			name: 'cuenta',
			store: 'Cuentas',
			displayField: 'name',
			valueField: 'name',
		};
		
		//Fecha actual
		var myDateNow = new Date();
		
		var myPicker = {
			xtype: 'myCal'
		};
		
		var pDate = {
			xtype: 'datepickerfield',
			label: 'Fecha',
			id: 'picDate',
			name: 'fecha',
			picker: myPicker,
			value: myDateNow
		};
		
		//Boton para el almacenamiento de datos
		var confirmButton = {
			xtype: 'button',
			text: 'Aceptar',
			ui: 'confirm',
			handler: this.saveTrans,
			scope: this
		};
		
		var buttonBack = {
			xtype: 'button',
			ui: 'back',
			text: 'Acciones',
			handler: this.regresar,
			scope: this
		};
		
		var topBar = {
			xtype: 'toolbar',
			docked: 'top',
			title: 'Transacción',
			items: [buttonBack],
		};
		
		this.add([topBar,{xtype: 'fieldset',
					 items: [pClas, pDesc, pMont, pAcco, pDate]}, confirmButton]);
		
	},
	
	regresar: function(){
		this.fireEvent('needBack')
	},
	
	saveTrans: function(){
		this.fireEvent('saveTransCommand')
	},
	
	verificaEdicion: function(){
		var values = this.getValues();
		
		if(values.descripcion == ""){
			var edito = false
		}else{var edito = false}
		
		return edito;
	}
});