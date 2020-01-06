import React from 'react';
var Chart = require('chart.js');

export class TestingChart extends React.Component {
  constructor(props) {
    super(props);
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  componentDidMount() {
    const node = this.node;
    const totalDonations = this.props.memberList.reduce(
      (acc, memberList) => acc + memberList.donations,
      0,
    );
    var myChart = new Chart(node, {
      type: 'bar',
      data: {
        labels: this.props.memberList.map(member => member.name),
        datasets: [
          {
            label: 'Total donations this season : ➡' + ' ' + totalDonations,
            data: this.props.memberList.map(member => member.donations),
            backgroundColor: this.props.memberList.map(() =>
              this.getRandomColor(),
            ),
          },
        ],
      },
    });
  }

  render() {
    return (
      <div>
        <canvas
          style={{ width: 800, height: 300 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}

export default TestingChart;
