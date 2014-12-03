--- 
layout: post
title: Visualize PLoS ALM with Google Charts and Fusion Tables
permalink: /7230/Visualize-PLoS-ALM-Charts-with-Google-Fusion-Tables
uuid: 8c6563f5-7230-4a97-b888-7a1536b5b746
shortid: 7230
redirect_from: /7230/
published: true
customhead:   <script type="text/javascript" src="http://www.google.com/jsapi"></script><script type="text/javascript" src="/file/7230/columnChart.js"></script>
author: mikechelen
---

*Learn to visualize Article Level Metrics with Google Fusion Tables and Google Charts*

<a href="/file/7230/columnChart.html">
  <img src ="/file/7230/columnChart.png" class="mainimage" />
</a>

All scientific journal articles published by the Public Library of Science have [Article Level Metrics collected about them. These metrics include citation counts, web views, online bookmarks, and more. The metrics are available through [a variety of sources][plosalmdata] including a [bulk CSV file][bulkcsv].

> Metrics data for every PLoS article is available online as a bulk download

The CSV data can be uploaded to Google Fusion Tables, a free data hosting service that allows web-based browsing, filtering, and aggregation. The [Fusion Tables API][gftapi] supports SQL-like queries and integrates tightly with [Google Charts][gcharts] allowing visualization of results in a web browser using Javascript.

> Google Charts can visualize query results from Fusion Tables

The advantage of Javascript compared to Flash or static images is that it works in any web browser including mobile devices, and allows interaction with the data.

[plosalm]: http://article-level-metrics.plos.org/
[plosalmdata]: http://article-level-metrics.plos.org/plos-alm-data/
[gft]: http://www.google.com/drive/apps.html#fusiontables
[gftapi]: https://developers.google.com/fusiontables/
[gcharts]: https://developers.google.com/chart/ 
[almdata]: http://article-level-metrics.plos.org/plos-alm-data/
[bulkcsv]: http://article-level-metrics.plos.org/files/2012/10/alm_report_2014-03-10.csv
[almapi]: http://api.plos.org/alm/using-the-alm-api/

<!-- more --> 

<!--
Google Fusion Tables API supports filtering and aggregation features compared to the default [PLoS ALM API][almapi].
-->


# Google Fusion Tables #

The article metrics [CSV file][bulkcsv] can be uploaded directly to Fusion Tables and [browsed online][mytable]. The web interface allows sorting, filtering, and aggregation. 

[mytable]: https://www.google.com/fusiontables/DataSource?docid=1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW&pli=1#rows:id=12

<a href="https://www.google.com/fusiontables/DataSource?docid=1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW&pli=1#rows:id=12">
  <img src ="/file/7230/gft.browse.online.png" class="mainimage" />
</a>

> Data can be browsed online after uploading the CSV

For example, we can filter by `publication_date` to show only articles from 2013, and sort by the most CrossRef citations.

<a href="https://www.google.com/fusiontables/DataSource?docid=1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW#rows:id=13"><img src ="/file/7230/gft.filter.sort.png" alt="2013 sorted by CrossRef" class="mainimage"/></a>

> The web interface shows a filtered, sorted result

# Fusion Tables API #

The query options from the web interface can also be used through an [API][gftapi]. The syntax is similar to an SQL query. 

To see the top 10 CrossRef cited papers from 2013:
{% highlight sql %}
SELECT title, crossref, scopus, pubmed FROM 1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW WHERE publication_date >= '2013-01-01' AND publication_date < '2014-01-01' ORDER BY crossref desc LIMIT 10
{% endhighlight %}

* `SELECT` Pick the columns to include in the results.
* `FROM` Use the unique identifier of the data table which can be found in *File > About this table* or in the URL: `1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW`
* `WHERE` Filter the results by the value of a column. Dates within a certain range can be filtered by using inequality operators with `AND` for multiple filters. Use `>=` to include articles published on or after 2013-01-01 and `<` to include articles published only before 2014-01-01.
* `ORDER BY` Sort the results using a selected column and in the chosen sort direction.
* `LIMIT` Return only the specified number of results. This prevents loading too much data into a browser causing it to slow down, and also is useful for testing queries.

> Google Fusion Tables API supports SQL-like queries

The results of a query can be [downloaded as a CSV][query] by appending the query to this URL: `https://www.google.com/fusiontables/exporttable?query=`

[query]: https://www.google.com/fusiontables/exporttable?query=SELECT%20title%2C%20crossref%2C%20scopus%2C%20pubmed%20FROM%201zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW%20WHERE%20publication_date%20%3E%3D%20%272013-01-01%27%20AND%20publication_date%20%3C%20%272014-01-01%27%20ORDER%20BY%20crossref%20desc%20LIMIT%2010


To make testing queries during development easier, use the [Hurl.it HTTP Request tool][querytest].

[querytest]: http://www.hurl.it/?url=www.google.com/fusiontables/exporttable&method=get&args=%7B%22query%22%3A%5B%22SELECT%20title%2C%20crossref%2C%20scopus%2C%20pubmed%20FROM%201zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW%20WHERE%20publication_date%20%3E%3D%20%272013-01-01%27%20AND%20publication_date%20%3C%20%272014-01-01%27%20ORDER%20BY%20crossref%20desc%20LIMIT%2010%22%5D%7D

# Google Charts #

Now that we have a working query, we can display the results using Google Charts. Because of the tight integration between Fusion Tables and Charts, the query can be passed directly as a Javascript parameter.

[drawchartdemo]: https://developers.google.com/chart/interactive/docs/fusiontables
[drawchart]: https://developers.google.com/chart/interactive/docs/reference#google.visualization.drawchart

Using this [sample code][drawchartdemo] we can visualize our data by modifying a few lines of the [`drawChart()`][drawchart] function.

> Modifying a few lines from the sample code creates a chart with our data

{% highlight javascript linenos hl_lines="4 8 9 10" %}
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

* Line 4 is where the `query` value is set. Replace the sample query with our custom query.
* Remove `refreshInterval` on line 5 because the source data is not being changed.
* Instead of `BarChart`, change `chartType` to `ColumnChart` to select the type of chart.

<!-- among the supported [chart types][charttypes].
[charttypes]: https://developers.google.com/apps-script/reference/charts/chart-type
-->

Change these settings in the `options` area:

* `title` A title to describe the chart.
* `vAxis` Control settings for the vertical axis, such as `title` to show what the axis is measuring.

{% highlight javascript linenos hl_lines="4 7 8" %}
      google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'http://www.google.com/fusiontables/gvizdata?tq=',
        "query":"select title,crossref,scopus,pubmed from 1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW where publication_date >= '2013-01-01 00:00:00' and publication_date < '2014-01-01 00:00:00' order by crossref desc limit 10",
        "chartType": "ColumnChart",
        "options": {
          "title": "Top 10 Crossref Cited PLoS Articles from 2013",
          "vAxis": {"title": "Citations"},
        }
      });
{% endhighlight %}

