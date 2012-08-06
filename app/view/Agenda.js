Ext.define('myMoney.view.Agenda',{
	extend: 'Ext.navigation.View',
	fullscreen: true,
	scrollable: true,
	xtype: 'agenda',
	
	config: {
	    navigationBar: {
	        items: [
	                   { 
	                	   iconMask: true, 
	                	   ui: 'plain',  
	                	   iconCls: 'refresh',
	                	   id: 'actualizar',
	                	   hidden: false
	                   },
	                   { 
	        			   iconMask: true, 
	        			   ui: 'plain', 
	        			   iconCls:'x-icon-mask trash',
	        			   id: 'borrar',
	        			   hidden: false,
					   },
			           { 
	                	   iconMask: true, 
	                	   ui: 'plain', 
	                	   iconCls: 'add',
	                	   id: 'anadir',
	                	   hidden: false
	        		   },
			           {
			                xtype: 'searchfield',
			                placeHolder: 'Buscar',
			                align: 'right',
			                id: 'agendSearch',
/*		                    listeners: {
		                        scope: this,
		                        clearicontap: this.onSearchClearIconTap,
		                        keyup: this.onSearchKeyUp
		                    }*/
			           }
           ]
	    },
		title: 'Agenda',
		iconCls: 'bookmarks',
		
		items: [
		    
			{
				xtype: 'list',
				id: 'listaContactos',
				title: 'Contactos',
				grouped: true,
				fullscreen: true,
				styleHtmlCls: true,
				
				store: 'Contactos',
				
				itemTpl: [
				    '<B>{firstName} {lastName}</B><BR>',
				    '<FONT size=2>{title}</FONT>'
				].join(''),
														   
			},
		]
	},




/**
 * Llamado cuando la barra de busqueda tiene un evento keyup
 */
onSearchKeyUp: function(field) {
    //Se obtiene el store y el valor del field
    var value = field.getValue(),
        store = Ext.data.StoreManager.lookup('Contactos');

    //se limpian los filtros actuales del store para comenzar la nueva busqueda
    store.clearFilter();

    //Verificamos que el valor tenga alguna  modificacion
    if (value) {
        //El usuario pudo haber introducido espacion en blanco,asi que los cortamos para poder recorrer todo el valor 
        var searches = value.split(' '),
            regexps = [],
            i;

        //recorremos todo el valor
        for (i = 0; i < searches.length; i++) {
            //si no hay nada continuamos
            if (!searches[i]) continue;

            //Si encontramos algo creamos una expresion regular que es sensible a mayusculas
            regexps.push(new RegExp(searches[i], 'i'));
        }

        //Ahora se filtra el store
        //El metodo se pasara a cada record en el store
        store.filter(function(record) {
            var matched = [];

            //Iteramos a traves de cada expresion regular
            for (i = 0; i < regexps.length; i++) {
                var search = regexps[i],
                    didMatch = record.get('firstName').match(search) || record.get('lastName').match(search);

                //Si coincide el primer o ultimo nombre se coloca en la lista de los que coinciden
                matched.push(didMatch);
            }

            //Si nada se consigue no se retorna nada
            if (regexps.length > 1 && matched.indexOf(false) != -1) {
                return false;
            } else {
                //Si no se muestra lo que se encontro
                return matched[0];
            }
        });
    }
},

/**
 * Llamado cuando el usuario presiona el icono de 'x' en la barra de busqueda
 * Solo que quitan los filtros del store
 */
onSearchClearIconTap: function() {
	store = Ext.data.StoreManager.lookup('Contactos');
	store.clearFilter();
},

});