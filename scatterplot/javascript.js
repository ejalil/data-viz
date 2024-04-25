var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                backgroundColor: "#456743",
                borderColor: "#000000",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                backgroundColor: "d6dfde",
                borderColor: "#000000",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                backgroundColor: "#551309",
                borderColor:"#000000",
                borderWidth:2,
                
              },{
                data: [
                    {x: 68.3, y: 5878},
                    ],
                    label: "Indonesia",
                    backgroundColor: "#eea695",
                    borderColor:"#000000",
                    borderWidth:2,
              },{
                data: [
                    {x: 71.9, y: 11461},
                    ],
                    label: "Brazil",
                    backgroundColor: "#b73c2c",
                    borderColor:"#000000",
                    borderWidth:2,
              }
            ]
          },
          options: {
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });