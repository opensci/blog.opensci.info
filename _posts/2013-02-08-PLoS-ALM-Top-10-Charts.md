--- 
layout: post
title: PLoS ALM Top 10 Charts
uuid: 8c6563f5-7230-4a97-b888-7a1536b5b746
published: true
---


PLoS ALM Data
---
Full copies of the PLoS ALM data is available periodically on [their website][plosalmdata]. The file we want is the "Monthly zip file of the summary spreadsheet for the entire ALM data set (all articles)". This ZIP file contains a single CSV text file of all the data. The latest version available is [alm_report_2013-01-08.csv.zip][]. 

[plosalmdata]: http://article-level-metrics.plos.org/plos-alm-data/
[alm_report_2013-01-08.csv.zip]: http://article-level-metrics.plos.org/files/2012/10/alm_report_2013-01-08.csv.zip



Google Fusion Tables
---
The CSV file can be uploaded directly to [Google Fusion Tables][]. Once the data is uploaded, it can be [browsed online][mytable].




<a href="https://www.google.com/fusiontables/data?docid=1RvztK1sSqPC4FAfwTeLUeMhQJMjADCsTllEyF-8"><img src ="/file/2013-02-08-PLoS-ALM-Top-10-Charts/mytable.png" class="mainimage bigimage"/></a>


[Google Fusion Tables]: http://www.google.com/drive/start/apps.html#fusiontables
[mytable]: https://www.google.com/fusiontables/data?docid=1RvztK1sSqPC4FAfwTeLUeMhQJMjADCsTllEyF-8


test3.html


https://developers.google.com/chart/interactive/docs/fusiontables


example:
{% highlight javascript linenos hl_lines=4 %}
google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'http://www.google.com/fusiontables/gvizdata?tq=',
        "query":"SELECT Year, Austria, Bulgaria, Denmark, Greece FROM 641716",
        "refreshInterval": 5,
        "chartType": "BarChart",
        "options": {
          "title":"Yearly Coffee Consumption by Country",
          "vAxis": {"title": "Year"},
          "hAxis": {"title": "Cups"}
        }
      });
{% endhighlight %}



{% highlight javascript linenos linenostart=4 hl_lines=1 %}
        "query":"select col0,col1,col2,col10 from 1W7-apvjDSgsT5jRy4lAcxYJgsGVIcFhudiFN0J0 where col0 contains ignoring case 'pmed' and col1 >= 'Jan 1, 2010' and col1 <= 'Dec 31, 2010' order by col10 desc limit 10",
{% endhighlight %}



[test3.html][]



[test3.html]: /file/2013-02-08-PLoS-ALM-Top-10-Charts/test3.html



test4.html --- start here
https://developers.google.com/fusiontables/docs/samples/gviz_datatable

{% highlight javascript linenos %}
  function drawTable() {
        var query = "SELECT 'Scoring Team' as Scoring, " +
            "'Receiving Team' as Receiving, 'Minute of goal' as Minute " +
            'FROM 1VlPiBCkYt_Vio-JT3UwM-U__APurJvPb6ZEJPg';
        var team = document.getElementById('team').value;
        if (team) {
          query += " WHERE 'Scoring Team' = '" + team + "'";
        }
        var queryText = encodeURIComponent(query);
        var gvizQuery = new google.visualization.Query(
            'http://www.google.com/fusiontables/gvizdata?tq=' + queryText);

        gvizQuery.send(function(response) {
          var table = new google.visualization.Table(
              document.getElementById('visualization'));
          table.draw(response.getDataTable(), {
            showRowNumber: true
          });
        });
      }
{% endhighlight %}





top 10 articles
citation (scopus)
-year
-journal


https://www.google.com/fusiontables/exporttable?query=select+*+from+1W7-apvjDSgsT5jRy4lAcxYJgsGVIcFhudiFN0J0+where+col0+like+%27pmed%27+order+by+Scopus+desc







plos alm api

citation rank for some article X

--get total citations
use api to get total citations


--get rank
check with google fusion to get rank

--show rank

-- citations per day (velocity)
calculate







http://article-level-metrics.plos.org/plos-alm-data/


http://article-level-metrics.plos.org/files/2012/10/jan-8-2013.zip



http://www.plosone.org/article/metrics/info%3Adoi%2F10.1371%2Fjournal.pone.0000443

http://alm.plos.org/articles/info%3Adoi%2F10.1371%2Fjournal.pone.0000443.xml?citations=1
http://alm.plos.org/articles/info%3Adoi%2F10.1371%2Fjournal.pone.0000443.json?citations=1

http://alm.plos.org/articles/info:doi%2F10.1371%2Fjournal.pbio.0000012.xml?source=CrossRef&api_key=plos_api_test
http://alm.plos.org/articles/info:doi%2F10.1371%2Fjournal.pbio.0000012.json?source=CrossRef&api_key=plos_api_test

http://alm.plos.org/articles/10.1371/journal.pbio.0000012.xml?history=1&api_key=plos_api_test
http://alm.plos.org/articles/10.1371/journal.pbio.0000012.json?history=1&api_key=plos_api_test

