Ext.define('myMoney.view.Acciones',{
	extend: 'Ext.Panel',
    xtype: 'acciones',
    fullscreen: true,
	scrollable: true,


    config: {
        title: 'Acciones',
        iconCls: 'compose',
        layout: {
            type: 'fit',
        },

        items: [
			{xtype: 'titlebar', title: 'Acciones', docked: 'top'},
            {
                xtype: 'list',
                itemTpl: '{item}',
		        styleHtmlContent: true,

                data: [
                    {item: 'Transacciones'},
                    {item: 'Presupuesto'},
                ]
            },
        ]
    }

});