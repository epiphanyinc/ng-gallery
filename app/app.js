(function (angular) {
    'use strict';

    angular.module('app', ['ngyPreview'])
        .controller('appCtrl', function ($q) {
            this.images = [
                'app/images/a.jpg',
                'app/images/b.jpg',
                'app/images/b.jpg',
                'app/images/a.jpg',
                'app/images/b.jpg'
            ];

            this.onDelete = function(index){
                var answer = confirm('Are you sure to delete this image?');

                if(answer){
                    this.images.splice(index, 0);
                    return $q.when();
                }

                $q.reject();
            };
        });
})(window.angular)