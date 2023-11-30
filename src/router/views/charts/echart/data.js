



const pieChart = {
    visualMap: {
        show: false,
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Laptop', 'Tablet', 'Mobile', 'Others', 'Desktop'],
        textStyle: {
            color: '#999'
        }
    },
    color: ['#f46a6a', '#34c38f', '#50a5f1', '#f1b44c', '#556ee6'],
    series: [
        {
            name: 'Total sales',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: 'Laptop' },
                { value: 310, name: 'Tablet' },
                { value: 234, name: 'Mobile' },
                { value: 135, name: 'Others' },
                { value: 1548, name: 'Desktop' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


export {  pieChart };
