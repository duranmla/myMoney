Ext.define('myMoney.controller.Acciones', {
    extend: 'Ext.app.Controller',
	
	requires: [
		'Ext.field.Select',
		'Ext.field.Number',
		'Ext.field.DatePicker',
	],
	    
	config: {
        refs: {
			acciones: 'acciones',
			transaccion: 'transaccion',
			presupuesto: 'presupuesto',
			mainView: 'mainView',
			myMenu: '#myMenu',
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
				addFieldCommand: 'addFieldCommand',
				showMenuCommand: 'showMenuCommand'
			}
        }
    },
	
	animacionIzq: {type: 'slide', direction: 'left'},
	animacionDer: {type: 'slide', direction: 'right'},
	animacionUp: {type: 'slide', direction: 'top'},
	
	//Regresar al menu de acciones
	
	needBack: function(){
		Ext.Viewport.animateActiveItem(this.getMainView(), this.animacionDer)
	},
	
	//Editor de Presupuesto
	
	showMenuCommand: function(){
		console.log('Muestra Menu!');
	},
	
	addFieldCommand: function(){
		Ext.Msg.prompt(
			'Nuevo Parametro',
			'Inserta una descripcion del parametro',
			function (buttonId, value) {
				if(buttonId!='cancel'){
				var field = {
					xtype: 'numberfield',
					id: value,
					label: value,
					value: 0,
					minValue: 0,
				};
				Ext.getCmp('myFSp').add(field);}		
			},
			{placeHolder : 'Titulo'}
		);
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
