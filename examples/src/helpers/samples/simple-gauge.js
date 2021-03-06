const code =
`<script>
  import FusionCharts from 'fusioncharts';
  import Widgets from 'fusioncharts/fusioncharts.widgets';
  import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
  import SvelteFC, { fcRoot } from 'svelte-fusioncharts';
  import dataSource from './data.js';

  fcRoot(FusionCharts, Widgets, FusionTheme);

  let dataSource,
    chartConfig = {
      type: 'angulargauge',
      width: '600',
      height: '400',
      renderAt: 'chart-container',
      dataSource
    };
</script>`,
html =
`<div id="chart-container" >
  <SvelteFC {...chartConfig} />
</div>`,
data =
`export default {
  "chart": {
    "caption": "Nordstorm's Customer Satisfaction Score for 2017",
    "lowerLimit": "0",
    "upperLimit": "100",
    "showValue": "1",
    "numberSuffix": "%",
    "theme": "fusion",
    "showToolTip": "0"
  },
  "colorRange": {
    "color": [{
      "minValue": "0",
      "maxValue": "50",
      "code": "#F2726F"
    }, {
      "minValue": "50",
      "maxValue": "75",
      "code": "#FFC533"
    }, {
      "minValue": "75",
      "maxValue": "100",
      "code": "#62B58F"
    }]
  },
  "dials": {
    "dial": [{
      "value": "81"
    }]
  }
}`;

export default {
  code,
  html,
  data
};
