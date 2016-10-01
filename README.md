# ng-preview

It is an Angular directive to display and manage images.

It has no third-party dependencies. 

## Hot to install
```javascript
    bower install ngy-preview
```

## Quick start

```javascript
    angular.module('<yourModule>', ['ngyPreview'])
        .controller('YourController', function(){
            this.images = [
                'images/image1.jpg',
                'images/image2.jpg'
            ];
        });    
```
```html
<div ng-controller="YourController as vm">
    <ngy-preview data="vm.images"></ngy-preview>
</div>
```
The output will be:

![ng-preview](https://github.com/epiphanyinc/ng-preview/blob/master/example.jpg);

## API

* `data`: This attribute is useful to set an array with all image's path.
* `on-delete`: This attribute is useful to delete an image from image's array. It has to receive a callback and this callback has to return a promise. If that promise returned was resolved, the image will removed from array. But if that promise was rejected, nothing happens.

MIT
