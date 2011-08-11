--- 
layout: post
title: Visualize PLoS Article Level Metrics with Google Fusion Tables and Spreadsheets
---

## Public Library of Science Article Level Metrics released on Google Fusion Tables

Article citation and usage metrics from the Public Library of Science have been uploaded to Google Fusion Tables. These datasets can now be explored with an SQL-like query language.

A set of [Google Fusion Tables][1] have been released with the [Article Level Metrics] data from all Public Library of Science (PLoS) publications.

[1]: http://blogs.plos.org/plos/2010/07/plos-alm-data-in-google-fusion-tables/
[2]: http://article-level-metrics.plos.org/

The data includes citation totals in the Summary ALM Data table, and monthly download history totals and broken down by file type.

<!--more-->
    
SQL-like queries allow filtering, sorting, aggregating, and more. The table data can be exported as CSV and imported into a Google Spreadsheet. This allows additional operations on the data and charting.
     
There are 5 tables available

* [Summary ALM Data][1]
* [Combined Download Statistics][2]
* [HTML Views][3]
* [PDF Downloads][4]
* [XML Downloads][5]



<img class="mainimage bigimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Summary.ALM.Data.png" />

Web-based Google Fusion Tables view of Summary ALM Data table.

<img class="mainimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.About.Menu.png" />

About Menu

Each table is referenced by an ID number. The ID number can be seen in File -> About

<img class="mainimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Summary.ALM.Data.About.png" />

About Summary ALM Data



[1]: http://tables.googlelabs.com/DataSource?snapid=61925
[2]: http://tables.googlelabs.com/DataSource?snapid=62323
[3]: http://tables.googlelabs.com/DataSource?snapid=62324
[4]: http://tables.googlelabs.com/DataSource?snapid=62524
[5]: http://tables.googlelabs.com/DataSource?snapid=62607



## PLoS ALM
* csv
* citations
* usage
 * page views
 * downloads
            by file type
                pdf
                
## Google Fusion Tables

Large datasets can be freely uploaded and accessed. Both web and API interfaces are available.

GFT has a much higher [CSV upload limit of 100mb][1]. 

Google Spreadsheets can be [up to 20mb but only 400,000 cells][2] and often there are issues with files much [larger than 1mb][3].

[1]: https://code.google.com/p/fusion-tables/issues/detail?id=261#c1
[2]: https://docs.google.com/support/bin/answer.py?answer=37603
[3]: http://www.google.com/support/forum/p/Google%20Docs/thread?tid=3c2751ecad928f8c&hl=en



<!-- start to explain details -->

## Query Language

A range of queries similar to SQL are supported. A SELECT statement is used to pick columns from a table. Additional options include FROM, WHERE, GROUP BY, OFFSET, and LIMIT. See the full <a href="https://code.google.com/apis/fusiontables/docs/developers_reference.html#Select">syntax reference</a>.

To export CSV append the query to this base: 
    http://tables.googlelabs.com/exporttable?query=

Remember to use URL encoding. For example the query

    SELECT * FROM 204244



Would be:

    http://tables.googlelabs.com/exporttable?query=SELECT%20*%20FROM%20204244

