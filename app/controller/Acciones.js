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
			mainView: 'mainView'
        },
        control: {
			'acciones list':{
				itemtap: 'showDetails'
			},
			
			transaccion:{
				needBack: 'needBack',
				saveTransCommand: 'saveTransCommand'
			}
        }
    },
	
	animacionIzq: {type: 'slide', direction: 'left'},
	animacionDer: {type: 'slide', direction: 'right'},
	
	needBack: function(){
		Ext.Viewport.animateActiveItem(this.getMainView(), this.animacionDer)
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
		
		case 1: this.getAcciones().push({ 
					xtype: 'container',
					title: record.get('title'),
					layout: {
						type:'vbox',
					},
					defaults:{
						width: '50%',
						height: '50%',
						flex:1,
					},
					
					items: [
					    {
					    	xtype: 'button',
							id: 'npButton',
					    	text: '+ Nuevo Presupuesto',
						    listeners: {
								tap: function() {
									overlay = Ext.Viewport.add({
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
																overlay.hide(); // Para cerrar el Panel
																Ext.Msg.alert("Plan Mensual Editado!");  
															}
														}
													},  
													{
														xtype: 'button',
														ui: 'normal',
														text: 'Cancelar',
														listeners : {
															tap : function() {
																overlay.hide();
															}
														}              
													},                  
												]
											},
											{
												xtype: 'fieldset',
												centered: true,
												title: 'Plan Mensual',
												items: [
													{
														xtype: 'textfield',
														label: 'Titulo',
														placeHolder: 'Nombre del parametro',
														name: 'pDesc'
													},
													{
														xtype: 'numberfield',
														label: 'Monto',
														placeHolder: 'Monto planificado',
														name: 'pAmount'
													}
												]
											},
										]
									});
								}
							}
					    }
					]
				});
		break;
		}
	},
});