The chart ouputs to a `visualization_div` that can be styled like any HTML element, such as with a desired `height` and `width`.
Adding some text like "Loading..." helps prevent users from being confused by a blank space while the visualization loads.


{% highlight html %}
  <div id="visualization_div" style="width: 100%; height: 800px;">Loading...</div>
{% endhighlight %}


<a href="https://github.com/opensci/blog.opensci.info/blob/gh-pages/file/7230/columnChart.html" target="_blank" class="btn btn-default" role="button">Final source code</a>

# Results #

The final chart can be embedded in a web page or displayed [on its own][customchart].

<div id="visualization_div" style="width: 90%; height: 400px; margin-left:auto;margin-right:auto;margin-bottom:.5em;">Loading...</div>

[customchart]: /file/7230/columnChart.html

The result is a query performed on a live dataset, with the results visualized in any web browser.

Because it uses Javascript, even this basic chart can include some interaction. When the user hovers their mouse on a column, a label appears showing the full article title and an exact citation count. This provides important detail without taking additional screen space or overloading the user with information.

> Javascript charts can include interaction such as tooltips

Although this is a basic query and chart, we can see the top CrossRef cited articles for 2013, and compare their citation counts. We can see that most of the top-cited CrossRef articles had fewer Scopus citations, except for "Post-Treatment HIV-1 Controllers..." and "A Guide to Enterotypes across the..." which for some reason received more Scopus than CrossRef citations. These differences may be due to article awareness, citation inclusion methods, or timeframe.

> The chart lets the viewer compare citations of different papers and spot trends

While it is impossible to draw conclusions from a single chart, even this basic visualization can indicate areas of interest for further study.


# Next Steps #

Using this type of code, anyone can run a query on the PLoS ALM dataset. This query can use SQL-like operations and is free to run on the entire 100k+ rows of data.

> Fusion Tables query can be modified to visualize different aspects of the data

There are also a [range of chart types][charttypes] that can be used to display query results.

[charttypes]: https://developers.google.com/chart/interactive/docs/gallery

Additional options would be to add more user interaction, such as allowing the user to select a filter by year, and which citation sources to include and sort. Additionally it would help to link the chart to the article DOIs so users easily read the full article.