var body = 'Dear Nomad Education,\n\nThe status for the following app has changed to Waiting For Review.\n\n\nApp Name: Mon Ecole de Commerce, business school, formation commerce, alternance commerce\nApp Version Number: 4.4.3\nApp SKU: MEDCommerce_IPHONE_1.0\nApp Apple ID:537634967\n\n\n   To make changes to this app, go to My Apps on iTunes Connect.\n\n\nIf you have any questions regarding your app, contact us.\n\nRegards,\nThe iTunes Store team';

var re_status = /changed to (.*)./; 
var re_name = /App Name: (.*)/;
 
 var name = re_status.exec(body);
 var status = re_name.exec(body);

output = [{appName: name, appStatus: status}];
