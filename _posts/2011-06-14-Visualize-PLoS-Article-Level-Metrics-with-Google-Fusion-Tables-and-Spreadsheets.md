--- 
layout: post
title: Visualize PLoS Article Level Metrics with Google Fusion Tables and Spreadsheets
uuid: 777dd893-0aee-4395-9802-63b9b0a50634
---

## Introduction ##

### Article Level Metrics ###

The [Public Library of Science][plos] collects additional information for each article they publish including citations, downloads, web page views, and community response. These metrics have now been uploaded [uploaded][plosblog] to [Google Fusion Tables][gft], a free service for sharing data. Previously the the data was available through an [Excel XLS file][almxls] on the PLoS [Article Level Metrics][plosalm] site. 

<!--more-->


* Table of Contents
{:toc}


The collected information is divided into 5 tables:

* [Summary ALM Data][summary]
* [Combined Download Statistics][combined]
* [HTML Views][html]
* [PDF Downloads][pdf]
* [XML Downloads][xml]
 
[plos]: http://www.plos.org
[plosblog]: http://blogs.plos.org/plos/2010/07/plos-alm-data-in-google-fusion-tables/
[almxls]: http://www.plosone.org/static/plos-alm.zip
[plosalm]: http://article-level-metrics.plos.org/
[gft]: http://www.google.com/fusiontables/Home




### Google Fusion Tables ###

[Google Fusion Tables][gft] is a public data storage service that can be accessed through both a web browser and an API. Unlike other online spreadsheet programs, large [datasets up to 100mb][gftlimit] are supported. Sorting, grouping, and other queries can be performed with the [Google Fusion Tables API][gftapi] using an SQL-like query language . Query results can be exported to common formats for use in other visualization tools such as [Google Spreadsheets][gdocs].

[gdocs]: https://docs.google.com
[gftapi]: https://code.google.com/apis/fusiontables/
[gftlimit]: https://code.google.com/p/fusion-tables/issues/detail?id=261#c1


### Web Based View ###
On Google Fusion Tables each dataset can be viewed through a web browser. The first 100 rows and several columns are shown, and each column can be sorted ascending or descending. Additional operations such as filtering, aggregation, and visualization are available through the menu system. For example, one of the PLoS tables that includes much of the collected article metrics is [Summary ALM Data table][summary].
<a href="http://www.google.com/fusiontables/DataSource?snapid=61925"><img class="mainimage bigimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Summary.ALM.Data.png" /></a>



### Data Updated ###

An updated version of this ALM data is now also available on Google Fusion Tables: [PLoS Article Level Metrics on Google Fusion Tables Updated to V4][plosalmv4].

[plosalmv4]: /2011/08/14/PLoS-Article-Level-Metrics-on-Google-Fusion-Tables-Updated-to-V4/



## Summary ALM Data ##

The [Summary ALM Data][summary] table contains basic information about each article such as the article title, the journal it was published in, and the publication date. The metric information conists of citation counts, usage, and community metrics. The citation counts are from CrossRef, PubMed Central, and Scopus. Usage metrics are based on website page accesses and downloads: HTML page views, PDF downloads, and XML downloads. Community reactions are an assessment of Blog coverage, Trackbacks, and Social Bookmarks.


<br clear="all" />
<img class="mainimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.About.Menu.png" style="width:150px;float:left;"/>
Every table is referenced by an ID number. The ID number can be seen in File -> About.
<br clear="all"/>

The ID number for the [Summary ALM Data table][summary] is `204244`. This number will be used in API calls that reference the table.
<img class="mainimage bigimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Summary.ALM.Data.About.png" />


[summary]: http://tables.googlelabs.com/DataSource?snapid=61925
[combined]: http://tables.googlelabs.com/DataSource?snapid=62323
[html]: http://tables.googlelabs.com/DataSource?snapid=62324
[pdf]: http://tables.googlelabs.com/DataSource?snapid=62524
[xml]: http://tables.googlelabs.com/DataSource?snapid=62607



## Combined Download Statistics ##
The history of downloads for each month is available in [Combined Download Statistics][combined]. The download history is also seperated by file type in the [HTML][html], [PDF][pdf], and [XML][xml] tables.



## Google Fusion Tables API ##

