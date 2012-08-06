Ext.define('myMoney.controller.Historial', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			historial: 'historial'
        },
        control: {
            'historial list': {
				itemtap: 'showDetails'
			}
        }
    },
	
	showDetails: function(list, index, element, record){
		
		switch(index){
			case 0: this.getHistorial().push({
						
						xtype: 'panel',
						title: record.get('title'),
						layout: 'fit',
						htmlContent: true,
						
						items: [
							{
								html:[ 
									//Mostrando Grafico
								].join('')
							}
						]
					
				});
			break;
			
			case 1: this.getHistorial().push({
					title: record.get('title'),
				});
			break; 
		}
	}
});

