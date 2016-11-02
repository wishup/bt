var webserviceURL = 'https://booktable.am/webservice/';
var currentLang = 'am';

function alertProblem(){
	
	navigator.notification.alert(
		'There was a problem with the connection to server.',
		function(){  },
		'Please, try again!',
		'Ok'
	);
	
}