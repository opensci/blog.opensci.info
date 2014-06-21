--- 
layout: post
title: PLoS ALM Charts with Google Fusion Tables
uuid: 8c6563f5-7230-4a97-b888-7a1536b5b746
published: true
comments: true
customhead:   <script type="text/javascript" src="http://www.google.com/jsapi"></script><script type="text/javascript" src="/file/8c6563f5-7230-4a97-b888-7a1536b5b746/columnChart.js"></script>

---

*Learn to visualize Article Level Metrics data using Google Fusion Tables and Google Charts*

All articles published by the Public Library of Science have [Article Level Metrics][plosalmdata] collected. These metrics include citation counts, web views, online bookmarks, and more. The metrics are available through the [PLoS ALM API][almapi] and in a [bulk CSV file][bulkcsv].

The CSV data can be uploaded to Google Fusion Tables, a free data hosting service that allows web-based browsing, filtering, and aggregation. The [Fusion Tables API][gftapi] supports SQL-like queries and integrates tightly with the Javascript [Google Charts][gcharts] library allowing visualization of query results in a web browser.

[plosalm]: http://article-level-metrics.plos.org/
[plosalmdata]: http://article-level-metrics.plos.org/plos-alm-data/
[gft]: http://www.google.com/drive/apps.html#fusiontables
[gftapi]: https://developers.google.com/fusiontables/
[gcharts]: https://developers.google.com/chart/ 
[almdata]: http://article-level-metrics.plos.org/plos-alm-data/
[bulkcsv]: http://article-level-metrics.plos.org/files/2012/10/alm_report_2014-03-10.csv
[almapi]: http://api.plos.org/alm/using-the-alm-api/




<a href="/file/8c6563f5-7230-4a97-b888-7a1536b5b746/columnChart.html">
  <img src ="/file/8c6563f5-7230-4a97-b888-7a1536b5b746/columnChart.png" class="mainimage" />
</a>
  
> Google Charts can visualize data from Fusion Tables with Javascript.

<!-- more -->



<!--
Google Fusion Tables API supports filtering and aggregation features compared to the default [PLoS ALM API][almapi].
-->




# Google Fusion Tables #

<a href="https://www.google.com/fusiontables/DataSource?docid=1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW&pli=1#rows:id=12">
  <img src ="/file/8c6563f5-7230-4a97-b888-7a1536b5b746/gft.browse.online.png" class="mainimage" />
</a>

> Data can be browsed online after uploading the CSV

The article metrics CSV file can be uploaded directly to Fusion Tables and [browsed online][mytable]. The web interface allows sorting, filtering, and aggregation. For example, we can filter by `publication_date` to show only articles from 2013, then sort by the most CrossRef citations.

[mytable]: https://www.google.com/fusiontables/DataSource?docid=1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW&pli=1#rows:id=12

<a href="https://www.google.com/fusiontables/DataSource?docid=1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW#rows:id=13"><img src ="/file/8c6563f5-7230-4a97-b888-7a1536b5b746/gft.filter.sort.png" alt="2013 sorted by CrossRef" class="mainimage"/></a>

> The web interface shows a filtered, sorted result

## Fusion Tables API ##

The query options from the web interface can be used through an API. The syntax is similar to an SQL query. 

* `SELECT` Pick the columns to include in the results.
* `FROM` Use the unique identifier of the data table which can be found in *File > About this table* or in the URL: `1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW`
* `WHERE` Filter the results by the value of a column. Dates within a certain range can be filtered by using inequality operators with `AND` for multiple filters. Use `>=` to include article published on or after 2013-01-01 and `<` to include only article published before 2014-01-01.
* `ORDER BY` Sort the results using a selected column and in the chosen sort direction.
* `LIMIT` Return only the specified number of results. This prevents loading too much data into a browser causing it to slow down, and also is useful for testing queries.

The complete query for the top 10 CrossRef cited papers from 2013:
{% highlight sql %}
SELECT title, crossref, scopus, pubmed FROM 1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW WHERE publication_date >= '2013-01-01' AND publication_date < '2014-01-01' ORDER BY crossref desc LIMIT 10
{% endhighlight %}

