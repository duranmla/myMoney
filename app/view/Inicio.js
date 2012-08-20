Ext.define('myMoney.view.Inicio', {
	extend: 'Ext.form.Panel',
	xtype: 'inicio',
	fullscreen: true,
	scrollable: true,
	
	requires: ['Ext.form.FieldSet','Ext.field.Password'],
	
	config: {
		title: 'Inicio',
		iconCls: 'home',
		layout: {
			type: 'vbox',
			pack: 'center',
			align: 'center',
		},
		
		items: [
			{
				xtype: 'toolbar',
				title: 'Bienvenido(a)',
				docked: 'top'
			},
			{
				xtype: 'fieldset',
				margin: '20',
				title: 'Inicio de Sesión',
				id: 'loginForm',
				instructions: 'Por favor coloca tu usuario y clave, luego presione el botón aceptar',
				styleHtmlContent: true,
				
				items: [
					{
						xtype: 'textfield',
						name: 'us',
						label: 'Usuario',
						placeHolder: 'Usuario'
					},
					{
						xtype: 'passwordfield',
						name: 'pw',
						label: 'Clave',
						placeHolder: 'Clave de Usuario'
					}
				]
			},
			{
				xtype: 'button',
				width: screen.availWidth/4,
				text: 'Aceptar',
				ui: 'confirm',
				id: 'logButton'
				
			},
		]
		
	},
});