Click [Download CSV](http://tables.googlelabs.com/exporttable?query=SELECT%20*%20FROM%20204244) to download the output of a query.

## Google Spreadsheets

The CSV output can be loaded in many applications such as Google Spreadsheets. By using the importData() function we can adjust the query and the spreadsheet will automatically update.


For example, to select the first 10 results of the Summary ALM Data table:
    =importData("http://tables.googlelabs.com/exporttable?query=SELECT * FROM 204244 LIMIT 10")

<iframe src="http://spreadsheets.google.com/pub?key=tw6F5r-M_VQ2aM82w1vN3sg&amp;single=true&amp;gid=0&amp;output=html&amp;widget=true" frameborder="0" height="300" width="100%"></iframe>


## Summary ALM Data
The Summary ALM Data table includes basic information and citation counts for each article. The columns are DOI, URL, Publication Date, Publication Year, Journal, Article Title, Citations, and Downloads. 

<a href="http://tables.googlelabs.com/DataSource?snapid=61925">PLoS ALM v3 05182010 Summary ALM Data</a> ID: 204244


### Select

Complete Summary table. <a href="http://tables.googlelabs.com/exporttable?query=SELECT%20*%20FROM%20204244">Download CSV</a>


{% highlight sql %}
SELECT * FROM 204244
{% endhighlight %}

[Summary.Complete.Table.gft.sql](/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Summary.Complete.Table.gft.sql)




<h3>Limit

</h3>

Limit results to make sure they fit on a spreadsheet because Google Docs only supports import up to 500kb. <a href="http://tables.googlelabs.com/exporttable?query=SELECT%20*%20FROM%20204244%20LIMIT%2010">Download CSV</a>



{% highlight sql %}
SELECT * FROM 204244 LIMIT 10
{% endhighlight %}


<h3>Columns

</h3>

Choose which columns to include. Surround column names with single parenthesis for example such as for the Article Title column. <a href="http://tables.googlelabs.com/exporttable?query=SELECT%20%27Article%20Title%27,DOI,URL%20FROM%20204244%20LIMIT%2010">Download CSV</a>

{% highlight sql %}
SELECT 'Article Title',DOI,URL FROM 204244 LIMIT 10
{% endhighlight %}

<iframe src="http://spreadsheets.google.com/pub?key=tw6F5r-M_VQ2aM82w1vN3sg&amp;single=true&amp;gid=2&amp;output=html&amp;widget=true" frameborder="0" height="300" width="100%"></iframe>





<h3>Sort</h3>
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


<h3>Special Characters</h3>
Besides using quotation marks special characters in column names can be escaped with backslash. This is needed when a column name itself contains a quotation mark.


{% highlight sql %}
SELECT '\'Research Article\' or \'non-Research Article\'?' FROM 204244 LIMIT 10
{% endhighlight %}

<h3>Column Reference</h3>

It may be easier to reference columns by number instead of using their names. <a href="http://tables.googlelabs.com/exporttable?query=SELECT%20col1,col2%20FROM%20204244%20LIMIT%2010">Download CSV</a>

{% highlight sql %}
SELECT col1,col2 FROM 204244 LIMIT 10
{% endhighlight %}



<h2>Combined
Download Statistics

</h2>
<a href="http://tables.googlelabs.com/DataSource?snapid=62323">PLoS ALM v3 05182010 Combined Download Statistics</a> ID 202272







<h3>Sort</h3>
Sort by the 2010-3 column to find papers with the most recent downloads. <a href="http://tables.googlelabs.com/exporttable?query=SELECT%20*%20FROM%20202272%20ORDER%20BY%20%272010-3%27%20DESC%20LIMIT%2010">Download CSV</a>

{% highlight sql %}
SELECT * FROM 202272 ORDER BY '2010-3' DESC LIMIT 10
{% endhighlight %}

<iframe src="http://spreadsheets.google.com/pub?key=0AuD5dr31WtX4dDJIWmMyQUlteURvN183c3JyYlo2d1E&amp;single=true&amp;gid=0&amp;output=html&amp;widget=true" frameborder="0" height="300" width="100%"></iframe>
<h3>Yearly Summary</h3>

Download totals over the past year:



{% highlight sql %}
SELECT SUM('2009-3'),SUM('2009-4'),SUM('2009-5'),SUM('2009-6'),SUM('2009-7'),SUM('2009-8'),SUM('2009-9'),SUM('2009-10'),SUM('2009-11'),SUM('2009-12'),SUM('2010-1'),SUM('2010-2'),SUM('2010-3') FROM 202272
{% endhighlight %}


<a href="http://tables.googlelabs.com/exporttable?query=SELECT%20SUM%28%272009-3%27%29,SUM%28%272009-4%27%29,SUM%28%272009-5%27%29,SUM%28%272009-6%27%29,SUM%28%272009-7%27%29,SUM%28%272009-8%27%29,SUM%28%272009-9%27%29,SUM%28%272009-10%27%29,SUM%28%272009-11%27%29,SUM%28%272009-12%27%29,SUM%28%272010-1%27%29,SUM%28%272010-2%27%29,SUM%28%272010-3%27%29%20FROM%20202272">Download CSV</a>




<h3>Combined download sum history</h3>
{% highlight sql %}
SELECT SUM('2003-10'),SUM('2003-11'),SUM('2003-12'),SUM('2004-1'),SUM('2004-2'),SUM('2004-3'),SUM('2004-4'),SUM('2004-5'),SUM('2004-6'),SUM('2004-7'),SUM('2004-8'),SUM('2004-9'),SUM('2004-10'),SUM('2004-11'),SUM('2004-12'),SUM('2005-1'),SUM('2005-2'),SUM('2005-3'),SUM('2005-4'),SUM('2005-5'),SUM('2005-6'),SUM('2005-7'),SUM('2005-8'),SUM('2005-9'),SUM('2005-10'),SUM('2005-11'),SUM('2005-12'),SUM('2006-1'),SUM('2006-2'),SUM('2006-3'),SUM('2006-4'),SUM('2006-5'),SUM('2006-6'),SUM('2006-7'),SUM('2006-8'),SUM('2006-9'),SUM('2006-10'),SUM('2006-11'),SUM('2006-12'),SUM('2007-1'),SUM('2007-2'),SUM('2007-3'),SUM('2007-4'),SUM('2007-5'),SUM('2007-6'),SUM('2007-7'),SUM('2007-8'),SUM('2007-9'),SUM('2007-10'),SUM('2007-11'),SUM('2007-12'),SUM('2008-1'),SUM('2008-2'),SUM('2008-3'),SUM('2008-4'),SUM('2008-5'),SUM('2008-6'),SUM('2008-7'),SUM('2008-8'),SUM('2008-9'),SUM('2008-10'),SUM('2008-11'),SUM('2008-12'),SUM('2009-1'),SUM('2009-2'),SUM('2009-3'),SUM('2009-4'),SUM('2009-5'),SUM('2009-6'),SUM('2009-7'),SUM('2009-8'),SUM('2009-9'),SUM('2009-10'),SUM('2009-11'),SUM('2009-12'),SUM('2010-1'),SUM('2010-2'),SUM('2010-3') FROM 202272
{% endhighlight %}

<a href="http://tables.googlelabs.com/exporttable?query=SELECT%20SUM%28%272003-10%27%29,SUM%28%272003-11%27%29,SUM%28%272003-12%27%29,SUM%28%272004-1%27%29,SUM%28%272004-2%27%29,SUM%28%272004-3%27%29,SUM%28%272004-4%27%29,SUM%28%272004-5%27%29,SUM%28%272004-6%27%29,SUM%28%272004-7%27%29,SUM%28%272004-8%27%29,SUM%28%272004-9%27%29,SUM%28%272004-10%27%29,SUM%28%272004-11%27%29,SUM%28%272004-12%27%29,SUM%28%272005-1%27%29,SUM%28%272005-2%27%29,SUM%28%272005-3%27%29,SUM%28%272005-4%27%29,SUM%28%272005-5%27%29,SUM%28%272005-6%27%29,SUM%28%272005-7%27%29,SUM%28%272005-8%27%29,SUM%28%272005-9%27%29,SUM%28%272005-10%27%29,SUM%28%272005-11%27%29,SUM%28%272005-12%27%29,SUM%28%272006-1%27%29,SUM%28%272006-2%27%29,SUM%28%272006-3%27%29,SUM%28%272006-4%27%29,SUM%28%272006-5%27%29,SUM%28%272006-6%27%29,SUM%28%272006-7%27%29,SUM%28%272006-8%27%29,SUM%28%272006-9%27%29,SUM%28%272006-10%27%29,SUM%28%272006-11%27%29,SUM%28%272006-12%27%29,SUM%28%272007-1%27%29,SUM%28%272007-2%27%29,SUM%28%272007-3%27%29,SUM%28%272007-4%27%29,SUM%28%272007-5%27%29,SUM%28%272007-6%27%29,SUM%28%272007-7%27%29,SUM%28%272007-8%27%29,SUM%28%272007-9%27%29,SUM%28%272007-10%27%29,SUM%28%272007-11%27%29,SUM%28%272007-12%27%29,SUM%28%272008-1%27%29,SUM%28%272008-2%27%29,SUM%28%272008-3%27%29,SUM%28%272008-4%27%29,SUM%28%272008-5%27%29,SUM%28%272008-6%27%29,SUM%28%272008-7%27%29,SUM%28%272008-8%27%29,SUM%28%272008-9%27%29,SUM%28%272008-10%27%29,SUM%28%272008-11%27%29,SUM%28%272008-12%27%29,SUM%28%272009-1%27%29,SUM%28%272009-2%27%29,SUM%28%272009-3%27%29,SUM%28%272009-4%27%29,SUM%28%272009-5%27%29,SUM%28%272009-6%27%29,SUM%28%272009-7%27%29,SUM%28%272009-8%27%29,SUM%28%272009-9%27%29,SUM%28%272009-10%27%29,SUM%28%272009-11%27%29,SUM%28%272009-12%27%29,SUM%28%272010-1%27%29,SUM%28%272010-2%27%29,SUM%28%272010-3%27%29%20FROM%20202272">Download
CSV</a>


<iframe width='100%' height='300' frameborder='0' src='https://spreadsheets.google.com/pub?key=0AuD5dr31WtX4dE1OZElxUmtJUWdVTDF0MW8zNEluQnc&hl=en&single=true&gid=5&output=html&widget=true'></iframe>


After a little reformatting the download history can be seen in a chart.

<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"chartType":"ColumnChart","dataSourceUrl":"//spreadsheets0.google.com/tq?key=0AuD5dr31WtX4dE1OZElxUmtJUWdVTDF0MW8zNEluQnc&range=B1%3ACA2&gid=5&transpose=1&headers=-1&pub=1","options":{"titleY":"","titleX":"","pointSize":7,"colors":["#4684EE","#DC3912","#FF9900","#008000","#666666","#4942CC","#CB4AC5","#D6AE00","#336699","#DD4477","#AAAA11","#66AA00","#888888","#994499","#DD5511","#22AA99","#999999","#705770","#109618","#A32929"],"smoothLine":false,"is3D":false,"lineSize":2,"hasLabelsColumn":true,"title":"Combined Download History","legend":"none","pointSizeOther":7,"reverseAxis":false,"isStacked":false,"width":650,"height":551},"packages":"corechart","refreshInterval":5} </script>