To test queries during development, use the [Hurl.it HTTP Request tool][querytest].

[querytest]: http://www.hurl.it/?url=www.google.com/fusiontables/exporttable&method=get&args=%7B%22query%22%3A%5B%22SELECT%20title%2C%20crossref%2C%20scopus%2C%20pubmed%20FROM%201zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW%20WHERE%20publication_date%20%3E%3D%20%272013-01-01%27%20AND%20publication_date%20%3C%20%272014-01-01%27%20ORDER%20BY%20crossref%20desc%20LIMIT%2010%22%5D%7D


The results of a query can also be [downloaded as a CSV][query] by appending the query to this URL: `https://www.google.com/fusiontables/exporttable?query=`

[query]: https://www.google.com/fusiontables/exporttable?query=SELECT%20title%2C%20crossref%2C%20scopus%2C%20pubmed%20FROM%201zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW%20WHERE%20publication_date%20%3E%3D%20%272013-01-01%27%20AND%20publication_date%20%3C%20%272014-01-01%27%20ORDER%20BY%20crossref%20desc%20LIMIT%2010



Google Charts
---
Now that the query is ready, it is time to display the results using Google Charts. Because of the tight integration between Fusion Tables and Google Charts, the query can be written directly in the Javascript code.

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

> Fusion Tables query is written directly in the Javascript

Using this [sample code][drawchartdemo] we can modify a few lines of the [`drawChart()`][drawchart] function to visualize our data.

* Line 4 is where the `query` value is set. Replace the sample query with our custom query.
* Remove `refreshInterval` on line 5 because the source data is not being changed.
* Instead of `BarChart`, change `chartType` to `ColumnChart` to select the type of chart.

<!-- among the supported [chart types][charttypes].
[charttypes]: https://developers.google.com/apps-script/reference/charts/chart-type
-->

Change these settings in the `options` area:

* `title` A title to describe the chart.
* `vAxis` Control settings for the vertical axis, such as `title` to show what the axis is measuring.


{% highlight javascript linenos hl_lines=4 %}
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

The `visualization_div` can be styled like any HTML element, such as with a desired `height` and `width`.
Adding some text like "Loading..." helps prevent users from being confused by a blank space while the visualization loads.


{% highlight html %}
  <div id="visualization_div" style="width: 100%; height: 800px;">Loading...</div>
{% endhighlight %}


<a href="view-source:/file/8c6563f5-7230-4a97-b888-7a1536b5b746/columnChart.html" target="_blank">View final source code</a>


<div id="visualization_div" style="width: 90%; height: 400px; margin-left:auto;margin-right:auto;margin-bottom:.5em;">Loading...</div>

> The final chart can be embedded in a web page or [displayed on its own][customchart]

[customchart]: /file/8c6563f5-7230-4a97-b888-7a1536b5b746/columnChart.html

The result is a query performed live on the dataset, with the results displayed in any web browser with a visualization.

Even this basic chart has an element of interactivity. When the user hovers their mouse on a column, a label will appear showing the full article title and an exact citation count. This provides important detail without consuming additional screen space.


Although this is a basic query and visualization, we can see what the top CrossRef cited articles were for 2013, and compare their citation counts. For example the #1 article received approximately twice as many citations as the #3 article. We can also see that most of the top-cited CrossRef articles had fewer Scopus citations, except for "Post-Treatment HIV-1 Controllers..." and "A Guide to Enterotypes across the..." which for some reason received more Scopus than CrossRef citations. We can also see that "PKC? Phosphorylates PI3K? to..." received a high amount of Crossref citations, it received relatively few Scopus and zero Pubmed citations. These differences may be due to article awareness, citation inclusion methods, and timeframe. While it is impossible to draw conclusions from a single chart, even this basic visualization can indicate possible areas of interest for further study.



Additional options would be to add more user interaction, such as allowing the user to choose which year to filter by, and which citation sources to include and sort. Additionally we might add links via the DOI so that users could click directly from the visualization through to the actual article. These features will be explored in upcoming articles.
