var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Accidental',
              'Indiscriminate',
              'Police Suicide',
              'Targeted',
              'Unclear'
            ],
            datasets: [{
              label: 'School Shooting Type',
              data: [51, 63, 9, 223, 30],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(154, 162, 235)'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Top 5 School Shooting types'
              },
              subtitle: {
                display: true,
                text: 'For all but one year, oranges outnumbered apples'
            }
            }
          }
        });