These queries can also be used with the type breakdown tables.




Breakdown by download type tables


<a href="http://tables.googlelabs.com/DataSource?snapid=62324">PLoS ALM v3 05182010 HTML Views</a> ID 202552

<a href="http://tables.googlelabs.com/DataSource?snapid=62524">PLoS ALM v3 05182010 PDF Downloads</a> ID 203967

<a href="http://tables.googlelabs.com/DataSource?snapid=62607">PLoS ALM v3 05182010 XML Downloads</a> ID 203785

<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"chartType":"ColumnChart","dataSourceUrl":"//spreadsheets0.google.com/tq?key=0AuD5dr31WtX4dE1OZElxUmtJUWdVTDF0MW8zNEluQnc&range=A1%3ACA4&gid=3&transpose=1&headers=1&pub=1","options":{"titleY":"","titleX":"","pointSize":7,"colors":["#4684EE","#DC3912","#FF9900","#008000","#666666","#4942CC","#CB4AC5","#D6AE00","#336699","#DD4477","#AAAA11","#66AA00","#888888","#994499","#DD5511","#22AA99","#999999","#705770","#109618","#A32929"],"smoothLine":false,"is3D":false,"lineSize":2,"hasLabelsColumn":true,"title":"Usage History Breakdown","legend":"bottom","pointSizeOther":7,"reverseAxis":false,"isStacked":true,"width":650,"height":551},"packages":"corechart","refreshInterval":5} </script>








