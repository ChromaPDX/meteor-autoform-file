Package.describe({
  name: "chroma:autoform-file",
  summary: "File upload for AutoForm",
  description: "File upload for AutoForm",
  version: "0.2.8",
  git: "http://github.com/yogiben/autoform-file.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.use([
    'coffeescript',
    'underscore',
    'reactive-var',
    'templating',
    'mquandalle:jade',
    'less@2.0.0',
    'aldeed:autoform@5.7.1',
    'fortawesome:fontawesome@4.3.0'
  ]);

  api.addFiles('lib/client/autoform-file.jade', 'client');
  api.addFiles('lib/client/autoform-file.less', 'client');
  api.addFiles('lib/client/autoform-file.coffee', 'client');
  api.addFiles('lib/server/publish.coffee', 'server');
});
