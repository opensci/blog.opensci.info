--- 
layout: post
title: PLoS ALM Charts with Google Fusion Tables
uuid: 8c6563f5-7230-4a97-b888-7a1536b5b746
published: true
headsuffix:   <script type="text/javascript" src="http://www.google.com/jsapi"></script> <script type="text/javascript" src="/file/8c6563f5-7230-4a97-b888-7a1536b5b746/table.js"></script>
---

*Display charts of PLoS Article Level Metrics data with Google Charts and Fusion Tables*

The Public Library of Science publishes [Article Level Metrics data][plosalmdata] for all of their articles. The [bulk CSV][bulkcsv] includes citation counts and online usage metrics.

By uploading the data to Google Fusion Tables, the dataset can be queried using an [SQL-like API][gftapi]. With [Google Charts][gcharts] the results of those queries can be visualized in a web browser.


<a href="/file/8c6563f5-7230-4a97-b888-7a1536b5b746/table.html">
  <img src ="/file/8c6563f5-7230-4a97-b888-7a1536b5b746/mychart.png" class="mainimage" />
</a>

*Uploaded ALM data can also be browsed online*


[plosalm]: http://article-level-metrics.plos.org/



Google Fusion Tables API supports filtering and aggregation features compared to the default [PLoS ALM API][almapi]. GFT also integrates with GCharts api to display the query results.



[almapi]: http://api.plos.org/alm/using-the-alm-api/
[plosalmdata]: http://article-level-metrics.plos.org/plos-alm-data/
[gft]: http://www.google.com/drive/apps.html#fusiontables
[gftapi]: https://developers.google.com/fusiontables/
[gcharts]: https://developers.google.com/chart/ 


<!--more-->


The latest version of the CSV file is [alm_report_2013-04-11.csv.zip][bulkcsv]

[almdata]: http://article-level-metrics.plos.org/plos-alm-data/
[bulkcsv]: http://article-level-metrics.plos.org/files/2012/10/alm_report_2013-04-11.csv.zip



Google Fusion Tables
---
The article metrics CSV file can be uploaded directly to Fusion Tables and [browsed online][mytable]. The data can be filtered, sorted, and aggragated. For example, we might want to see which articles received the most citations from Scopus. Instead of looking at all articles, we could limit the results to articles published in 2010.

[mytable]: https://www.google.com/fusiontables/data?docid=1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s

<a href="https://www.google.com/fusiontables/data?docid=1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s"><img src ="/file/8c6563f5-7230-4a97-b888-7a1536b5b746/mytable.png" class="mainimage bigimage"/></a>


Fusion Table Query
---
The GFT API supports an SQL-like syntax. We can `SELECT` certain columns to use in our result.

The columns we want are the article `doi`, `publication_date`, `title`, and `scopus`.

The table name used after the `from` command is `1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s` which is seen in the [table][mytable] URL and in *File > About this table*.


{% highlight sql %}
SELECT doi, publication_date, title, scopus FROM 1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s WHERE publication_date >= '2010-01-01' AND publication_date < '2011-01-01' ORDER BY scopus desc LIMIT 10
{% endhighlight %}

To check if the query is working, append it to this URL: `https://www.google.com/fusiontables/exporttable?query=`

[Example][query]

[query]: https%3A%2F%2Fwww.google.com%2Ffusiontables%2Fexporttable%3Fquery%3DSELECT%20doi%2C%20publication_date%2C%20title%2C%20scopus%20FROM%201AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s%20WHERE%20publication_date%20%3E%3D%20%272010-01-01%27%20AND%20publication_date%20%3C%20%272011-01-01%27%20ORDER%20BY%20scopus%20desc%20LIMIT%2010




Google Charts
---
Now that we have the query ready, it's time to display the results using Google Charts. There is [sample code][drawchartdemo] that uses [google.visualization.drawChart()][drawchart].

The `drawChart()` function can be passed the query directly.

[drawchartdemo]: https://developers.google.com/chart/interactive/docs/fusiontables
[drawchart]: https://developers.google.com/chart/interactive/docs/reference#google.visualization.drawchart


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

Line 4 is where the `query` value is set. Replace the sample query with our custom query.


{% highlight javascript linenos hl_lines=4 %}
      google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'http://www.google.com/fusiontables/gvizdata?tq=',
        "query":"select doi, publication_date, title, scopus from 1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s where publication_date >= '2010-01-01 00:00:00' and publication_date < '2011-01-01 00:00:00' order by scopus desc limit 10",
        "chartType": "Table",
        "options": {
          "showRowNumber": true,
          "alternatingRowStyle": true,
          "allowHtml": true,          
        }
      });
{% endhighlight %}


Change the `chartType` to `Table` to have the results display as an HTML table. Other settings such as `showRowNumber` are helpful since the query results are ranked. `alternatingRowStyle` makes the rows easier to distinguish. The `allowHtml` setting is needed because the titles contain other markup tags. Some other options that are helpful when embedding are `height` and `width`.



Completed [chart][customchart]

[customchart]: /file/8c6563f5-7230-4a97-b888-7a1536b5b746/table.html


  <div id="visualization_div" >Loading...</div>