<h3>Top 50 90 Days</h3>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"chartType":"LineChart","chartName":"Chart 3","dataSourceUrl":"//spreadsheets.google.com/tq?key=0AuD5dr31WtX4dDJIWmMyQUlteURvN183c3JyYlo2d1E&range=A1%3AG51&gid=3&transpose=1&headers=1&pub=1","options":{"displayAnnotations":true,"showTip":true,"reverseCategories":false,"dataMode":"markers","maxAlternation":1,"pointSize":"2","colors":["#3366CC","#DC3912","#FF9900","#109618","#990099","#0099C6","#DD4477","#66AA00","#B82E2E","#316395"],"smoothLine":false,"lineWidth":"2","labelPosition":"right","is3D":false,"logScale":true,"hasLabelsColumn":true,"wmode":"opaque","title":"","legend":"none","allowCollapse":true,"pointSizeOther":"2","reverseAxis":false,"mapType":"hybrid","isStacked":false,"width":650,"height":434},"packages":"corechart","refreshInterval":5} </script>


There are several groupings. The most downloaded papers are 10.1371/journal.pbio.1000322 and 10.1371/journal.pone.0009505 which are new this month.  Some have decreased since the previous month such as 10.1371/journal.pone.0009042 and 10.1371/journal.pone.0008733 while others such as 10.1371/journal.pcbi.1000361 and 10.1371/journal.pgen.1000862 have increased.






<iframe width='100%' height='300' frameborder='0' src='https://spreadsheets.google.com/pub?key=0AuD5dr31WtX4dE1OZElxUmtJUWdVTDF0MW8zNEluQnc&hl=en&single=true&gid=0&output=html&widget=true'></iframe>






<a href="https://docs.google.com/leaf?id=0B-D5dr31WtX4NDdlY2U3ZTAtMmM3MC00MDZkLTkzZTAtMjVjOTFlZmU0Mjlk&hl=en">All Spreadsheets</a>




<a href="https://gist.github.com/617850">All sample files</a>
