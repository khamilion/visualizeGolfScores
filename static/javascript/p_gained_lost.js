
player_names = []
p_gained =[]
p_lost =[]

function chart1(golfers){


for( i = 0; i < 20; i++)
{

    player_names.push(golfers[i].name)
    p_gained.push(golfers[i].points_gained)
    p_lost.push(Math.abs(golfers[i].points_lost))
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
  labels: player_names,
  datasets: [{
    label: 'Points Gained',
    data:  p_gained,
    fill: true,
      backgroundColor: 'rgb(0, 164, 71, 0.1)',
    borderColor: 'rgb(0, 164, 71)',
    pointBackgroundColor: 'rgb(0, 164, 71)',
    pointBorderColor: '#fff',
      hoverBorderWidth: 10,
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(0, 164, 71)',
      order: 1,
      pointHoverBorderWidth: 10
  }, {
    label: 'Points Lost',
    data: p_lost,
    fill: true,
    backgroundColor: 'rgb(255, 0, 0,0.1)',
    borderColor: 'rgb(255, 0, 0)',
    pointBackgroundColor: 'rgb(255, 0, 0)',
    pointBorderColor: '#fff',
      hoverBorderWidth: 10,
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 0, 0)',
      order: 2,
      pointHoverBorderWidth: 10
  }]
},
    options: {
            scales: {

        }

    }
});


}


player_names2 = []
p_gained2 =[]
p_lost2 =[]
function chart2(golfers){


for(i = 20; i < 40; i++)
{
    player_names2.push(golfers[i].name)
    p_gained2.push(golfers[i].points_gained)
    p_lost2.push(Math.abs(golfers[i].points_lost))
}

const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
  labels: player_names2,
  datasets: [{
    label: 'Points Gained',
    data: p_gained2,
    fill: true,
      backgroundColor: 'rgba(0, 164, 71, 0.1)',
    borderColor: 'rgb(0, 164, 71)',
    pointBackgroundColor: 'rgb(0, 164, 71)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(0, 164, 71)',
      order: 1,
      pointHoverBorderWidth: 10,
  }, {
    label: 'Points Lost',
    data: p_lost2,
    fill: true,
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderColor: 'rgb(255, 0, 0)',
    pointBackgroundColor: 'rgb(255, 0, 0)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 0, 0)',
      order: 2,
      pointHoverBorderWidth: 10,
  }]
},
    options: {
        scales: {

        }

    }
});


}

player_names3 = []
p_gained3 =[]
p_lost3 =[]
function chart3(golfers){


for(i = 40; i < 60; i++)
{
    player_names3.push(golfers[i].name)
    p_gained3.push(golfers[i].points_gained)
    p_lost3.push(Math.abs(golfers[i].points_lost))
}

const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
  labels: player_names3,
  datasets: [{
    label: 'Points Gained',
    data: p_gained3,
    fill: true,
      backgroundColor: 'rgba(0, 164, 71, 0.1)',
    borderColor: 'rgb(0, 164, 71)',
    pointBackgroundColor: 'rgb(0, 164, 71)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(0, 164, 71)',
      order: 1,
      pointHoverBorderWidth: 10,
  }, {
    label: 'Points Lost',
    data: p_lost3,
    fill: true,
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderColor: 'rgb(255, 0, 0)',
    pointBackgroundColor: 'rgb(255, 0, 0)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 0, 0)',
      order: 2,
      pointHoverBorderWidth: 10,
  }]
},
    options: {
        scales: {

        }

    }
});


}

player_names4 = []
p_gained4 =[]
p_lost4 =[]
function chart4(golfers){
for(i = 60; i < 80; i++)
{
    player_names4.push(golfers[i].name)
    p_gained4.push(golfers[i].points_gained)
    p_lost4.push(Math.abs(golfers[i].points_lost))
}

const ctx4 = document.getElementById('myChart4').getContext('2d');
const myChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
  labels: player_names4,
  datasets: [{
    label: 'Points Gained',
    data: p_gained4,
    fill: true,
      backgroundColor: 'rgba(0, 164, 71, 0.1)',
    borderColor: 'rgb(0, 164, 71)',
    pointBackgroundColor: 'rgb(0, 164, 71)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(0, 164, 71)',
      order: 1,
      pointHoverBorderWidth: 10,
  }, {
    label: 'Points Lost',
    data: p_lost4,
    fill: true,
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderColor: 'rgb(255, 0, 0)',
    pointBackgroundColor: 'rgb(255, 0, 0)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 0, 0)',
      order: 2,
      pointHoverBorderWidth: 10,
  }]
},
    options: {
        scales: {

        }

    }
});


}

player_names5 = []
p_gained5 =[]
p_lost5 =[]
function chart5(golfers){
for(i = 80; i < 100; i++)
{
    player_names5.push(golfers[i].name)
    p_gained5.push(golfers[i].points_gained)
    p_lost5.push(Math.abs(golfers[i].points_lost))
}

const ctx5 = document.getElementById('myChart5').getContext('2d');
const myChart5 = new Chart(ctx5, {
    type: 'line',
    data: {
  labels: player_names5,
  datasets: [{
    label: 'Points Gained',
    data: p_gained5,
    fill: true,
      backgroundColor: 'rgba(0, 164, 71, 0.1)',
    borderColor: 'rgb(0, 164, 71)',
    pointBackgroundColor: 'rgb(0, 164, 71)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(0, 164, 71)',
      order: 1,
      pointHoverBorderWidth: 10,
  }, {
    label: 'Points Lost',
    data: p_lost5,
    fill: true,
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderColor: 'rgb(255, 0, 0)',
    pointBackgroundColor: 'rgb(255, 0, 0)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 0, 0)',
      order: 2,
      pointHoverBorderWidth: 10,
  }]
},
    options: {
        scales: {

        }

    }
});


}
