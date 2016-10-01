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
