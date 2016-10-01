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
(function (angular) {
    'use strict';

    angular.module('ngyPreview')
        .directive('ngyPreview', ngyPreview);

    function ngyPreview() {
        return {
            restrict: 'AE',
            scope: {
                dataArray: '=data',
                onDelete: '&?'
            },
            link: link,
            templateUrl: 'ngy-preview.html'
        };

        function link($scope, $element, $attrs) {

            if ($scope.onDelete) {
                $scope.delete = function (index) {
                    $scope.onDelete({ $index: index }).then(function () {
                        $scope.dataArray.splice(index, 1);
                    });
                }
            }

            $scope.getUrl = function (image) {
                return 'url(' + image + ')';
            };
        }
    };

})(window.angular);

//# sourceMappingURL=../dist/ngy-preview.js.map
