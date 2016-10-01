# ng-preview

It is an Angular directive to display and manage images.

It has no third-party dependencies 

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

![myimage-alt-tag](url-to-image);