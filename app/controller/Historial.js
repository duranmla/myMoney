Ext.define('myMoney.controller.Historial', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			historial: 'historial',
			transHist: 'transHist'
        },
        control: {
            'historial list': {
				itemtap: 'showDetails'
			}
        }
    },
	
	animacionIzq: {type: 'slide', direction: 'left'},
	
	showDetails: function(list, index, element, record){
		
		switch(index){
			case 0: 
				Ext.Viewport.animateActiveItem(this.getTransHist(), this.animacionIzq);
			break;
			
			case 1: this.getHistorial().push({
					title: record.get('title'),
				});
			break; 
		}
	}
});

