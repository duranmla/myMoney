Ext.define('myMoney.view.Acciones',{
	extend: 'Ext.navigation.View',
	fullscreen: true,
	scrollable: true,
	xtype: 'acciones',
	
	config: {
		title: 'Acciones',
		iconCls: 'compose',
		
		items: {
			xtype: 'list',
			fullscreen: true,
			itemTpl: '{title}',
			title: 'Transacciones',
			styleHtmlContent: true,
				
			data: [
				{ title: 'Transaccion Manual' },
				{ title: 'Presupuesto'}
			]
		}
	}

});