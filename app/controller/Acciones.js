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
			},
			
			'presupuesto #bAcepta': {
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
				 			monto: 0});
			}
		}
		
		store.sync();
		
		store.sort([{property: 'name'}, {direction: 'DESC'}]);
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
				name: dataClass.all[i].data.name,
				label: dataClass.all[i].data.name,
				value: dataClass.all[i].data.monto,
				minValue: 0,
			};
		
		Ext.getCmp('myFSp').add(field);
		Ext.getCmp('myFSp').setDisabled(true);
		Ext.getCmp('myFSm').setDisabled(true);
		}
	},
	
	editaPCommand: function(button){
		if(button.getId()=='bEdita'){
			Ext.getCmp('myFSp').setDisabled(false);
			Ext.getCmp('myFSm').setDisabled(false);
		}else{
			Ext.getCmp('myFSp').setDisabled(true);
			Ext.getCmp('myFSm').setDisabled(true);
		}
	},
	
	showMenuCommand: function(){
		
		myMenu = Ext.Viewport.add({
			xtype: 'actionsheet',
			items: [{text: 'Guardar',ui: 'confirm', handler: this.savePresupuesto, scope: this},
					{text: 'Cancelar', handler: function(){myMenu.hide()}},
					{text: 'Borrar',ui: 'decline'},
			]	
		});
	},
	
	//Guardando Presupuesto
	savePresupuesto: function(){
		
		var store = Ext.getStore('Presupuesto');
		var model = this.getPresupuesto();
		var values = model.getValues();
		
		//Gestion del Monto base lo obtengo a traves de: (model.getItems().map.myFSm.items.items[0]);
		
		/*var montoMensual = (model.getItems().map.myFSm.items.items[0]);
		if(null == store.findRecord('name', montoMensual.getName())){
			store.add({name: montoMensual.getName()}, {monto: 0});
		}else{
			var index = store.findExact('name', montoMensual.getName());
			var record = store.getAt(index);
			record.set('monto', montoMensual.getValue());
		}*/
		
		//Ruta de los Parametros del presupuesto y si se sustituye getLabel por getValue obtenemos el valor
		//model.getItems().map.myFSp.items.items[0].getLabel()
		
		var info = model.getItems().map.myFSp.items.items;
		for (i=0; i<store.getCount(); i++){
			if(null != store.findRecord('name', info[i].getLabel())){
				var index = store.findExact('name', info[i].getLabel());
				var record = store.getAt(index);
				record.set('monto', info[i].getValue());
			}
		}
		
		store.sync();	
		myMenu.hide();
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
