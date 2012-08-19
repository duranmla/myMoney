Ext.define('myMoney.controller.Historial', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			historial: 'historial',
			historialGrafico: 'historialGrafico',
			histList: 'histList',
			transaccion: 'transaccion',
			
			mainView: 'mainView',
        },
        control: {
            'historial list': {
				itemtap: 'showDetails'
			},
			
			historialGrafico: {
				needBack: 'needBack'
			},
			
			histList: {
				needBack: 'needBack',
				editaTransaccionCommand: 'editaTransaccion'
			}
        }
    },
	
	animacionIzq: {type: 'slide', direction: 'left'},
	animacionDer: {type: 'slide', direction: 'right'},
	
	editaTransaccion: function(list, record){
		this.muestraVista(record);
	},
	
	muestraVista: function(record){
		var transaccionEditor = this.getTransaccion();
		transaccionEditor.setRecord(record);
		Ext.Viewport.animateActiveItem(transaccionEditor, this.animacionIzq);
	},
		
	needBack: function(){
		Ext.Viewport.animateActiveItem(this.getMainView(), this.animacionDer);
	},
	
	showDetails: function(list, index, element, record){
		
		switch(index){
			case 0: 
				Ext.Viewport.animateActiveItem(this.getHistorialGrafico(), this.animacionIzq);
			break;
			
			case 1: 
				Ext.Viewport.animateActiveItem(this.getHistList(), this.animacionIzq);
			break; 
		}
	}
});