http://alm.plos.org/articles/10.1371/journal.pbio.0000012.json?history=0


http://alm.plos.org/articles/10.1371/journal.pone.0000443.json?history=0

http://alm.plos.org/articles/info:doi/10.1371/journal.pone.0000443.json?history=0
http://alm.plos.org/articles/info%3Adoi%2F10.1371%2Fjournal.pone.0000443.json?history=0






http://www.plosone.org/article/metrics/info%3Adoi%2F10.1371%2Fjournal.pone.0000443




https://www.google.com/fusiontables/exporttable?query=select+*+from+1W7-apvjDSgsT5jRy4lAcxYJgsGVIcFhudiFN0J0+where+col0+contains+ignoring+case+%27pmed%27+order+by+col10+desc




col0 = doi
col1 = published
col10 = Scopus


top 10 pmed articles by scopus citations
https://www.google.com/fusiontables/exporttable?query=select+*+from+1W7-apvjDSgsT5jRy4lAcxYJgsGVIcFhudiFN0J0+where+col0+like+%27%25pmed%25%27+order+by+col10+desc+limit+10

top 10 pmed articles in 2010 by scopus citations
https://www.google.com/fusiontables/exporttable?query=select+*+from+1W7-apvjDSgsT5jRy4lAcxYJgsGVIcFhudiFN0J0+where+col0+like+%27%25pmed%25%27+and+where+col0+like+%27%25pmed%25%27+and Published >= 'Jan 1, 2010' and Published <= 'Dec 31, 2010'+order+by+%27Scopus%27+desc+limit+10


https://www.google.com/fusiontables/exporttable?query=select+*+from+1W7-apvjDSgsT5jRy4lAcxYJgsGVIcFhudiFN0J0+where+col0+contains+ignoring+case+%27pmed%27+and+col1+%3E%3D+%27Jan+1%2C+2010%27+and+col1+%3C%3D+%27Dec+31%2C+2010%27+order+by+col10+desc+limit+10


select * from csv where url="https://www.google.com/fusiontables/exporttable?query=select+*+from+1W7-apvjDSgsT5jRy4lAcxYJgsGVIcFhudiFN0J0+where+col0+contains+ignoring+case+%27pmed%27+and+col1+%3E%3D+%27Jan+1%2C+2010%27+and+col1+%3C%3D+%27Dec+31%2C+2010%27+order+by+col10+desc+limit+10"

select * from csv where url="https://www.google.com/fusiontables/exporttable?query=select+col0,col1,col2,col10+from+1W7-apvjDSgsT5jRy4lAcxYJgsGVIcFhudiFN0J0+where+col0+contains+ignoring+case+%27pmed%27+and+col1+%3E%3D+%27Jan+1%2C+2010%27+and+col1+%3C%3D+%27Dec+31%2C+2010%27+order+by+col10+desc+limit+10"


http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'https%3A%2F%2Fwww.google.com%2Ffusiontables%2Fexporttable%3Fquery%3Dselect%2B*%2Bfrom%2B1W7-apvjDSgsT5jRy4lAcxYJgsGVIcFhudiFN0J0%2Bwhere%2Bcol0%2Bcontains%2Bignoring%2Bcase%2B%2527pmed%2527%2Band%2Bcol1%2B%253E%253D%2B%2527Jan%2B1%252C%2B2010%2527%2Band%2Bcol1%2B%253C%253D%2B%2527Dec%2B31%252C%2B2010%2527%2Border%2Bby%2Bcol10%2Bdesc%2Blimit%2B10'&format=json&diagnostics=true&callback=?

http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D%22https%3A%2F%2Fwww.google.com%2Ffusiontables%2Fexporttable%3Fquery%3Dselect%2Bcol0%2Ccol1%2Ccol2%2Ccol10%2Bfrom%2B1W7-apvjDSgsT5jRy4lAcxYJgsGVIcFhudiFN0J0%2Bwhere%2Bcol0%2Bcontains%2Bignoring%2Bcase%2B%2527pmed%2527%2Band%2Bcol1%2B%253E%253D%2B%2527Jan%2B1%252C%2B2010%2527%2Band%2Bcol1%2B%253C%253D%2B%2527Dec%2B31%252C%2B2010%2527%2Border%2Bby%2Bcol10%2Bdesc%2Blimit%2B10%22&format=json&diagnostics=true&callback=?




select col0,col1,col2,col10 from 1W7-apvjDSgsT5jRy4lAcxYJgsGVIcFhudiFN0J0 where col0 contains ignoring case 'pmed' and col1 >= 'Jan 1, 2010' and col1 <= 'Dec 31, 2010' order by col10 desc limit 10






https://developers.google.com/chart/interactive/docs/fusiontables



https://developers.google.com/fusiontables/docs/samples/gviz_datatable


https://developers.google.com/chart/interactive/docs/reference#DataView

https://developers.google.com/chart/interactive/docs/reference#patternformatter

https://developers.google.com/chart/interactive/docs/reference#formatters


https://developers.google.com/chart/interactive/docs/datatables_dataviews

https://developers.google.com/chart/interactive/docs/reference#DataView_setColumns



