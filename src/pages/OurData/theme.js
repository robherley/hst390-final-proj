const defaultTextColor = '#FFF';
const defaultFontSize = 11;

export default {
  background: 'transparent',
  axis: {
    domain: {
      line: {
        stroke: 'transparent',
        strokeWidth: 1
      }
    },
    ticks: {
      line: {
        stroke: '#777',
        strokeWidth: 1
      },
      text: {
        fill: defaultTextColor,
        fontSize: defaultFontSize
      }
    },
    legend: {
      text: {
        fill: defaultTextColor,
        fontSize: defaultFontSize
      }
    }
  },
  grid: {
    line: {
      stroke: '#ddd',
      strokeWidth: 1
    }
  },
  legends: {
    text: {
      fill: defaultTextColor,
      fontSize: defaultFontSize
    }
  },
  labels: {
    text: {
      fill: defaultTextColor,
      fontSize: defaultFontSize
    }
  },
  markers: {
    lineColor: '#000',
    lineStrokeWidth: 1,
    textColor: defaultTextColor,
    fontSize: defaultFontSize
  },
  dots: {
    text: {
      fill: defaultTextColor,
      fontSize: defaultFontSize
    }
  },
  tooltip: {
    container: {
      background: 'white',
      color: 'inherit',
      fontSize: 'inherit',
      borderRadius: '2px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
      padding: '5px 9px'
    },
    basic: {
      whiteSpace: 'pre',
      display: 'flex',
      alignItems: 'center'
    },
    table: {},
    tableCell: {
      padding: '3px 5px'
    }
  }
};
