//Esta vista extra permite agregar un nuevo contacto y ver la informacion del mismo.
Ext.define('myMoney.view.ContactoEditor', {
	extend: 'Ext.form.Panel',
	alias: 'widget.contactoEditor',
	
	requires: ['Ext.field.Email'],
	
	initialize: function(){
		this.callParent(arguments);
		
		var textNombre = {
			xtype: 'textfield',
			label: 'Nombre',
			name: 'firstName',
			placeHolder: 'Nombre'
		};
		
		var textApellido = {
			xtype: 'textfield',
			label: 'Apellido',
			name: 'lastName',
			placeHolder: 'Apellido'
		};
		
		var textTitle = {
			xtype: 'textfield',
			label: 'Empresa',
			name: 'title',
			placeHolder: 'Ambiente Coorporativo'
		};
		
		var textTlf = {
			xtype: 'numberfield',
			label: 'Telefono',
			placeHolder: '+555555555555',
			name: 'telephone',
		};
		
		var textEmail = {
			xtype: 'emailfield',
			label: 'Email',
			name: 'email',
			placeHolder: 'contacto@email.com'
		};
		
		var textCI = {
			xtype: 'textfield',
			label: 'CI/RIF',
			placeHolder: 'CI/RIF',
			name: 'cedula',
		};
		
		var banco = {
			xtype: 'selectfield',
			label: 'Bancos',
			name: 'bankName',
			store: 'Bancos',
			displayField: 'name',
			valueField: 'name',
		};
		
		var nroBanco = {
			xtype: 'numberfield',
			label: 'Cuenta',
			name: 'accountNumber',
			placeHolder: '00000000000000000000'
		};
		
		var guarda = {
			xtype: 'button',
			text: 'Guardar',
			ui: 'action',
			handler: this.guardaTap,
			scope: this
		};
		
		var regresa = {
			xtype: 'button',
			text: 'Cancelar',
			ui: 'action',
			handler: this.regresaTap,
			scope: this
		};
		
		var borrar = { 
		   iconMask: true, 
		   ui: 'plain', 
		   iconCls:'x-icon-mask trash',
		   id: 'borrar',
		   hidden: false,
		   handler: this.borrando,
		   scope: this,
	   };
		
		topBar = {
			xtype: 'toolbar',
			title: 'Contacto',
			docked: 'top',
			items: [regresa, {xtype: 'spacer'}, guarda]
		};
		
		bottomBar = {
			xtype: 'toolbar',
			docked: 'bottom',
			items: [{xtype: 'spacer'}, borrar]
		};
		
		//Interfaz para agregar pagos o deudas
		var actualizar = { 
		   iconMask: true, 
		   ui: 'plain',  
		   iconCls: 'refresh',
		   hidden: false
	   };
	   
	   var agregar = { 
		   iconMask: true, 
		   ui: 'plain', 
		   iconCls: 'add',
		   hidden: false,
		   handler: this.addAlert,
		   scope: this,
	   };
	   
	   var borrar = { 
		   iconMask: true, 
		   ui: 'plain', 
		   iconCls:'delete',
		   id: 'borrarCE',
		   hidden: false,
		   handler: this.borrando,
		   scope: this,
	   };
		
		var lista = {
			xtype: 'listac',
			store: Ext.getStore('Contactos'),
		};
		//Fin de Interfaz de pagos y deudas
		
		this.add([topBar,
			{
				xtype: 'fieldset', 
				title: 'Datos',
				instructions: 'Indique los datos del nuevo contacto',
				items:[textNombre, textApellido, textTitle, textTlf, textEmail, textCI, banco, nroBanco]
			},
			bottomBar]);
	},
	
	//Funciones locales
	
	guardaTap: function() {
		console.log('Guardando!!');
		this.fireEvent('guardaContacto', this);
	},
	
	regresaTap: function(){
		console.log('Regresando!');
		this.fireEvent('regresaAgenda', this);	
	},
		
	borrando: function(){
		console.log('Borrando');
		this.fireEvent('deleteContact', this);
	}
});