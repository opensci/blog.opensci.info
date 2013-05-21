--- 
layout: post
title: PLoS ALM Charts with Google Fusion Tables
uuid: 8c6563f5-7230-4a97-b888-7a1536b5b746
published: true
headsuffix:   <script type="text/javascript" src="http://www.google.com/jsapi"></script> <script type="text/javascript" src="/file/2013-05-09-PLoS-ALM-Charts-Google-Fusion-Tables/table.js"></script>
---

[PLoS Article Level Metrics][plosalm] provides multiple [download options][plosalmdata] for the metrics data. One of the options is a bulk [CSV file][bulkcsv]. The CSV file can then be uploaded to [Google Fusion Tables][gft] which provides a [free API][gftapi] for SQL-like queries. The query results can be loaded directly into a Javascript display using [Google Charts][gcharts].

[plosalm]: http://article-level-metrics.plos.org/
[gft]: http://www.google.com/drive/apps.html#fusiontables
[gftapi]: https://developers.google.com/fusiontables/
[gcharts]: https://developers.google.com/chart/ 

<a href="/file/2013-05-09-PLoS-ALM-Charts-Google-Fusion-Tables/table.html"><img src ="/file/2013-05-09-PLoS-ALM-Charts-Google-Fusion-Tables/mychart.png" class="mainimage bigimage"/></a>


<!--more-->



PLoS ALM Data
---
There are several options to [access ALM data][almdata]. One of those options is a bulk download of all data called the *Monthly zip file of the summary spreadsheet for the entire ALM data set (all articles)*. The latest version available is [alm_report_2013-04-11.csv.zip][bulkcsv]. This is a ZIP compressed archive of a single CSV file that includes all the ALM data. 

[almdata]: http://article-level-metrics.plos.org/plos-alm-data/
[bulkcsv]: http://article-level-metrics.plos.org/files/2012/10/alm_report_2013-04-11.csv.zip



Google Fusion Tables
---
The article metrics CSV file can be uploaded directly to Fusion Tables and [browsed online][mytable]. The data can be filtered, sorted, and aggragated. For example, we might want to see which articles received the most citations from Scopus. Instead of looking at all articles, we could limit the results to articles published in 2010.

[mytable]: https://www.google.com/fusiontables/data?docid=1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s

<a href="https://www.google.com/fusiontables/data?docid=1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s"><img src ="/file/2013-05-09-PLoS-ALM-Charts-Google-Fusion-Tables/mytable.png" class="mainimage bigimage"/></a>


For example, we could sort the 


Fusion Table Query
---
The Google Charts API lets us query the Fusion Table directly and render the results with Javascript. That makes it possible to display the results directly in a webpage. 

For example, 

The columns we want are the article `doi`, `publication_date`, `title`, and `scopus`. Using standard SQL syntax.

The table name used after the `from` command is `1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s` which is seen in the [public table][mytable] URL and in *File > About this table*.


{% highlight sql %}
SELECT doi, publication_date, title, scopus FROM 1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s WHERE publication_date >= '2010-01-01 00:00:00' AND publication_date < '2011-01-01 00:00:00' ORDER BY scopus desc LIMIT 10
{% endhighlight %}

To check if the query is working, append it to this url: `https://www.google.com/fusiontables/exporttable?query=`

URL encoding may be required, for [example][query].



[query]: https://www.google.com/fusiontables/exporttable?query=select%20doi%2C%20publication_date%2C%20title%2C%20scopus%20from%201AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s%20where%20publication_date%20%3E%3D%20%272010-01-01%2000%3A00%3A00%27%20and%20publication_date%20%3C%20%272011-01-01%2000%3A00%3A00%27%20order%20by%20scopus%20desc%20limit%2010







Google Charts
---
Now that we have the query ready, it's time to display the results using Google Charts. There is [sample code][drawchartdemo] that uses [google.visualization.drawChart()][drawchart].


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


Change the `chartType` to `Table` to have the results display as an HTML table. Other settings such as `showRowNumber` is helpful since the query results are ranked. `alternatingRowStyle` makes the rows easier to distinguish. The `allowHtml` setting is needed because the titles contain other markup tags that should be hidden during display. Some other options that are helpful when embedding are `height` and `width`.



Completed [chart][customchart]

[customchart]: /file/2013-05-09-PLoS-ALM-Charts-Google-Fusion-Tables/table.html


  <div id="visualization_div" >Loading...</div>
