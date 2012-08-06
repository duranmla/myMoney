Ext.define('myMoney.controller.Inicio', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            loginForm: '#loginForm',
			logButton: '#logButton',
        },
        control: {
            logButton: {
				tap: "autenthic"
			}
        }
    },
	
	autenthic: function(){
		console.log("Wazzup!?");
	}
});