The [Google Fusion Tables API] [gftapi] supports a range of queries similar to SQL. Some of the query statments available include SELECT, LIMIT, and SORT. See the [syntax reference][gftdev] for a full list of commands.

[gftdev]: https://code.google.com/apis/fusiontables/docs/developers_reference.html

### Select ###
A SELECT statement is used to choose the desired columns from a table. Options include FROM, WHERE, GROUP BY, OFFSET, and LIMIT.

For example, use an asterisk `*` to select all the columns from the [Summary ALM Data table][summary] which is identified with its ID number:

{% highlight sql %}
SELECT * FROM 204244
{% endhighlight %}

Example queries in this article include a Download CSV link to see the raw output from each query.

[Download CSV](http://tables.googlelabs.com/exporttable?query=SELECT%20*%20FROM%20204244)

The results of a query can be exported as CSV by appending the query to this base URL:
    http://tables.googlelabs.com/exporttable?query=

Remember to use URL encoding if needed, for example:
    http://tables.googlelabs.com/exporttable?query=SELECT%20*%20FROM%20204244




### Limit ###

When working with large datasets a result may contain many records. Use the LIMIT option to restrict the number of rows. Google Docs only supports import up to 500kb.
For example, to select the first 10 results of the [Summary ALM Data table][summary]:

{% highlight sql %}
SELECT * FROM 204244 LIMIT 10
{% endhighlight %}

[Download CSV](http://tables.googlelabs.com/exporttable?query=SELECT%20*%20FROM%20204244%20LIMIT%2010)


### Google Spreadsheets ###

The CSV output can be loaded in many applications such as Google Spreadsheets. The importData() function imports the results of the query and the spreadsheet will automatically update.

For example the formula:
    =importData("http://tables.googlelabs.com/exporttable?query=SELECT * FROM 204244 LIMIT 10")

Will import the results and display them in the [spreadsheet](https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AuD5dr31WtX4dHc2RjVyLU1fVlEyYU04Mncxdk4zc2c&single=true&gid=0&output=html) ([edit](https://docs.google.com/spreadsheet/ccc?key=0AuD5dr31WtX4dHc2RjVyLU1fVlEyYU04Mncxdk4zc2c&hl=en_US#gid=0)):


<iframe src="http://spreadsheets.google.com/pub?key=tw6F5r-M_VQ2aM82w1vN3sg&amp;single=true&amp;gid=0&amp;output=html&amp;widget=true" frameborder="0" height="300" width="100%"></iframe>



















### Columns ###

Choose which columns to include. Surround column names with single parenthesis for example such as for the Article Title column.


<a href="http://tables.googlelabs.com/exporttable?query=SELECT%20%27Article%20Title%27,DOI,URL%20FROM%20204244%20LIMIT%2010">Download CSV</a>

{% highlight sql %}
SELECT 'Article Title',DOI,URL FROM 204244 LIMIT 10
{% endhighlight %}

<iframe src="http://spreadsheets.google.com/pub?key=tw6F5r-M_VQ2aM82w1vN3sg&amp;single=true&amp;gid=2&amp;output=html&amp;widget=true" frameborder="0" height="300" width="100%"></iframe>





### Sort ###
Sort by any column such as number of CrossRef citations. <a href="http://tables.googlelabs.com/exporttable?query=SELECT%20*%20FROM%20204244%20ORDER%20BY%20%27Citations%20-%20CrossRef%27%20DESC%20LIMIT%2010">Download CSV</a>

{% highlight sql %}
SELECT * FROM 204244 ORDER BY 'Citations - CrossRef' DESC LIMIT 10
{% endhighlight %}

<iframe src="http://spreadsheets.google.com/pub?key=tw6F5r-M_VQ2aM82w1vN3sg&amp;single=true&amp;gid=3&amp;output=html&amp;widget=true" frameborder="0" height="300" width="100%"></iframe>
<h3>Filter</h3>

Add a filter for a particular value, such as articles published in 2009 only.<a href="http://tables.googlelabs.com/exporttable?query=SELECT%20*%20FROM%20204244%20WHERE%20%27Publication%20Year%27%20=%202009%20ORDER%20BY%20%27Citations%20-%20CrossRef%27%20DESC%20LIMIT%2010">Download CSV</a>
&nbsp;

{% highlight sql %}
SELECT * FROM 204244 WHERE 'Publication Year' = 2009 ORDER BY 'Citations - CrossRef' DESC LIMIT 10
{% endhighlight %}

<iframe src="http://spreadsheets.google.com/pub?key=tw6F5r-M_VQ2aM82w1vN3sg&amp;single=true&amp;gid=4&amp;output=html&amp;widget=true" frameborder="0" height="300" width="100%"></iframe>


### Special Characters ###
Besides using quotation marks special characters in column names can be escaped with backslash. This is needed when a column name itself contains a quotation mark.


{% highlight sql %}
SELECT '\'Research Article\' or \'non-Research Article\'?' FROM 204244 LIMIT 10
{% endhighlight %}

### Column Reference ###

It may be easier to reference columns by number instead of using their names. <a href="http://tables.googlelabs.com/exporttable?query=SELECT%20col1,col2%20FROM%20204244%20LIMIT%2010">Download CSV</a>

{% highlight sql %}
SELECT col1,col2 FROM 204244 LIMIT 10
{% endhighlight %}



## Combined Download Statistics ##

<a href="http://tables.googlelabs.com/DataSource?snapid=62323">PLoS ALM v3 05182010 Combined Download Statistics</a> ID 202272


### Sort ###
Sort by the 2010-3 column to find papers with the most recent downloads. <a href="http://tables.googlelabs.com/exporttable?query=SELECT%20*%20FROM%20202272%20ORDER%20BY%20%272010-3%27%20DESC%20LIMIT%2010">Download CSV</a>

{% highlight sql %}
SELECT * FROM 202272 ORDER BY '2010-3' DESC LIMIT 10
{% endhighlight %}

<iframe src="http://spreadsheets.google.com/pub?key=0AuD5dr31WtX4dDJIWmMyQUlteURvN183c3JyYlo2d1E&amp;single=true&amp;gid=0&amp;output=html&amp;widget=true" frameborder="0" height="300" width="100%"></iframe>

### Yearly Summary ###

Download totals over the past year:



{% highlight sql %}
SELECT SUM('2009-3'),SUM('2009-4'),SUM('2009-5'),SUM('2009-6'),SUM('2009-7'),SUM('2009-8'),SUM('2009-9'),SUM('2009-10'),SUM('2009-11'),SUM('2009-12'),SUM('2010-1'),SUM('2010-2'),SUM('2010-3') FROM 202272
{% endhighlight %}


<a href="http://tables.googlelabs.com/exporttable?query=SELECT%20SUM%28%272009-3%27%29,SUM%28%272009-4%27%29,SUM%28%272009-5%27%29,SUM%28%272009-6%27%29,SUM%28%272009-7%27%29,SUM%28%272009-8%27%29,SUM%28%272009-9%27%29,SUM%28%272009-10%27%29,SUM%28%272009-11%27%29,SUM%28%272009-12%27%29,SUM%28%272010-1%27%29,SUM%28%272010-2%27%29,SUM%28%272010-3%27%29%20FROM%20202272">Download CSV</a>




### Combined download sum history ###
{% highlight sql %}
SELECT SUM('2003-10'),SUM('2003-11'),SUM('2003-12'),SUM('2004-1'),SUM('2004-2'),SUM('2004-3'),SUM('2004-4'),SUM('2004-5'),SUM('2004-6'),SUM('2004-7'),SUM('2004-8'),SUM('2004-9'),SUM('2004-10'),SUM('2004-11'),SUM('2004-12'),SUM('2005-1'),SUM('2005-2'),SUM('2005-3'),SUM('2005-4'),SUM('2005-5'),SUM('2005-6'),SUM('2005-7'),SUM('2005-8'),SUM('2005-9'),SUM('2005-10'),SUM('2005-11'),SUM('2005-12'),SUM('2006-1'),SUM('2006-2'),SUM('2006-3'),SUM('2006-4'),SUM('2006-5'),SUM('2006-6'),SUM('2006-7'),SUM('2006-8'),SUM('2006-9'),SUM('2006-10'),SUM('2006-11'),SUM('2006-12'),SUM('2007-1'),SUM('2007-2'),SUM('2007-3'),SUM('2007-4'),SUM('2007-5'),SUM('2007-6'),SUM('2007-7'),SUM('2007-8'),SUM('2007-9'),SUM('2007-10'),SUM('2007-11'),SUM('2007-12'),SUM('2008-1'),SUM('2008-2'),SUM('2008-3'),SUM('2008-4'),SUM('2008-5'),SUM('2008-6'),SUM('2008-7'),SUM('2008-8'),SUM('2008-9'),SUM('2008-10'),SUM('2008-11'),SUM('2008-12'),SUM('2009-1'),SUM('2009-2'),SUM('2009-3'),SUM('2009-4'),SUM('2009-5'),SUM('2009-6'),SUM('2009-7'),SUM('2009-8'),SUM('2009-9'),SUM('2009-10'),SUM('2009-11'),SUM('2009-12'),SUM('2010-1'),SUM('2010-2'),SUM('2010-3') FROM 202272
{% endhighlight %}

<a href="http://tables.googlelabs.com/exporttable?query=SELECT%20SUM%28%272003-10%27%29,SUM%28%272003-11%27%29,SUM%28%272003-12%27%29,SUM%28%272004-1%27%29,SUM%28%272004-2%27%29,SUM%28%272004-3%27%29,SUM%28%272004-4%27%29,SUM%28%272004-5%27%29,SUM%28%272004-6%27%29,SUM%28%272004-7%27%29,SUM%28%272004-8%27%29,SUM%28%272004-9%27%29,SUM%28%272004-10%27%29,SUM%28%272004-11%27%29,SUM%28%272004-12%27%29,SUM%28%272005-1%27%29,SUM%28%272005-2%27%29,SUM%28%272005-3%27%29,SUM%28%272005-4%27%29,SUM%28%272005-5%27%29,SUM%28%272005-6%27%29,SUM%28%272005-7%27%29,SUM%28%272005-8%27%29,SUM%28%272005-9%27%29,SUM%28%272005-10%27%29,SUM%28%272005-11%27%29,SUM%28%272005-12%27%29,SUM%28%272006-1%27%29,SUM%28%272006-2%27%29,SUM%28%272006-3%27%29,SUM%28%272006-4%27%29,SUM%28%272006-5%27%29,SUM%28%272006-6%27%29,SUM%28%272006-7%27%29,SUM%28%272006-8%27%29,SUM%28%272006-9%27%29,SUM%28%272006-10%27%29,SUM%28%272006-11%27%29,SUM%28%272006-12%27%29,SUM%28%272007-1%27%29,SUM%28%272007-2%27%29,SUM%28%272007-3%27%29,SUM%28%272007-4%27%29,SUM%28%272007-5%27%29,SUM%28%272007-6%27%29,SUM%28%272007-7%27%29,SUM%28%272007-8%27%29,SUM%28%272007-9%27%29,SUM%28%272007-10%27%29,SUM%28%272007-11%27%29,SUM%28%272007-12%27%29,SUM%28%272008-1%27%29,SUM%28%272008-2%27%29,SUM%28%272008-3%27%29,SUM%28%272008-4%27%29,SUM%28%272008-5%27%29,SUM%28%272008-6%27%29,SUM%28%272008-7%27%29,SUM%28%272008-8%27%29,SUM%28%272008-9%27%29,SUM%28%272008-10%27%29,SUM%28%272008-11%27%29,SUM%28%272008-12%27%29,SUM%28%272009-1%27%29,SUM%28%272009-2%27%29,SUM%28%272009-3%27%29,SUM%28%272009-4%27%29,SUM%28%272009-5%27%29,SUM%28%272009-6%27%29,SUM%28%272009-7%27%29,SUM%28%272009-8%27%29,SUM%28%272009-9%27%29,SUM%28%272009-10%27%29,SUM%28%272009-11%27%29,SUM%28%272009-12%27%29,SUM%28%272010-1%27%29,SUM%28%272010-2%27%29,SUM%28%272010-3%27%29%20FROM%20202272">Download
CSV</a>


<iframe width='100%' height='300' frameborder='0' src='https://spreadsheets.google.com/pub?key=0AuD5dr31WtX4dE1OZElxUmtJUWdVTDF0MW8zNEluQnc&hl=en&single=true&gid=5&output=html&widget=true'></iframe>


#### Chart ####

After a little reformatting the download history can be seen in a chart.

<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"chartType":"ColumnChart","dataSourceUrl":"//spreadsheets0.google.com/tq?key=0AuD5dr31WtX4dE1OZElxUmtJUWdVTDF0MW8zNEluQnc&range=B1%3ACA2&gid=5&transpose=1&headers=-1&pub=1","options":{"titleY":"","titleX":"","pointSize":7,"colors":["#4684EE","#DC3912","#FF9900","#008000","#666666","#4942CC","#CB4AC5","#D6AE00","#336699","#DD4477","#AAAA11","#66AA00","#888888","#994499","#DD5511","#22AA99","#999999","#705770","#109618","#A32929"],"smoothLine":false,"is3D":false,"lineSize":2,"hasLabelsColumn":true,"title":"Combined Download History","legend":"none","pointSizeOther":7,"reverseAxis":false,"isStacked":false,"width":650,"height":551},"packages":"corechart","refreshInterval":5} </script>


### Usage Breakdown ###
These queries can also be used with the type breakdown tables.

Breakdown by download type tables


<a href="http://tables.googlelabs.com/DataSource?snapid=62324">PLoS ALM v3 05182010 HTML Views</a> ID 202552

<a href="http://tables.googlelabs.com/DataSource?snapid=62524">PLoS ALM v3 05182010 PDF Downloads</a> ID 203967

<a href="http://tables.googlelabs.com/DataSource?snapid=62607">PLoS ALM v3 05182010 XML Downloads</a> ID 203785

<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"chartType":"ColumnChart","dataSourceUrl":"//spreadsheets0.google.com/tq?key=0AuD5dr31WtX4dE1OZElxUmtJUWdVTDF0MW8zNEluQnc&range=A1%3ACA4&gid=3&transpose=1&headers=1&pub=1","options":{"titleY":"","titleX":"","pointSize":7,"colors":["#4684EE","#DC3912","#FF9900","#008000","#666666","#4942CC","#CB4AC5","#D6AE00","#336699","#DD4477","#AAAA11","#66AA00","#888888","#994499","#DD5511","#22AA99","#999999","#705770","#109618","#A32929"],"smoothLine":false,"is3D":false,"lineSize":2,"hasLabelsColumn":true,"title":"Usage History Breakdown","legend":"bottom","pointSizeOther":7,"reverseAxis":false,"isStacked":true,"width":650,"height":551},"packages":"corechart","refreshInterval":5} </script>








#### Top 50 90 Days ####
<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"chartType":"LineChart","chartName":"Chart 3","dataSourceUrl":"//spreadsheets.google.com/tq?key=0AuD5dr31WtX4dDJIWmMyQUlteURvN183c3JyYlo2d1E&range=A1%3AG51&gid=3&transpose=1&headers=1&pub=1","options":{"displayAnnotations":true,"showTip":true,"reverseCategories":false,"dataMode":"markers","maxAlternation":1,"pointSize":"2","colors":["#3366CC","#DC3912","#FF9900","#109618","#990099","#0099C6","#DD4477","#66AA00","#B82E2E","#316395"],"smoothLine":false,"lineWidth":"2","labelPosition":"right","is3D":false,"logScale":true,"hasLabelsColumn":true,"wmode":"opaque","title":"","legend":"none","allowCollapse":true,"pointSizeOther":"2","reverseAxis":false,"mapType":"hybrid","isStacked":false,"width":650,"height":434},"packages":"corechart","refreshInterval":5} </script>


There are several groupings. The most downloaded papers are 10.1371/journal.pbio.1000322 and 10.1371/journal.pone.0009505 which are new this month.  Some have decreased since the previous month such as 10.1371/journal.pone.0009042 and 10.1371/journal.pone.0008733 while others such as 10.1371/journal.pcbi.1000361 and 10.1371/journal.pgen.1000862 have increased.





<!--

<iframe width='100%' height='300' frameborder='0' src='https://spreadsheets.google.com/pub?key=0AuD5dr31WtX4dE1OZElxUmtJUWdVTDF0MW8zNEluQnc&hl=en&single=true&gid=0&output=html&widget=true'></iframe>


-->






## Additional Materials

[All Spreadsheets][gsheet]
[gsheet]: https://docs.google.com/leaf?id=0B-D5dr31WtX4NDdlY2U3ZTAtMmM3MC00MDZkLTkzZTAtMjVjOTFlZmU0Mjlk&hl=en

[All sample files][samplefiles]
[samplefiles]: https://github.com/mchelen/blog.opensci.info/tree/gh-pages/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets

