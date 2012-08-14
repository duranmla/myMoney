Ext.define('myMoney.view.ListaN', {
	extend: 'Ext.dataview.List',
	alias: 'widget.listaN',
	
	config: {
        loadingText: "Cargando Notificaciones...",
        emptyText: '</pre> <div class="notes-list-empty-text">Sin Notificaciones.</div> <pre>',
		grouped: true,
		ui: 'round',
		itemTpl:'</pre><div class="list-item-title">{title}</div><div class="list-item-narrative">{fecha}</div><pre>',
    }
	
});