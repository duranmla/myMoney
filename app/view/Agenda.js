Ext.define('myMoney.view.Agenda',{
	extend: 'Ext.Container',
	alias: 'widget.agenda',
	
	fullscreen: true,
	scrollable: true,
	
	initialize: function() {
		this.callParent(arguments);
	   
	   var actualizar = { 
		   iconMask: true, 
		   ui: 'plain',  
		   iconCls: 'refresh',
		   id: 'actualizar',
		   hidden: false
	   };
	   
	   var agregar = { 
		   iconMask: true, 
		   ui: 'plain', 
		   iconCls: 'add',
		   id: 'anadir',
		   hidden: false,
		   handler: this.addContact,
		   scope: this,
	   };
	   
	   var buscar = {
			xtype: 'searchfield',
			placeHolder: 'Buscar',
			align: 'right',
			id: 'agendSearch',
	   };
	   
	   var topBar =  {
			xtype: 'toolbar',
			title: 'Agenda',
			docked: 'top',
			items: [actualizar, {xtype: 'spacer'}, agregar]
	   };
	   
	   var listaContact = {
			xtype: 'listac',
			id: 'lcontact',
			store: Ext.getStore('Contactos'),
			listeners: {
				disclose: { fn: this.listDisclose, scope: this },
			},
	   };
	   
	   this.add(topBar, listaContact);
	},
	
		
	config: {
		title: 'Agenda',
		iconCls: 'bookmarks',
		layout: 'fit'
	},
	
	//Funciones locales
	addContact: function(){
		console.log('Contacto Nuevo!');
		this.fireEvent('addNewContact');
	},
	
	listDisclose: function(list, record){
		console.log('Flechita!!');
		this.fireEvent('contactDisclose', this, record);
	},

});