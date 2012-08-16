Ext.define('myMoney.view.Inicio', {
	extend: 'Ext.form.Panel',
	xtype: 'inicio',
	fullscreen: true,
	scrollable: true,
	
	requires: ['Ext.form.FieldSet','Ext.field.Password'],
	
	config: {
		title: 'Inicio',
		iconCls: 'home',
		
		items: [
			{
				xtype: 'toolbar',
				title: 'Inicio de Sesion',
				docked: 'top'
			},
			{
				xtype: 'fieldset',
				title: 'Inicio de Sesion',
				docked: 'top',
				id: 'loginForm',
				instructions: '(Por favor coloca tu usuario y clave)',
				styleHtmlContent: true,
				
				items: [
					{
						xtype: 'textfield',
						name: 'us',
						label: 'Usuario',
						placeHolder: 'Usuario'
					},
					{
						xtype: 'passwordfield',
						name: 'pw',
						label: 'Clave',
						placeHolder: 'Clave de Usuario'
					}
				]
			},
			{
				xtype: 'button',
				width: '50%',
				centered: true,
				docked: 'bottom',
				text: 'Aceptar',
				ui: 'confirm',
				id: 'logButton'
				
			},
		]
		
	},
	
	showLoginText: function() {

        var redirectUrl = Ext.Object.toQueryString({
            redirect_uri: window.location.protocol + "//" + window.location.host + window.location.pathname,
            client_id: JWF.app.facebookAppId,
            response_type: 'token'
        });

        this.setHtml([
            '<h2>Welcome to Jog with Friends</h2>',
            '<p>With this app you can log your runs and share your progress with your friends</p>',
            '<p>In order to use Jog with Friends you must sign in with your Facebook account.</p>',
            '<a class="fbLogin" href="https://m.facebook.com/dialog/oauth?' + redirectUrl + '"></a>',
            '<div class="fb-facepile" data-app-id="' + JWF.app.facebookAppId + '" data-max-rows="2" data-width="300"></div>'
        ].join(''));

         FB.XFBML.parse(document.getElementById('splash'));
    }

});