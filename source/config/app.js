(function(window){
    'use strict';

    var applicationModuleName = 'MyApp';
    var service = {
        // applicationEnvironment: window.env,
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: [
            'ngResource',
            'ngAnimate',
            'ngMessages',
            'ui.router',
            'ngSlimScroll',
            'ui.grid',
            'ui.grid.grouping',
            'ui.grid.pagination',
            'ui.grid.edit',
            'ui.grid.resizeColumns',
            'ui.grid.selection',
            'ui-notification',
            'ncy-angular-breadcrumb',
            'angularScreenfull',
            'ui.rCalendar'
          ],
        registerModule: registerModule
    }
    window.ApplicationConfiguration = service;

    function registerModule(moduleName, dependencies) {
        angular.module(moduleName, dependencies || []).value('localeConf', {
            basePath: '/languages',
            defaultLocale: 'en-US',
            sharedDictionary: 'common',
            fileExtension: '.lang.json',
            persistSelection: true,
            cookieName: 'COOKIE_LOCALE_LANG',
            observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
            delimiter: '::',
            validTokens: new RegExp('^[\\w\\.-]+\\.[\\w\\s\\.-]+\\w(:.*)?$')
          }).value('localeSupported', [
            'en-US',
            'de-DE',
            'es-ES',
            'fr-FR',
            'ja-JP',
            'zh-CN'
          ]).value('localeFallbacks', {
            'en': 'en-US',
            'de': 'de-DE',
            'es': 'es-ES',
            'fr': 'fr-FR',
            'ja': 'ja-JP',
            'zh': 'zh-CN'
          });

          angular.module(ApplicationConfiguration.applicationModuleName).value('Themes', []);

        // Add the module to the AngularJS configuration file
        angular.module(applicationModuleName).requires.push(moduleName);
    }

      // Angular-ui-notification configuration



}(window));

