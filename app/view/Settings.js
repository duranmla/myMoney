Ext.define('myMoney.view.Settings',{
	extend: 'Ext.Container',
	fullscreen: true,
	xtype: 'configuracion',
	
	requires: ['Ext.field.Toggle', 'Ext.SegmentedButton'],
	
	config: {
		title: 'Configuración',
		iconCls: 'settings',
		scrollable: true,
		styleHtmlContent: true,
		layout: {
			type: 'vbox',
			align: 'center'
		},
		defaults: {
			width: screen.availWidth/2,
			height: '50%',
			flex:1,
		},

		items: [
			{
				xtype: 'fieldset',
				title: 'Permitir Sincronizacion Web',
				instructions: 'Esta opcion debe estar habilitada para poseer respaldo de su información y permitir el acceso desde otros dispositivos (verifique su plan de datos)',
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
				title: 'Configuracion de Categorías',
				instructions: 'Elimine/Agregue Categorías',
				
				items: [
					{
						xtype: 'segmentedbutton',
						
						items:	[
							{
								id: 'verClass',
								ui: 'action',
								text: 'Categorías',
								width: screen.availWidth/2,
								handler: function(){this.fireEvent('verClassCommand', this);} 
							},
							{
								id: 'addClass',
								iconMask: true,
								iconCls: 'add',
								ui: 'action',
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
							width: screen.availWidth/2,
						},
						{
							id: 'addAcc',
							iconMask: true,
							iconCls: 'add',
							ui: 'action',
						}
						]
					}
				]
			},
			{
				xtype: 'fieldset',
				title: 'Configuracion de Bancos',
				instructions: 'Elimine/Agregue Bancos',
				
				items: [
					{
						xtype: 'segmentedbutton',
						
						items: [
						{
							id: 'verBank',
							ui: 'action',
							text: 'Bancos',
							width: screen.availWidth/2,
						},
						{
							id: 'addBank',
							iconMask: true,
							iconCls: 'add',
							ui: 'action',
						}
						]
					}
				]
			},
			{
				xtype: 'fieldset',
				title: 'Configuracion Historial Listado',
				instructions: 'Configure el orden en el que se muestran las transacciones',
				
				items: [
					{
						xtype: 'selectfield',
						id: 'ordenPick',
						label: 'Ordenar por:',
						labelWidth: screen.availWidth/4,
						 
                    		options: [
								{text: 'Fecha',  value: 'date'},
								{text: 'Categoría',  value: 'clasificacion'},
								{text: 'Descripción', value: 'descripcion'},
								{text: 'Monto',  value: 'monto'},
								{text: 'Cuenta',  value: 'cuenta'},
							],
					}
				]
			}
		]
	},
});