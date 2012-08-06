Ext.define("myMoney.view.Main", {
    extend: 'Ext.tab.Panel',
	xtype: 'mainView',
	
    requires: [
        'Ext.TitleBar',
    ],
	
    config: {
        tabBarPosition: 'bottom',

        items: [
           {
				xtype: 'inicio'
		   },
		   {
				xtype:'acciones'
		   },
		   {
				xtype:'agenda'
		   },
		   {
				xtype:'historial'
		   },
		   {
				xtype:'configuracion'
		   }
        ]
    }
});
