import { assign as merge } from 'ember-platform';
import run from 'ember-runloop';
import Application from '../../app';
import config from '../../config/environment';

export default function startApp(attrs) {
  let attributes = merge({}, config.APP);
  // Use defaults, but you can override;
  attributes = merge(attributes, attrs);

  return run(() => {
    let application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();

    return application;
  });
}
