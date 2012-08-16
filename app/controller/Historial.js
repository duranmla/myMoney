Ext.define('myMoney.controller.Historial', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			historial: 'historial',
			historialGrafico: 'historialGrafico',
			histList: 'histList',
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
				needBack: 'needBack'
			}
        }
    },
	
	animacionIzq: {type: 'slide', direction: 'left'},
	animacionDer: {type: 'slide', direction: 'right'},
	
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

