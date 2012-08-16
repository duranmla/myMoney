Ext.define('myMoney.view.Historial',{
	extend: 'Ext.Panel',
    xtype: 'historial',
    fullscreen: true,
	scrollable: true,
	

    config: {
        title: 'Historial',
        iconCls: 'time',
        layout: {
            type: 'fit',
        },

        items: [
			{xtype: 'toolbar', title: 'Historial', docked: 'top'},
            {
                xtype: 'list',
                itemTpl: '{title}',
		        styleHtmlContent: true,

				data: [
					{title: 'Ilustracion de Gastos'},
					{title: 'Historial Listado'}
				]
            },
        ]
    }
});