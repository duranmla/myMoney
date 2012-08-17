Ext.define('myMoney.controller.Acciones', {
    extend: 'Ext.app.Controller',
	
	requires: [
		'Ext.field.Select',
		'Ext.field.Number',
		'Ext.field.DatePicker',
		'Ext.ActionSheet'
	],
	    
	config: {
        refs: {
			acciones: 'acciones',
			transaccion: 'transaccion',
			presupuesto: 'presupuesto',
			mainView: 'mainView',

			menuB: '#menuB',
			
        },
        control: {
			'acciones list':{
				itemtap: 'showDetails'
			},
			
			transaccion:{
				needBack: 'needBack',
				saveTransCommand: 'saveTransCommand'
			},
			
			presupuesto: {
				showMenuCommand: 'showMenuCommand',
				fillParametresCommand: 'fillParametresCommand',
				backViewCommand: 'needBack'
			},
			
			'presupuesto #bEdita': {
				tap: 'editaPCommand'
			}
        }
    },
	
	animacionIzq: {type: 'slide', direction: 'left'},
	animacionDer: {type: 'slide', direction: 'right'},
	
	//Funcion de ayuda
	buildStorePresupuesto: function(dataClass){

		var store = Ext.getStore('Presupuesto');
		
		for (i=0; i<dataClass.all.length; i++){
			if (null == store.findRecord('name', dataClass.all[i].data.name)) {
				store.add({name: dataClass.all[i].data.name,
				 			mount: 0});
			}
		}
		
		store.sync();
	},
	
	getData: function(theStore){
		var store = Ext.getStore(theStore);
		var dataClass = store.getData();
		
		return dataClass;
	},
	
	//Regresar al menu de acciones
	needBack: function(){
		Ext.Viewport.animateActiveItem(this.getMainView(), this.animacionDer)
	},
	
	//Editor de Presupuesto
	fillParametresCommand: function(){
		//Se incorporan las categorias del store dentro del fieldset de los parametros
		var dataClass = this.getData('Clasificacion');
		
		this.buildStorePresupuesto(dataClass);
		
		var dataClass = this.getData('Presupuesto');
		
		Ext.getCmp('myFSp').removeAll(true, true);
		
		for (i=0; i<dataClass.all.length; i++){		
			var field = {
				xtype: 'numberfield',
				id: dataClass.all[i].data.name,
				label: dataClass.all[i].data.name,
				value: dataClass.all[i].data.monto,
				minValue: 0,
			};
		
		Ext.getCmp('myFSp').add(field);
		}
	},
	
	editaPCommand: function(){
		console.log('Editando Presupuesto');
	},
	
	showMenuCommand: function(){
		
		var myMenu = Ext.Viewport.add({
			xtype: 'actionsheet',
			items: [{text: 'Guardar',ui: 'confirm'},
					{text: 'Cancelar', handler: function(){myMenu.hide()}},
					{text: 'Borrar',ui: 'decline'},
			]	
		});
	},
	
	//Guardado de las Transacciones
	
	saveTransCommand: function(){
		var model = this.getTransaccion();
		var values = model.getValues();

		var myInfo = Ext.create('myMoney.model.Transaccion', {
			"clasificacion": values.clasificacion,
			"descrip": values.descripcion,
			"monto": values.monto,
			"cuenta": values.cuenta,
			"date": values.fecha
		})

		var error = myInfo.validate();

		if(!error){
			Ext.Msg.alert('Espera!', error.getByField('descrip')[0].getMessage(), Ext.emptyFn);
			return;
		}
		
		if(values.descripcion!=""){
			var myStore = Ext.getStore('Transacciones');
			myStore.add(myInfo)
			myStore.sync();
			Ext.Msg.alert('Hecho', 'La informacion se ha almacenado satisfactoriamente');
			model.reset();
		}else{
			Ext.Msg.alert('Espera!', 'La transaccion debe tener una descripcion');
			model.reset();
		}
	},
	
	//Menu de Acciones
	
	showDetails: function(list, index, element, record){
		switch(index){
		case 0: 
			Ext.Viewport.animateActiveItem(this.getTransaccion(), this.animacionIzq);
		break;
		
		case 1: 
			Ext.Viewport.animateActiveItem(this.getPresupuesto(), this.animacionIzq);
		break;
		}
	},
});
