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
			mainView: 'mainView'
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
				addFieldCommand: 'addFieldCommand'
			}
        }
    },
	
	animacionIzq: {type: 'slide', direction: 'left'},
	animacionDer: {type: 'slide', direction: 'right'},
	
	needBack: function(){
		Ext.Viewport.animateActiveItem(this.getMainView(), this.animacionDer)
	},
	
	addFieldCommand: function(){
		var field = {
				xtype: 'numberfield',
				label: 'Monto Mensual',
				value: 0,
				minValue: 0,
		};
		
		Ext.getCmp('myFS').add(field);
	},
	
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
