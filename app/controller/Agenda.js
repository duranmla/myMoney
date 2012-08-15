Ext.define('myMoney.controller.Agenda', {
    extend: 'Ext.app.Controller',
    
	requires: ['Ext.carousel.Carousel','Ext.Label'],
	
    config: {
        refs: {            
			agenda: 'agenda',
			mainView: 'mainView',
			editor: 'contactoEditor',
        },
        control: {
         	agenda: {
				addNewContact: 'addNewContact',
				contactDisclose: 'contactDisclose',
			},
			
			editor: {
				guardaContacto: 'guardaContacto',
				regresaAgenda: 'regresaAgenda',
				deleteContact: 'deleteContact',
			},
        }
    },
	
	
	//Funciones auxiliares
    getRandomInt: function (min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	
	animacionIzq: {type: 'slide', direction: 'left'},
	animacionDer: {type: 'slide', direction: 'right'},
	
	muestraVentana: function(record){
		var contactoEditor = this.getEditor();
		contactoEditor.setRecord(record);
		Ext.Viewport.animateActiveItem(contactoEditor, this.animacionIzq);
	},
	
	activaAgenda: function(){
		Ext.Viewport.animateActiveItem(this.getMainView(), this.animacionDer);
	},
	//Fin funciones auxiliares
	
	addNewContact: function(){
    	console.log('Agregando contacto desde el controlador!');

		var ahora = new Date();
		var contactId = (ahora.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

		var newContact = Ext.create("myMoney.model.Contactos", {
			id: contactId,
			firstName: "",
			lastName: "",
			title: "",
            telephone: "",
			email: "",
			bankname: "",
			accountnumber: ""
	    });
		
		this.muestraVentana(newContact);
    },
	
	guardaContacto: function(){
		console.log('Guardando desde el controlador');
		
		//Tomo el control del modelo
		var modelo = this.getEditor();
		//Tomo los valores que tenia el contacto y los agregados
		var valoresActuales = modelo.getRecord();
		var valoresNuevos = modelo.getValues();
		//Actualizo los campos del contacto para luego poder usar el metodo de validacion sobre mi modelo
		valoresActuales.set('firstName',valoresNuevos.firstName);
		valoresActuales.set('lastName',valoresNuevos.lastName);
		valoresActuales.set('title',valoresNuevos.title);
		valoresActuales.set('telephone',valoresNuevos.telephone);
		valoresActuales.set('email',valoresNuevos.email);
		valoresActuales.set('bankName',valoresNuevos.bankName);
		valoresActuales.set('accountName',valoresNuevos.accountName);		
		//Valido la informacion
		var errors = valoresActuales.validate();
		
		if (!errors.isValid()) {
			Ext.Msg.alert('Espera!', errors.getByField("firstName")[0].getMessage(), Ext.emptyFn);
			valoresActuales.reject();
			return;
		}
		
		var contactosStore = Ext.getStore("Contactos");
		
		if (null == contactosStore.findRecord('id', valoresActuales.data.id)) {
			contactosStore.add(valoresActuales);
		}
	
		contactosStore.sync();
	
		contactosStore.sort([{ property: 'firstName', direction: 'DESC'}]);
	
		this.activaAgenda();
	},
	
	regresaAgenda: function(){
		console.log('regresando desde el controlador!!');
		this.activaAgenda();
	},
	
	contactDisclose: function(list, record) {
		console.log('Flechita desde el controlador!!');
		this.muestraVentana(record);
		
	},
	
	refrescar: function(){
    	console.log("Refresco");
    },
    
    deleteContact: function(){
		console.log('Borrando desde controlador');
		Ext.Msg.confirm("Cuidado!", "Seguro que deseas borrar los datos de este contacto?", 
			function(buttonId){
				if(buttonId == "yes"){
		var contacto = this.getEditor();
		var info = contacto.getRecord();
		var myStore = Ext.getStore("Contactos");

		myStore.remove(info);
		myStore.sync();
		
		this.activaAgenda();
		}}, this);
    },
	
	launch: function () {
        this.callParent();
		Ext.getStore("Contactos").load();
		Ext.getStore("Notificaciones").load();
		Ext.getStore("Clasificacion").load();
		Ext.getStore("Transacciones").load();
		Ext.getStore("Cuentas").load();
		console.log('Stores Cargados!');
    },
});