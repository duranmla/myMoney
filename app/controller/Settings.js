Ext.define('myMoney.controller.Settings', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            settings: 'configuracion',
			presupuesto: 'presupuesto',
        },
        control: {
			//Controlando para ver y agregar categorias, cuentas y bancos
			'configuracion #verClass': {
				tap: 'show'
			},
			'configuracion #addClass': {
				tap: 'add'
			},
			
			'configuracion #verAcc': {
				tap: 'show'
			},
			
			'configuracion #addAcc': {
				tap: 'add'
			},
			
			'configuracion #verBank': {
				tap: 'show'
			},
			
			'configuracion #addBank': {
				tap: 'add'
			},
			
			//Controlando para guardar los datos de la configuracion
			'configuracion #ordenPick':{
				change: 'ordena'
			},
			
			'configuracion #syncWebField': {
				change: 'obtengoData'
			},
			
			'configuracion #wifiField': {
				check: 'obtengoData',
				uncheck: 'obtengoData'
			},
			
			'configuracion #redField': {
				check: 'obtengoData',
				uncheck: 'obtengoData'			}
        },
    },

	//Muestra Cuentas, Categorias o Bancos
	show: function(button, id){
	itemSelect = null;
	
	if(button.getId() == 'verClass'){
		var elStore = 'Categorias';
	}else if(button.getId() == 'verBank'){
		var elStore = 'Bancos';
	}else{
		var elStore = 'Cuentas';
	}
	
		var showAccount = Ext.Viewport.add({
			xtype: 'panel',
			layout: 'fit',
			scrollable: true,
			hideOnMaskTap: true,
			modal: true,
			top: '10%',
			width: screen.availWidth/1.5,
			height: screen.availHeight/2,
			styleHtmlCls: true,
			
				items:[
					{
						xtype: 'list',
						store: elStore,
						itemTpl: '{name}',
						listeners: {
								//Capturo el item seleccionado para almacenarlo si se quiere borrar.
								select: function(view, record) {
									itemSelect = record;
									console.log(itemSelect);
								}
						}
					},
					{
						xtype: 'toolbar',
						docked: 'bottom',
						items: [{xtype: 'button',
								 text: 'Cerrar',
								 	handler: function(){
										showAccount.hide();
									}
								},
								{xtype: 'spacer'},
								{
									xtype: 'button',
									iconMask: true,  
									iconCls:'x-icon-mask trash', 
									ui: 'plain',
									handler: function(){
										if(itemSelect==null){return;}
										showAccount.hide();
										Ext.Msg.confirm('Espera!', 'Estas seguro de borrar la categoria '+itemSelect.data.name+'?', function(buttonId){
											if(buttonId=='yes'){
												var myStore = Ext.getStore(elStore);
												myStore.remove(itemSelect);
												myStore.sync();
												if(elStore == 'Categorias'){
													console.log('Borrando de Presupuesto')
													var myStore = Ext.getStore('Presupuestos');
													var target = myStore.findExact('name', itemSelect.data.name);
													myStore.removeAt(target);
													myStore.sync();
													Ext.getCmp('presId').fillParametres();
												}
											}
											showAccount.show();												
										});
									},
									scope: this
								}
						]
					}
				]
		});
	},
	
	//Crea Cuentas, Categorias o Bancos
	add: function(button, id){
	if(button.getId() == 'addClass'){
		var elStore = 'Categorias';
		var msg = 'Categoría'
		console.log('Agrego en Categoria');
	}else if(button.getId() == 'addBank'){
		var elStore = 'Bancos';
		var msg = 'Banco'
	}else{
		var elStore = 'Cuentas';
		var msg = 'Cuenta'
		console.log('Agrego en Cuenta');
	}
		//Agrego una pequena ventana para introducir los datos.
		var newClass = Ext.Viewport.add({
			xtype: 'formpanel',
			layout: {type: 'vbox', pack: 'center', align: 'Stretch'},
			hideOnMaskTap: true,
			modal: true,
			top: '10%',
			width: screen.availWidth,
			height: screen.availHeight/2,
			
			items: [
				{
					xtype: 'fieldset',
					items: [{
						xtype: 'textfield',
						label: 'Nombre',
						placeHolder: ''+msg,
						name: 'classn'
					}]	
				},
				{
					xtype: 'toolbar',
					docked: 'bottom',
					items: [
						{
							xtype: 'button',
							text: 'Cancelar',
							handler: function(){newClass.hide()}
						},{xtype: 'spacer'},
						{
							//Boton que permite el guardado de la informacion
							xtype: 'button',
							text: 'Guardar',
							handler: function(){
								
								var value = newClass.getValues();
								var newClassInfo = Ext.create("myMoney.model.Name", {
									name: value.classn,//El valor del campo que se acaba de llenar
								});
								
								//Validacion de errores
								var errors = newClassInfo.validate();
								
								if (!errors.isValid()) {
									newClass.hide();
									Ext.Msg.alert('Espera!', errors.getByField("name")[0].getMessage(), function(){newClass.show();});
									return;
									
								}
								
								var myStore = Ext.getStore(elStore);
								
								//Se busca coincidencias del mismo nombre para asi evitar solapamientos
								if (null == myStore.findRecord('name', value.classn)) {
									myStore.add({name: value.classn});
										//Aqui se asegura que el store de Presupuesto tenga todas las categorias agregadas
										if(elStore == 'Categorias'){								
											var storeP = Ext.getStore('Presupuestos');
											
											storeP.add({name: value.classn, monto: 0});
											storeP.sync();

											//Actualizo los parametros del presupuesto porque se agrego una categoria
											Ext.getCmp('presId').fillParametres();										
										}
									myStore.sync();
									newClass.hide();
									Ext.Msg.alert('Hecho', 'La información se ha almacenado satisfactoriamente');							
								}else{
									newClass.hide();
									Ext.Msg.alert('Espera!', 'Esa '+msg+' ya existe', function(){newClass.show();});
									//return;
								}
							}
							
						},
					]
				}
			],
				
		});
	},
	
	//Configurar historial listado
	ordena: function(picker, valorNew, valorOld){
		var store = Ext.getStore('Transacciones');
//		store.setGroupDir('ASC').sort();
		
		store.setGrouper(valorNew).sort();
		this.obtengoData();
	},
	
	//Tomando los valores necesarios para entrar a la funcion configura corrrectamente
	obtengoData: function(){
		var syncSet = Ext.getCmp('syncWebField').getValue(); 
		var sortSet = Ext.getCmp('ordenPick').getValue();
		var wifiSet = Ext.getCmp('wifiField').isChecked();
		var redSet = Ext.getCmp('redField').isChecked();
		this.configura(syncSet, sortSet, wifiSet, redSet);
	},
	
	//Almacenando informacion de la Configuracion
	configura: function(syncSet, sortSet, wifiSet, redSet){
		var store = Ext.getStore('SettingsValues');
		var model = this.getSettings();
		
		var	myRecord = Ext.create('myMoney.model.SettingsValues',{
				syncWeb: syncSet,
				wifi: false,
				movil: false,
				sortHist: sortSet,
		});

		store.removeAll();
		store.sync();
		
			if (store.findRecord('id', myRecord.id)==null){
					store.add(myRecord);
					store.sync();
			}
	}
});