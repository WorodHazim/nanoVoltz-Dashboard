// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [10, 8, 6, 4, 2],
      name: 'Products',
    },
  ],
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
    title: {
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },

  yaxis: {
    title: {
      text: 'Count',
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART1

var options = {
  chart: {
    height: 200,
    type: "area",  
    background: 'transparent',
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2,45, 52, 38, 45, 19]
    }
  ],
  
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    }
  },
  colors: ['#f4a6ae', '#d50000'],

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
  },
  yaxis: {
    labels: {
      show: false,}
  }
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);

chart.render();
// AREA CHART2

var options = {
  chart: {
    height: 200,
    type: "area",  
    background: 'transparent',
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2,45, 52, 38, 45, 19]
    }
  ],
  
  fill: {
    type: "Pattern",
 
  },
  colors: ['#f4a6ae', '#d50000'],

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],

  },
  yaxis: {
    labels: {
      show: false,}
  }
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);

chart.render();
// AREA CHART3
var options3 = {
  chart: {
    height: 90,
    type: "area",
    background: 'transparent',
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "Series 1",
      data: [22, 22, 23, 24, 22, 23,24]
    }
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.5,
      stops: [0, 90, 100]
    }
  },
  colors: ['#33a233'],
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan"
    ],
    labels: {
      show: false,}

  }
  ,
  yaxis: {

    labels: {
      show: false,}

  }
};

var chart = new ApexCharts(document.querySelector("#chart3"), options3);

chart.render();
// AREA CHART4
var options4 = {
  chart: {
    height: 90,
    type: "area",
    background: 'transparent',
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "Series 1",
      data: [22, 22, 23, 24, 22, 23,24]
    }
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.5,
      stops: [0, 90, 100]
    }
  },
  colors: ['#ff0000'],
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan"
    ],
    labels: {
      show: false,}

  }
  ,
  yaxis: {

    labels: {
      show: false,}

  }
};

var chart = new ApexCharts(document.querySelector("#chart4"), options4);

chart.render();
// AREA CHART5
var options5 = {
  chart: {
    height: 90,
    type: "area",
    background: 'transparent',
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "Series 1",
      data: [22, 22, 23, 24, 22, 23,24]
    }
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.5,
      stops: [0, 90, 100]
    }
  },
  colors: ['#ccc'],
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan"
    ],
    labels: {
      show: false,}

  }
  ,
  yaxis: {

    labels: {
      show: false,}

  }
};

var chart = new ApexCharts(document.querySelector("#chart5"), options5);

chart.render();
