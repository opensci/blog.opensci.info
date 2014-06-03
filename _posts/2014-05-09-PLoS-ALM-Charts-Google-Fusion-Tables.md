--- 
layout: post
title: PLoS ALM Charts with Google Fusion Tables
uuid: 8c6563f5-7230-4a97-b888-7a1536b5b746
published: true
headsuffix:   <script type="text/javascript" src="http://www.google.com/jsapi"></script> <script type="text/javascript" src="/file/8c6563f5-7230-4a97-b888-7a1536b5b746/table.js"></script>
---

*Display charts of PLoS Article Level Metrics data with Google Fusion Tables and Google Charts*

All articles published by the Public Library of Science have [Article Level Metrics][plosalmdata] collected, including citation counts, web views, and online bookmarks. All the metrics are available combined into a single [CSV file][bulkcsv].

This data can be uploaded to Google Fusion Tables, which allows SQL-like queries through [their API][gftapi]. The query results can then be displayed in a a web browser with Javascript libraries like [Google Charts][gcharts].





*Data on Fusion Tables can be visualized using pure Javascript and HTML*

<a href="/file/8c6563f5-7230-4a97-b888-7a1536b5b746/table.html">
  <img src ="/file/8c6563f5-7230-4a97-b888-7a1536b5b746/mychart.png" class="mainimage" />
</a>

<a href="https://www.google.com/fusiontables/DataSource?docid=1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW&pli=1#rows:id=12">
  <img src ="/file/8c6563f5-7230-4a97-b888-7a1536b5b746/gft.browse.online.png" class="mainimage" />
</a>



[plosalm]: http://article-level-metrics.plos.org/
[plosalmdata]: http://article-level-metrics.plos.org/plos-alm-data/
[gft]: http://www.google.com/drive/apps.html#fusiontables
[gftapi]: https://developers.google.com/fusiontables/
[gcharts]: https://developers.google.com/chart/ 
[almdata]: http://article-level-metrics.plos.org/plos-alm-data/
[bulkcsv]: http://article-level-metrics.plos.org/files/2012/10/alm_report_2014-03-10.csv



<!-- more -->


Google Fusion Tables API supports filtering and aggregation features compared to the default [PLoS ALM API][almapi].

[almapi]: http://api.plos.org/alm/using-the-alm-api/


Google Fusion Tables
---
The article metrics CSV file can be uploaded directly to Fusion Tables and [browsed online][mytable]. The web interface allows sorting, filtering, and aggragation. For example, we might can filter by `publication_date` to show only articles from 2013, and then sorty by the most CrossRef citations.

[mytable]: https://www.google.com/fusiontables/data?docid=1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW

<a href="https://www.google.com/fusiontables/data?docid=1PWWI0KDelh9VJiROBUGaiW2Y37AJMS9ZilT64b8"><img src ="/file/8c6563f5-7230-4a97-b888-7a1536b5b746/gft.filter.sort.png" class="mainimage"/></a>
*The web interface shows a filtered, sorted result*

Fusion Table API
---
The query options from the web interface can be used through an API. The syntax is similar to an SQL query. 

* `SELECT` Picks the columns to include in the results.
* `FROM` Uses the unique identifier of the data table which can be found in *File > About this table* or in the URL: `1FpM0r2LnO7RHM9dh4uO118tjIEBBuN0B0sauuh0`
* `WHERE` Filters the results by the value of a column. Dates within a certain range can be filtered by using inequality operators and `AND` for multiple filters.
* `ORDER BY` Sorts the results using a selected column and in the chosen sort direction.
* `LIMIT` Returns only the specified number of results. This prevents loading too much data into a browser causing it to slow down.

The complete query:
{% highlight sql %}
SELECT doi, publication_date, title, scopus FROM 1FpM0r2LnO7RHM9dh4uO118tjIEBBuN0B0sauuh0 WHERE publication_date >= '2010-01-01' AND publication_date <= '2010-12-31' ORDER BY scopus desc LIMIT 10
{% endhighlight %}

Queries [can be tested][query] by appending the query to this URL: `https://www.google.com/fusiontables/exporttable?query=`



[query]: https://www.google.com/fusiontables/exporttable?query=SELECT%20doi%2C%20publication_date%2C%20title%2C%20scopus%20FROM%201FpM0r2LnO7RHM9dh4uO118tjIEBBuN0B0sauuh0%20WHERE%20publication_date%20%3E%3D%20%272010-01-01%27%20AND%20publication_date%20%3C%3D%20%272010-12-31%27%20ORDER%20BY%20scopus%20desc%20LIMIT%2010




Google Charts
---
Now that the query is ready, it's time to display the results using Google Charts. The query can be passed directly to the [`drawChart()`][drawchart] function. There is a [sample code][drawchartdemo] that does this.

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

Remove line 5 `refreshInterval` because the source data is not being changed.

Instead of a bar chart, change `chartType` to `Table`. This will show query results in an interactive HTML table.

Change these settings in the `options` area.

* `showRowNumber` is helpful since the query results are ranked.
* `alternatingRowStyle` makes the rows easier to distinguish.
* `allowHtml` is needed because the titles contain other markup tags.



{% highlight javascript linenos hl_lines=4 %}
      google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'http://www.google.com/fusiontables/gvizdata?tq=',
        "query":"SELECT doi, publication_date, title, scopus FROM 1FpM0r2LnO7RHM9dh4uO118tjIEBBuN0B0sauuh0 WHERE publication_date >= '2010-01-01' AND publication_date <= '2010-12-31' ORDER BY scopus desc LIMIT 10",
        "chartType": "Table",
        "options": {
          "showRowNumber": true,
          "alternatingRowStyle": true,
          "allowHtml": true,          
        }
      });
{% endhighlight %}

The size of the visualization can also be adjusted with `height` and `width`.

Completed [chart][customchart]

[customchart]: /file/8c6563f5-7230-4a97-b888-7a1536b5b746/table.html


  <div id="visualization_div" >Loading...</div>
