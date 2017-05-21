
let app = angular.module('product',[])
    .service('productData',function () {
        return [
            {
                id:1,
                name:'iphone',
                price:5400
            },
            {
                id:2,
                name:'iphone 5s',
                price:5600
            },
            {
                id:3,
                name:'mc ipar',
                price:10400
            },
            {
                id:4,
                name:'iphone 6s',
                price:4400
            },
            {
                id:5,
                name:'iphone 7puls',
                price:8000
            },
        ];
    })

    .controller('productController',($scope,productData) => { // 这里的第二个参数不用写$符号
        $scope.productData = productData;

        // 定义一个字段
        $scope.orderType = 'id';
        $scope.order = '-';

        // 排序的小三角号点击事件
        $scope.changOrder = function (type) {
            $scope.orderType = type;

            if($scope.order === ''){
                $scope.order = '-';
            }else{
                $scope.order = '';
            }

        };

    });

