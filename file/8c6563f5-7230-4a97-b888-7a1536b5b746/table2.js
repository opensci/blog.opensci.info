    google.load('visualization', '1', {packages: ['corechart']});
    function drawVisualization() {
      google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'http://www.google.com/fusiontables/gvizdata?tq=',
        "query":"select title,scopus,crossref,pubmed from 1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW order by scopus desc limit 10",
        "chartType": "ColumnChart",
        "options": {
          "width":600,
          "height":400,                    
        }
      });
    }
    google.setOnLoadCallback(drawVisualization);
