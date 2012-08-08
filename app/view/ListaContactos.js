Ext.define('myMoney.view.ListaContactos', {
	extend: 'Ext.dataview.List',
	alias: 'widget.listac',
	
	config: {
        loadingText: "Cargando Contactos...",
        emptyText: '</pre> <div class="notes-list-empty-text">No se encontraron Contactos.</div> <pre>',
		onItemDisclosure: true,
		grouped: true,
		itemTpl:'</pre><div class="list-item-title">{firstName}&nbsp;{lastName}</div><div class="list-item-narrative">{title}</div><pre>',
    }
	
});