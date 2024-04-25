var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007','2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017','2018','2019','2020','2021', '2022', '2023'],
        datasets: [{
            label: 'Shootings',
            data: [7,12,13,5,12,9,13,15,10,9,9,9,7,11,13,16,7,13,15,30,27,9,42,46,28],
            fill: false,
            borderColor: '#FF0000',
            backgroundColor: '#ffb3b2',
            tension: 0.1},
    
        ]
    },
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
          },
        plugins: {
            title: {
                display: true,
                text: '2022 showed an increase in school shootings in the United States',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'School shootings reached a relative low during the pandemic but spiked again in 2022.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});