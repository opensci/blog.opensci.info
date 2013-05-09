--- 
layout: post
title: PLoS ALM Charts with Google Fusion Tables
uuid: 8c6563f5-7230-4a97-b888-7a1536b5b746
published: true
headsuffix:   <script type="text/javascript" src="http://www.google.com/jsapi"></script> <script type="text/javascript" src="/file/2013-05-09-PLoS-ALM-Charts-Google-Fusion-Tables/samplechart.js"></script>
---

[PLoS Article Level Metrics][plosalm] provides multiple [download options][plosalmdata] for the metrics data. One of the options is a bulk [CSV file][bulkcsv]. The CSV file can then be uploaded to [Google Fusion Tables][gft] which provides a [free API][gftapi] for SQL-like queries. The query results can be loaded directly into a Javascript display using [Google Charts][gcharts].

[plosalm]: http://article-level-metrics.plos.org/
[gft]: http://www.google.com/drive/apps.html#fusiontables
[gftapi]: https://developers.google.com/fusiontables/
[gcharts]: https://developers.google.com/chart/ 

<a href="/file/2013-05-09-PLoS-ALM-Charts-Google-Fusion-Tables/samplechart.html"><img src ="/file/2013-05-09-PLoS-ALM-Charts-Google-Fusion-Tables/mychart.png" class="mainimage bigimage"/></a>


<!--more-->



PLoS ALM Data
---
There are several options to [access ALM data][almdata]. One of those options is a bulk download of all data called the *Monthly zip file of the summary spreadsheet for the entire ALM data set (all articles)*. The latest version available is [alm_report_2013-04-11.csv.zip][bulkcsv]. This is a ZIP compressed archive of a single CSV file that includes all the ALM data. 

[almdata]: http://article-level-metrics.plos.org/plos-alm-data/
[bulkcsv]: http://article-level-metrics.plos.org/files/2012/10/alm_report_2013-04-11.csv.zip



Google Fusion Tables
---
The CSV file can be uploaded directly to [Google Fusion Tables][gft]. Once the data is uploaded, it can be [browsed online][mytable].

<a href="https://www.google.com/fusiontables/data?docid=1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s"><img src ="/file/2013-05-09-PLoS-ALM-Charts-Google-Fusion-Tables/mytable.png" class="mainimage bigimage"/></a>




[mytable]: https://www.google.com/fusiontables/data?docid=1AIg949Hskgwe1TQWE6p0rp3M1Z_L2cft8rB9y3s

The columns we want are the article doi, publication date, and title.

instead of using their full column names, they can be referenced simply as col0, col1, and col2 

samplechart.html

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


line 4 is where the query is built.
{% highlight javascript linenos linenostart=4 hl_lines=1 %}
        "query":"select col0,col1,col2,col10 from 1W7-apvjDSgsT5jRy4lAcxYJgsGVIcFhudiFN0J0 where col0 contains ignoring case 'pmed' and col1 >= 'Jan 1, 2010' and col1 <= 'Dec 31, 2010' order by col10 desc limit 10",
{% endhighlight %}



[samplechart.html][]



[samplechart.html]: /file/2013-05-09-PLoS-ALM-Charts-Google-Fusion-Tables/samplechart.html












https://developers.google.com/chart/interactive/docs/fusiontables



https://developers.google.com/fusiontables/docs/samples/gviz_datatable


https://developers.google.com/chart/interactive/docs/reference#DataView

https://developers.google.com/chart/interactive/docs/reference#patternformatter

https://developers.google.com/chart/interactive/docs/reference#formatters


https://developers.google.com/chart/interactive/docs/datatables_dataviews

https://developers.google.com/chart/interactive/docs/reference#DataView_setColumns







  <div id="visualization_div" >Loading...</div>
