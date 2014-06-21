    google.load('visualization', '1', {packages: ['corechart']});
    function drawVisualization() {
      google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'http://www.google.com/fusiontables/gvizdata?tq=',


"query":"select sum(scopus),sum(crossref) from 1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s where publication_date >= '2012-01-01 00:00:00' and publication_date < '2013-01-01 00:00:00' GROUP BY publication_date",


//"query":"select scopus,crossref from 1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s where publication_date >= '2012-01-01 00:00:00' and publication_date < '2012-04-01 00:00:00'",


//        "query":"select publication_date,count() from 1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s GROUP BY publication_date ORDER BY publication_date desc",
//        "query":"select publication_date,count() from 1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s GROUP BY publication_date ORDER BY count() desc",
//        "query":"select publication_date,sum(scopus),sum(pmc),sum(crossref),sum(counter_html),sum(twitter),count() from 1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s GROUP BY publication_date ORDER BY publication_date desc LIMIT 1000",

//        "query":"select publication_date,sum(scopus),sum(pmc),sum(crossref) from 1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s GROUP BY publication_date ORDER BY publication_date desc LIMIT 1000",

//        "query":"select publication_date,sum(twitter) from 1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s GROUP BY publication_date ORDER BY sum(twitter) desc LIMIT 2000",
//        "query":"select publication_date,sum(scopus),sum(pmc),sum(crossref) from 1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s GROUP BY publication_date ORDER BY sum(scopus) desc LIMIT 1000",
//        "query":"select publication_date,sum(scopus),sum(pmc),sum(crossref) from 1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s GROUP BY publication_date ORDER BY publication_date desc LIMIT 1000",


        "chartType": "ScatterChart",
        "options": {
          "title": "Something",
          "vAxis": {"title": "Foo","logScale":"true" },
          "hAxis": {"title": "Bar","logScale":"true"},
          "height": 1200,
          "chartArea.width":"500",
          "chartArea.height":"500",

        }
      });
    }
    google.setOnLoadCallback(drawVisualization);


