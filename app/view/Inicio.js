Ext.define('myMoney.view.Inicio', {
	extend: 'Ext.form.Panel',
	xtype: 'inicio',
	fullscreen: true,
	scrollable: true,
	
	requires: ['Ext.form.FieldSet','Ext.field.Password'],
	
	config: {
		title: 'Inicio',
		iconCls: 'home',
		
		items: [
			{
				xtype: 'toolbar',
				title: 'Inicio de Sesion',
				docked: 'top'
			},
			{
				xtype: 'fieldset',
				title: 'Inicio de Sesion',
				docked: 'top',
				id: 'loginForm',
				instructions: '(Por favor coloca tu usuario y clave)',
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
				width: '50%',
				centered: true,
				docked: 'bottom',
				text: 'Aceptar',
				ui: 'confirm',
				id: 'logButton'
				
			}
		]
		
	}

});