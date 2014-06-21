    google.load('visualization', '1', {packages: ['corechart']});
    function drawVisualization() {
      google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'http://www.google.com/fusiontables/gvizdata?tq=',
        "query":"select title,scopus from 1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s where publication_date >= '2010-01-01 00:00:00' and publication_date < '2011-01-01 00:00:00' order by scopus desc limit 10",
        "chartType": "BarChart",
        "options": {
          "width": "500",
          "height": "400",
          "title":"Top 10 Most Scopus Citations in 2010",
                    
        }
      });
    }
    google.setOnLoadCallback(drawVisualization);
