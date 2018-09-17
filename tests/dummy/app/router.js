import Router from 'ember-router';
import config from './config/environment';

const AppRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

AppRouter.map(function() {
});

export default AppRouter;
