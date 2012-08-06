Ext.define('myMoney.view.Historial',{
	extend: 'Ext.navigation.View',
	fullscreen: true,
	scrollable: true,
	xtype: 'historial',
	id: 'histId',
	
	config: {
		title: 'Historial',
		iconCls: 'time',
		
		items: [
			{
				xtype: 'list',
				id: 'histList',
				itemTpl: '{title}',
				title: 'Historial',
				styleHtmlContent: true,
				
				data: [
					{title: 'Historico de Gastos'},
					{title: 'Grafico de Gastos'}
				]
			},
		]
	}

});