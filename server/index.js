var express = require('express');
var path = require('path');
var chalk = require('chalk');
var app = express();

/*
 *
 * Express config
 *
 */
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


/*
 *
 * Controller setup
 *
 */
var homeController = require('./controllers/home');

/*
 *
 * App routes
 *
 */
app.get('/', homeController.index);

/*
 *
 * Start Server
 *
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});