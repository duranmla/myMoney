Ext.define('myMoney.controller.Agenda', {
    extend: 'Ext.app.Controller',
    
	requires: [
	'Ext.carousel.Carousel',
	'Ext.Label',
	],
	
    config: {
        refs: {
            agenda: 'agenda',
            agendTool: '#agendToolbar',
            actualizar: '#actualizar',
            borrar: '#borrar',
            anadir: '#anadir',
			listaC: '#listaContactos',
            
        },
        control: {
            'agenda #listaContactos': {
				itemdoubletap: 'showContact',
				itemsingletap: 'someData'
			},
			
        	actualizar: {
        		tap: 'refrescar',
        	},
        	
        	borrar: {
        		tap: 'deleteItem',
        	},
        	
        	anadir: {
        		tap: 'addContact',
        	}
        }
    },
    
    refrescar: function(){
    	console.log("Refresco");
    },
    
	someData: function(list, index, element, record){
		lista = list;
		indice = index;
		myrecord = record;
	},
	
    deleteItem: function(){
		Ext.Msg.confirm("Cuidado!", "Seguro que deseas borrar los datos de este contacto?", Ext.emptyFn);

		if(lista.getId()=='listaContactos'){	
			//Ext.getCmp('listaContactos').removeAt(indice);
		}
    },
    
    addContact: function(){
    	
		addContactPanel = Ext.Viewport.add({
			xtype: 'panel',
			scrollable: true,
			modal: true,                  // Para hacerlo flotante
			hideOnMaskTap: true,          // Para que al hacer click fuera del Panel este se cierre
			centered: true,
			width: '40%',
			height: '80%',
			items:[
				{
					docked: 'bottom',
					xtype: 'titlebar',
					items:[
						{
							xtype: 'button',
							ui: 'normal',
							text: 'Aceptar',
							listeners : {
								tap : function() {
									addContactPanel.hide(); // Para cerrar el Panel
									Ext.Msg.alert("Contacto Agregado!");  
								}
							}
						},  
						{
							xtype: 'button',
							ui: 'normal',
							text: 'Cancelar',
							listeners : {
								tap : function() {
									addContactPanel.hide();
								}
							}              
						},                  
					]
				},
				{
					xtype: 'fieldset',
					id: 'formPanelContact',
					title: 'Nuevo Contacto',
					 
					items: [
						{
							xtype: 'textfield',
							label: 'Nombre',
							name: 'contactName',
							placeHolder: 'Nombre'
						},
						{
							xtype: 'textfield',
							label: 'Apellido',
							name: 'contactLastName',
							placeHolder: 'Apellido'
						},
						{
							xtype: 'textfield',
							label: 'Banco',
							name: 'contactBank',
							placeHolder: 'Banco'
						},
						{
							xtype: 'numberfield',
							label: 'Cuenta',
							name: 'contactAccount',
							placeHolder: '0000-0000-00-0000000000'
						}
						/**Seleccionar una foto de usuario**/
					]	
				},
			]
		});//.showBy(this.getAnadir());
    },
    
	showContact: function(list, index, element, record){
	/*var name = record.get('firstName') + ' ' + record.get('lastName');
		cuenta = record.get('telephone');*/
		
		this.getAgenda().push({
			title:  'Informacion',
			layout: 'vbox',
			
			items: [
				{
					//style: 'background-color: grey',
					flex: 1,
					styleHtmlContent: true,
					id: 'content',

				},
				{
					flex:3,
					xtype: 'carousel',
					
					defaults: {
						styleHtmlContent: true
					},
					
				    items: [
				        {
				        	flex:1,
				        	docked: 'top',
				        	disabled: true,
				        	//style: 'background:green',
				        	xtype: 'label',
				        	html: 'Pendiente Pagar'
				        },
						{
				        	flex:2,
					    	xtype: 'list',
					    	ui: 'round',
					    	fullscreen: true,
					    	itemTpl: ['<B>Concepto:</B><BR>{desc}',
					    	          '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
					    	          '<FONT size=2>Monto:<FONT size=2 color=red> {mont}Bsf</FONT>'].join(''),
						    	data: [
					    	        { desc: 'Prestamo', mont: 200 },
					    	        { desc: 'Compra de Ropa', mont: 800 }
					    	    ],

						},
						{	
							html : 'Cobros Pendientes',
						}
					]
					
				}
			]
		})
	}
});