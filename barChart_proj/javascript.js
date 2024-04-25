var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['White', 'American Indian', 'Hawaiian', 'Asian', 'Black', 'Hispanic', 'Other'],
        datasets: [{
            label: '# of shootings',
            data: [72, 60, 9, 1, 2, 1, 3],
            backgroundColor: [
                '#880808'
            ]
        },
        // {
        //     label: '# of Oranges',
        //     data: [22, 10, 23, 6, 22, 13],
        //     backgroundColor: [
        //         '#FFA500'
        //     ],
        // }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Race of School Shooters',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'For all but one year, oranges outnumbered apples'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});