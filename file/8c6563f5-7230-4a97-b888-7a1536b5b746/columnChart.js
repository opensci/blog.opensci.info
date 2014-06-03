    google.load('visualization', '1', {packages: ['corechart']});
    function drawVisualization() {
      google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'http://www.google.com/fusiontables/gvizdata?tq=',
        "query":"select title,crossref,scopus,pubmed from 1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW where publication_date >= '2013-01-01 00:00:00' and publication_date < '2014-01-01 00:00:00' order by crossref desc limit 10",
        "chartType": "ColumnChart",
        "options": {
          "title": "Top 10 Crossref Cited PLoS Articles from 2013",
          "vAxis": {"title": "Citations"},
          "height": 800,
        }
      });
    }
    google.setOnLoadCallback(drawVisualization);
