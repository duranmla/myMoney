Ext.define('myMoney.controller.Acciones', {
    extend: 'Ext.app.Controller',
	
	requires: [
		'Ext.field.Select',
		'Ext.field.Number',
		'Ext.field.DatePicker',
	],
	    
	config: {
        refs: {
			acciones: 'acciones'
        },
        control: {
			'acciones list':{
				itemtap: 'showDetails'
			}
        }
    },
	
	showDetails: function(list, index, element, record){
		switch(index){
		case 0:
				this.getAcciones().push({ //Permite desplegar una vista sobre la misma tap
					xtype: 'formpanel',
					styleHtmlContent: true,
					title: record.get('title'),
					url: 'consumo.php',
					
					items: [
						{
							xtype: 'fieldset',
							title: 'Consumo',
							instructions: '(Describa los detalles del consumo)',
							
							items: [
								{
									xtype: 'selectfield',
									label: 'Clasificacion',
									name: 'clasificacion',
									store: 'Clasificacion',
									displayField: 'name',
									valueField: 'name'
								},
								{
									xtype: 'textfield',
									name: 'descripcion',
									label: 'Descripcion'
								},
								{
									xtype: 'numberfield',
									label: 'Monto',
									minvalue: 0.1,
									name: 'monto'
								},
								{
									xtype: 'selectfield',
									label: 'Cuenta',
									name: 'cuenta',
									store: 'TipoPago',
									displayField: 'name',
									valueField: 'name',
								},
								{
									xtype: 'datepickerfield',
									label: 'Fecha',
									name: 'fecha',
									value: new Date()
								}
								
							]
						},
						{
							xtype: 'button',
							text: 'Aceptar',
							ui: 'confirm',
							/*==================ENVIANDO DATOS DEL CONSUMO A LA BASE DE DATOS=======================*/
							handler: function(){
								this.up('formpanel').submit()
							}
						}
					]
					//html: record.get('content'),
				});
		break;
		
		//case 1: alert('No Implementado Aun');
		//break;
		
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
