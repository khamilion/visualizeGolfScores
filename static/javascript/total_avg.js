let player_names = []
let total =[]
let average =[]



function start(golfers){

    for(i = 0; i < 20; i++)
    {
        player_names.push(golfers[i].name)
        total.push(golfers[i].total_points)
        average.push(golfers[i].average_points)
    }
    createChart(player_names, total, average, "mixedCh")

    {
        let player_names = []
        let total = []
        let average = []
        for (i = 20; i < 40; i++) {
            player_names.push(golfers[i].name)
            total.push(golfers[i].total_points)
            average.push(golfers[i].average_points)
        }
        createChart(player_names, total, average, "mixedCh2")
    }

    {
        let player_names = []
        let total = []
        let average = []
        for (i = 40; i < 60; i++) {
            player_names.push(golfers[i].name)
            total.push(golfers[i].total_points)
            average.push(golfers[i].average_points)
        }
        createChart(player_names, total, average, "mixedCh3")
    }

    {
        let player_names = []
        let total = []
        let average = []
        for (i = 60; i < 80; i++) {
            player_names.push(golfers[i].name)
            total.push(golfers[i].total_points)
            average.push(golfers[i].average_points)
        }
        createChart(player_names, total, average, "mixedCh4")
    }

    {
        let player_names = []
        let total = []
        let average = []
        for (i = 80; i < 100; i++) {
            player_names.push(golfers[i].name)
            total.push(golfers[i].total_points)
            average.push(golfers[i].average_points)
        }
        createChart(player_names, total, average, "mixedCh5")
    }


}


function createChart(player_names, total, average, id) {
    const m1 = document.getElementById(id).getContext('2d');


    const mixedChart1 = new Chart(m1, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Bar: Average Points',
                data: average,
                order: 2,
                backgroundColor: [
                    'rgb(255, 0, 0)',
                    'rgb(0, 0, 255)',
                    'rgb(60, 179, 113)',
                    'rgb(255, 165, 0)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(238, 130, 238)'
                ]
            }, {
                label: 'Line: Total Points',
                data: total,
                type: 'line',
                order: 1,
                backgroundColor: [
                    'rgb(255, 0, 0)',
                    'rgb(0, 0, 255)',
                    'rgb(60, 179, 113)',
                    'rgb(255, 165, 0)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(238, 130, 238)'
                ],
                hoverBorderWidth: 20,
                pointBorderWidth: 5,
                pointRadius: 5
            }],
            labels: player_names
        },
         options: {
        plugins: {
            legend: {
                display: true,
                labels: {
                    boxWidth: 0
                }
            }
        }
    }
    });
}
