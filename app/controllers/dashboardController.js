(function () {

    var injectParams = ['$scope', '$http'];

    var DashboardController = function ($scope, $http) {
        $scope.greeting = "Hola!!!";
        $scope.users = users;

        function init() {
            disChart();
            matChart();
            disMatStarChart();
        }

        function disMatStarChart() {
            var dismatCtx = document.getElementById("dismat").getContext('2d');
            var dismat = new Chart(dismatCtx, {
                type: 'radar',
                data: {
                    labels : ["Jan","Feb","Mar","Apr","May", "Jun"],
                    datasets : [
                    {
                        label: 'DIS',
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)'
                        ],
                        data: [110, 70, 77, 120, 110, 40]
                    },
                    {
                        label: 'MAT',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)'
                        ],
                        data: [90, 80, 120, 80, 100, 110]
                    }
                    ]
                }
               
            });
        }

        function disChart() {
            var disCtx = document.getElementById("dis").getContext('2d');
            var dis = new Chart(disCtx, {
                type: 'line',
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [{
                        label: 'DIS',
                        data: [110, 70, 77, 120, 110, 40],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)'                            
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }

        function matChart() {
            var matCtx = document.getElementById("mat").getContext('2d');
            var mat = new Chart(matCtx, {
                type: 'line',
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [{
                        label: 'MAT',
                        data: [90, 80, 120, 80, 100, 110],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)'                          
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)'                           
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }

        init();
    };

    

    DashboardController.$inject = injectParams;

    angular.module('stockidsApp').controller('DashboardController', DashboardController);

}());