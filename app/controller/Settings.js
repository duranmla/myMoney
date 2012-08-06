Ext.define('myMoney.controller.Settings', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            settings: 'configuracion'
        },
        control: {
		
			'configuracion #verCuentas': {
				tap: 'showAccount'
			},
			
			'configuracion #addCuentas': {
				tap: 'addAccount'
			}

        }
    },
	
	showAccount: function(button, id){
		showAccount = Ext.Viewport.add({
			xtype: 'panel',
			layout: 'fit',
			scrollable: true,
			hideOnMaskTap: true,
			modal: true,
			centered: true,
			width: '20%',
			height: '80%',
			styleHtmlCls: true,
				items:[
					{
						xtype: 'list',
						store: 'Clasificacion',
						itemTpl: '{name}'
					}
				]
		});
	},
	
	addAccount: function(button, id){
		addAccount = Ext.Viewport.add({
			xtype: 'panel',
			layout: 'fit',
			scrollable: true,
			hideOnMaskTap: true,
			modal: true,
			centered: true,
			width: '40%',
			height: '50%',
			styleHtmlCls: true,
			
				items:[
					{
						xtype: 'fieldset',
						title: 'Nueva Cuenta',
						
						items: [
							{
								xtype: 'textfield',
								label: 'Nombre',
								placeHolder: 'Nombre de la Cuenta',
								name: 'nameAccount',
							}
						]
					},
					{
						xtype: 'titlebar',
						docked: 'bottom',
						items: [
							{
								xtype: 'button',
								text: 'Aceptar',
						
								handler: function(){ //Modificamos el archivo "Clasificacion.json"
								
									
								}

							},
							{
								xtype: 'button',
								text: 'Cancelar',
								
								handler: function(){ //Cerramos la ventana emergente
									addAccount.hide();
								}
							}
						]
					}
				]
		});
	}
});