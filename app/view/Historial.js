Ext.define('myMoney.view.Historial',{
	extend: 'Ext.navigation.View',
	xtype: 'historial',
	fullscreen: true,
	scrollable: true,
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