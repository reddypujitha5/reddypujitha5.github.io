(function($) {
    "use strict";
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            Sale: 100
        }, {
            y: '2007',
            Sale: 7
        }, {
            y: '2008',
            Sale: 85
        }, {
            y: '2009',
            Sale: 70
        }, {
            y: '2010',
            Sale: -59
        }, {
            y: '2011',
            Sale: 5
        }, {
            y: '2012',
            Sale: -75
        }, {
            y: '2013',
            Sale: -25
        }, {
            y: '2014',
            Sale: 15
        }, {
            y: '2015',
            Sale: 95
        }, {
            y: '2016',
            Sale: 100
        }, {
            y: '2006',
            Sale: 200
        }, {
            y: '2007',
            Sale: 7
        }, {
            y: '2008',
            Sale: 85
        }, {
            y: '2009',
            Sale: 70
        }, {
            y: '2010',
            Sale: -59
        }, {
            y: '2011',
            Sale: 5
        }, {
            y: '2012',
            Sale: -75
        }, {
            y: '2013',
            Sale: -125
        }, {
            y: '2014',
            Sale: 15
        }, {
            y: '2015',
            Sale: 95
        }, {
            y: '2016',
            Sale: 100
        }],
        xkey: 'y',
        ykeys: ['Sale'],
        labels: ['CSE'],
        barColors: ['#006DF0'],
        hideHover: 'auto',
        barSizeRatio: 0.45,
        gridLineColor: '#eef0f2',
        resize: true
    });



})(jQuery);