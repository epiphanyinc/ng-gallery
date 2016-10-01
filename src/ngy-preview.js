(function (angular) {
    'use strict';

    angular.module('ngyPreview', [])
        .run(['$templateCache', run])

    function run($templateCache) {
        $templateCache.put('ngy-preview.html',[
            '<div class=\"pw-layout-row pw-wrap pw-margin\">',
            '   <div class=\"pw-square\" ng-repeat=\"data in dataArray track by $index\">',
            '       <div class=\"pw-background-image\" ng-style=\"{ \'background-image\' : getUrl(data) }\">',
            '           <div class=\"pw-remove\" ng-click=\"delete($index)\" >',
            '               <i class=\"pw-remove-icon\"><\/i>',
            '           <\/div>',
            '       <\/div>',
            '   <\/div>',
            '<\/div>'
        ].join(''));
    }

})(window.angular)