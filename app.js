Ext.application({
    name: 'myMoney',

    requires: [
        'Ext.MessageBox', 'Ext.TitleBar'
    ],

    models: ["Transaccion", "Name", "Contactos", "Presupuesto", "SettingsValues"],
	stores: ['Contactos','Cuentas','Transacciones','Presupuestos', 'Categorias', 'MontoPresupuesto', 'Bancos', 'SettingsValues'],
    controllers: ["Historial", "Settings", "Agenda", "Inicio", "Acciones"],
    views: ['Main','Inicio','Acciones','Agenda','Settings','Historial','ListaContactos', 'ContactoEditor', 
			'ListaN', 'Transaccion','HistorialGrafico', 'HistorialListado', 'Presupuesto', 'MyCal'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
		var principal = {xtype: 'mainView'};
		var contactoEditor = {xtype: 'contactoEditor'};
		var transaccion = {xtype: 'transaccion'};
		var historialGrafico = {xtype: 'historialGrafico'};
		var histList = {xtype: 'histList'};
		var presupuesto = {xtype: 'presupuesto'};
        Ext.Viewport.add([principal, contactoEditor, transaccion, historialGrafico, histList, presupuesto]);
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
	
	    "js": [
			{
				"path": "sdk/sencha-touch.js",
				"path" : "assets/scharts/sencha-touch-debug.js"
			},
			{
				"path" : "assets/scharts/touch-charts.js"
			},
			{
				"path": "app.js",
				"update": "delta"
			}
		],
});
