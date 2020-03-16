import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.afterChartCreated = this.afterChartCreated.bind(this);
    this.options = {
      title: {text: ''},
      colors: ["#5452F6", "#00A3FF", "#B4D9FF", "#3876F3"],
      series: [{
        name: '',
        colorByPoint: true,
        data: []
      }],
      plotOptions: {
        pie: {
          size: '50%',
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'center',
        floating: true
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
    };
  }

  afterChartCreated(chart) {
    this.internalChart = chart;
  }

  componentDidMount() {
    this.internalChart.addSeries({ data: this.props.data })
  }

  render() {
    return this.props.data.length ? (
      <HighchartsReact
        highcharts={Highcharts}
        options={this.options}
        callback={ this.afterChartCreated }
      />
    ) :  null;
  }
}

PieChart.defaultProps = {
  data: []
};

export default PieChart;