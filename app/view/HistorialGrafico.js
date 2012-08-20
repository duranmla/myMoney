Ext.define('myMoney.view.HistorialGrafico', {
	extend: 'Ext.Panel',
	alias: 'widget.historialGrafico',
	
	config: {
		layout: 'fit',
		
		listeners: {
			//Actualiza la data que sera mostrada en el historial
			painted: function(){
				valores = this.distribAcumulado();
				console.log('Los valores son:');
				console.log(valores);
				
				var store = Ext.getStore('HistorialGrafico');
				
				var laInfo = Ext.create('myMoney.model.HistorialGrafico',{
					name: "",
					montoR: 0,
					montoIdl: 0
				});

				var categoria = valores[0];
				var montoReal = valores[1];
				var montoIdle = valores[2];
				
				for(i=0;i<valores[0].length;i++){
					
					var target = store.findRecord('name', categoria[i]);
					
					if(target!=null){
						var indice = store.findExact('name', categoria[i]);
						var record = store.getAt(indice);
		
						record.set('montoR', montoReal[i]);
						record.set('montoIdl', montoIdle[i]);
						
						console.log('Modificado');
					}else{
						laInfo.set('name', categoria[i]);
						laInfo.set('montoR', montoReal[i]);
						laInfo.set('montoIdl', montoIdle[i]);
						store.add(laInfo);
						
						console.log('Colocado');
					}
						store.sync();
				}
				store.sort([{ property: 'firstName', direction: 'DESC'}]);				
			},
		},
	},
	
	initialize: function(){
		this.callParent(arguments);
		
		var backButton = {
			xtype: 'button',
			text: 'Historial',
			ui: 'back',
			handler: this.backButtonTap,
			scope: this,
		};
		
		var topBar = {
			xtype: 'toolbar',
			docked: 'top',
			title: 'Hist. Ilustrado',
			
			items: [backButton]
		};
		
		//Molde para mostrar la data de forma que cumpla con los requerimientos
		var tpl = new Ext.XTemplate(
			'<p>Clasificacion: ',
			'<tpl for=".">',
				'<p>{name}</p>',
			'</tpl></p>'
		);
		//Fin del molde
		
		var lista = {
				xtype: 'list',
				store: Ext.getStore('HistorialGrafico'),
                itemTpl: tpl,
				ui: 'round',
		        styleHtmlContent: true,
		}
		
		this.add([topBar, lista]);
	},
	
	//funciones locales
	backButtonTap: function(){
		this.fireEvent('needBack');
	},
	
	//Tomo la cantidad de clasificaciones que hay
	distribAcumulado: function(){
		misCat = new Array();
		misIdl = new Array();
		var store = Ext.getStore('Presupuestos');
		var datos = store.getData();

		if(store.getCount()!=0){
			for (i=0;i<store.getCount();i++){
				misCat[i]= datos.all[i].getData().name;
				misIdl[i]= datos.all[i].getData().monto;
			}
			
			var montosAcumulados = new Array();
			for	(i=0;i<misCat.length;i++){
				montosAcumulados[i] = this.acumulado(misCat[i]);
			}
		}
		
		retorno = [ misCat, montosAcumulados, misIdl];
		
	return retorno;
	},
	
	//Funcion que me permite ver el monto acumulado de las transacciones segun la categoria
	acumulado: function(categoria){
		var flag;
		var miAcu = 0;
		var datos = new Array();
		var store = Ext.getStore('Transacciones');

		if(store.getCount()>0){//Entro solo si existen 
			for (k=0;k<store.getCount();k++){
				flag = store.getData().all[k].getData();
				if(flag.clasificacion==categoria){
					datos[k]= flag.monto;
					miAcu = miAcu + datos[k];
				}
			}
		}
		
	return miAcu;
	}
});