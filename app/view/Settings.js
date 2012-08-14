Ext.define('myMoney.view.Settings',{
	extend: 'Ext.Container',
	fullscreen: true,
	xtype: 'configuracion',
	
	requires: ['Ext.field.Toggle'],
	
	config: {
		title: 'Configuracion',
		iconCls: 'settings',
		scrollable: true,
		styleHtmlContent: true,
		layout: {
			type: 'vbox',
			align: 'middle'
		},
		defaults: {
			width: '50%',
			height: '50%',
			flex:1,
		},

		items: [
			{
				xtype: 'fieldset',
				title: 'Permitir Sincronizacion Web',
				instructions: 'Esta opcion debe estar habilitada para poseer respaldo de su informacion y permitir el acceso desde otros dispositivos (verifique su plan de datos)',
				items: [
				    {
					   	xtype: 'togglefield',
					    name: 'confred',
					    value: 1,
					    label: 'Off/On',
				    }
			    ]
			},
	        {
	            xtype: 'fieldset',
	            title: 'Cuando Permitir Conexion',
	            instructions: 'Habilite ambas opciones de ser necesario',
	            items: [
	                {
	                    xtype: 'checkboxfield',
	                    label: 'Wi-Fi',
	                    name: 'redop1',
	                },
	                {
	                    xtype: 'checkboxfield',
	                    label: 'Red Movil',
	                    name: 'redop2',
	                }
	            ]
	        },
			{
				xtype: 'fieldset',
				title: 'Configuracion de Categorias',
				instructions: 'Agregue/Elimine Categorias',
				
				items: [
					{
						xtype: 'button',
						id: 'verClass',
						ui: 'confirm',
						text: 'Categorias',
						handler: function(){
							console.log('Ver clases');
							this.fireEvent('verClassCommand', this);
						}, 
					},
					{
						xtype: 'button',
						id: 'addClass',
						ui: 'confirm',
						text: 'Nueva'
					}
				]
			},
			{
				xtype: 'fieldset',
				title: 'Configuracion de Cuentas',
				instructions: 'Agregue/Elimine Cuentas',
				
				items: [
					{
						xtype: 'button',
						id: 'verAcc',
						ui: 'confirm',
						text: 'Cuentas',
					},
					{
						xtype: 'button',
						id: 'addAcc',
						ui: 'confirm',
						text: 'Nueva'
					}
				]
			}
		]
	},
});