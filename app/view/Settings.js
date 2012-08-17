Ext.define('myMoney.view.Settings',{
	extend: 'Ext.Container',
	fullscreen: true,
	xtype: 'configuracion',
	
	requires: ['Ext.field.Toggle', 'Ext.SegmentedButton'],
	
	config: {
		title: 'Configuracion',
		iconCls: 'settings',
		scrollable: true,
		styleHtmlContent: true,
		layout: {
			type: 'vbox',
			align: 'center'
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
						labelWidth: screen.availWidth/4,
				    }
			    ]
			},
	        {
	            xtype: 'fieldset',
				id: 'conectionField',
	            title: 'Cuando Permitir Conexion',
	            instructions: 'Habilite ambas opciones de ser necesario',
	            items: [
	                {
	                    xtype: 'checkboxfield',
	                    label: 'Wi-Fi',
	                    name: 'redop1',
						labelWidth: screen.availWidth/4,
	                },
	                {
	                    xtype: 'checkboxfield',
	                    label: 'Red Movil',
	                    name: 'redop2',
						labelWidth: screen.availWidth/4,
	                }
	            ]
	        },
			{
				xtype: 'fieldset',
				title: 'Configuracion de Categorias',
				instructions: 'Elimine/Agregue Categorias',
				
				items: [
					{
						xtype: 'segmentedbutton',
						
						items:	[
							{
								id: 'verClass',
								ui: 'action',
								text: 'Categorias',
								width: screen.availWidth/4,
								handler: function(){this.fireEvent('verClassCommand', this);} 
							},
							{
								id: 'addClass',
								ui: 'action',
								text: 'Nueva',
								width: screen.availWidth/4,
							}
						]
					}
				]
			},
			{
				xtype: 'fieldset',
				title: 'Configuracion de Cuentas',
				instructions: 'Elimine/Agregue Cuentas',
				
				items: [
					{
						xtype: 'segmentedbutton',
						
						items: [
						{
							id: 'verAcc',
							ui: 'action',
							text: 'Cuentas',
							width: screen.availWidth/4,
						},
						{
							id: 'addAcc',
							ui: 'action',
							text: 'Nueva',
							width: screen.availWidth/4,
						}
						]
					}
				]
			}
		]
	},
});