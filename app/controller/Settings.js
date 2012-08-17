Ext.define('myMoney.controller.Settings', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            settings: 'configuracion',
        },
        control: {
			
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
			}

        }
    },
		
	show: function(button, id){
	if(button.getId() == 'verClass'){
		var elStore = 'Clasificacion';
	}else{
		var elStore = 'Cuentas';
	}
	
		var showAccount = Ext.Viewport.add({
			xtype: 'panel',
			layout: 'fit',
			scrollable: true,
			hideOnMaskTap: true,
			modal: true,
			centered: true,
			width: screen.availWidth/2,
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
								}
						}
					},
					{
						xtype: 'toolbar',
						docked: 'bottom',
						items: [{xtype: 'spacer'},
								{
									xtype: 'button',
									iconMask: true,  
									iconCls:'x-icon-mask trash', 
									ui: 'plain',
									handler: function(){
										console.log('borro '+itemSelect);
										var myStore = Ext.getStore(elStore);
										myStore.remove(itemSelect);
										myStore.sync();
										itemSelect = null;
									}
								}
						]
					}
				]
		});
	},
	
	add: function(button, id){
	if(button.getId() == 'addClass'){
		var elStore = 'Clasificacion';
		var msg = 'categoria'
	}else{
		var elStore = 'Cuentas';
		var msg = 'cuenta'
	}
	
		var newClass = Ext.Viewport.add({
			xtype: 'formpanel',
			hideOnMaskTap: true,
			modal: true,
			centered: true,
			width: screen.availWidth/2,
			height: screen.availHeight/4,
			
			items: [
				{
					xtype: 'fieldset',
					items: [{
						xtype: 'textfield',
						label: 'Nombre',
						placeHolder: 'Nombre de la '+msg,
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
							xtype: 'button',
							text: 'Guardar',
							handler: function(){
								
								var value = newClass.getValues();
								var newClassInfo = Ext.create("myMoney.model.Name", {
									name: value.classn,
								});
								
								var errors = newClassInfo.validate();
		
								if (!errors.isValid()) {
									Ext.Msg.alert('Espera!', errors.getByField("name")[0].getMessage(), Ext.emptyFn);
									return;
								}
								
								var myStore = Ext.getStore(elStore);

								if (null == myStore.findRecord('name', value.classn)) {
									myStore.add({name: value.classn});								
								}else{
									Ext.Msg.alert('Espera!', 'Esa '+msg+' ya existe', Ext.emptyFn);
									Ext.Msg.alert('Hecho', 'La informacion se ha almacenado satisfactoriamente');
									newClass.reset();
									return;
								}
								
								myStore.sync();
								newClass.hide();
							}
							
						},
					]
				}
			],
				
		});
	},
	
});