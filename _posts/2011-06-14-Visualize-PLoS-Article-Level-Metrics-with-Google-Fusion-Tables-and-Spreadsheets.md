--- 
layout: post
title: Visualize PLoS Article Level Metrics with Google Fusion Tables and Spreadsheets
permalink: /0aee/Visualize-PLoS-Article-Level-Metrics-Google-Fusion-Tables-Spreadsheets
uuid: 777dd893-0aee-4395-9802-63b9b0a50634
shortid: 0aee
published: true
redirect_from:
  - /0aee/
  - /2011/06/14/Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/
---

## Introduction ##

### Article Level Metrics ###

<a href="https://docs.google.com/spreadsheet/pub?key=0AuD5dr31WtX4dE1OZElxUmtJUWdVTDF0MW8zNEluQnc&gid=4"><img class="mainimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Download.History.Breakdown.Chart.png" alt="ALM data can be used to track article downloads over time."/></a>


The [Public Library of Science][plos] collects information for each article they publish. These metrics include citations, downloads, web page views, and community responses. The data is available in an [Excel XLS file][almxls] on the PLoS [Article Level Metrics][plosalm] site. Now the metric information has also been uploaded [uploaded][plosblog] to [Google Fusion Tables][gft], a free service for sharing data.

[plos]: http://www.plos.org
[plosblog]: http://blogs.plos.org/plos/2010/07/plos-alm-data-in-google-fusion-tables/
[almxls]: http://www.plosone.org/static/plos-alm.zip
[plosalm]: http://article-level-metrics.plos.org/
[gft]: http://www.google.com/fusiontables/Home


<!-- more -->


* Table of Contents
{:toc}


The metric information is divided into 5 tables:

* [Summary ALM Data][summary]
* [Combined Download Statistics][combined]
* [HTML Views][html]
* [PDF Downloads][pdf]
* [XML Downloads][xml]
 

[summary]: http://tables.googlelabs.com/DataSource?snapid=61925
[combined]: http://tables.googlelabs.com/DataSource?snapid=62323
[html]: http://tables.googlelabs.com/DataSource?snapid=62324
[pdf]: http://tables.googlelabs.com/DataSource?snapid=62524
[xml]: http://tables.googlelabs.com/DataSource?snapid=62607

### Google Fusion Tables ###

[Google Fusion Tables][gft] is a public data storage service that can be accessed through both a web browser and an API. Large datasets [up to 100mb][gftlimit] can be uploaded, unlike other online spreadsheets which allow [only 20 mb][gsheetlimit]. The [Google Fusion Tables API][gftapi] provides an SQL-like query language that allows sorting, grouping, and other queries. The query results can be exported in common formats such as CSV for use in other visualization tools including [Google Spreadsheets][gdocs].

[gdocs]: https://docs.google.com
[gftapi]: https://code.google.com/apis/fusiontables/
[gftlimit]: https://code.google.com/p/fusion-tables/issues/detail?id=261#c1
[gsheetlimit]: https://support.google.com/docs/bin/answer.py?hl=en&answer=37603


### Web Based View ###
Each dataset on Google Fusion Tables can be viewed through the web browser. The first 100 rows and several columns are shown, with each column sortable. The menu system allows additional operations such as filtering, aggregating, and visualizing.


## Summary ALM Data ##

The [Summary ALM Data][summary] table contains basic information about each article such as the article title, the journal it was published in, and the publication date. The metric information consists of citation counts, number of downloads, and community responses. The citation counts are from CrossRef, PubMed Central, and Scopus. Usage metrics are based on website page accesses and downloads: HTML page views, PDF downloads, and XML downloads. Community reactions are a measurement of coverage in specific blogs such as Postgenomic and Nature Blogs, along with all Trackbacks, and Social Bookmarks from CiteULike and Connotea.

The [Summary ALM Data table][summary] can be browsed through the web based view.
<a href="http://www.google.com/fusiontables/DataSource?snapid=61925"><img class="mainimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Summary.ALM.Data.png" /></a>


### Sort ###

Sort any column by clicking on column title. Results can be sorted in ascending or descending order.
<a href="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Sort.Menu.png"><img class="mainimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Sort.Menu.png" /></a>

Sorting by Publication Date in descending order shows the most recent articles.
<a href="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Sort.Results.png"><img class="mainimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Sort.Results.png" /></a>

### Filter ###
The filter option allows matching for certain values. 
<a href="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Filter.Menu.png"><img class="mainimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Filter.Menu.png" /></a>

Select a column to match, an operator such as equal, greater than, or less than, and the value to match.
<a href="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Filter.Options.png"><img class="mainimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Filter.Options.png" /></a>
Filter for a Publication Year equal to 2005 to show only articles published in that year.
<a href="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Filter.Results.png"><img class="mainimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Filter.Results.png" /></a>


### Aggregate ###

Aggregate performs operations across all rows of a column. The functions available include Sum, Average, Maximum, Minimum, and Count.
The results can also be grouped together by a particular column.

<a href="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Aggregate.Menu.png"><img class="mainimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Aggregate.Menu.png" /></a>


To look at the total number of citations, pick the Sum for each type of citation. Then group the results by Journal.
<a href="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Aggregate.Options.png"><img class="mainimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Aggregate.Options.png" /></a>

The citations are then totaled for each Journal.
<a href="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Aggregate.Results.png"><img class="mainimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.Aggregate.Results.png" /></a>

### Visualize ###


### Table ID ###
<br clear="all" />
<img class="mainimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Google.Fusion.Tables.About.Menu.png" style="width:150px;float:left;"/>
Every table is referenced by an ID number. The ID number can be seen in File -> About.
<br clear="all"/>

The ID number for the [Summary ALM Data table][summary] is `204244`. This number will be used in API calls that reference the table.
<img class="mainimage" src="/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets/Summary.ALM.Data.About.png" />


## Google Fusion Tables API ##

The [Google Fusion Tables API] [gftapi] supports a range of queries similar to SQL. Some of the query statments available include `SELECT`, `LIMIT`, and `SORT`. See the [syntax reference][gftdev] for a full list of commands.

[gftdev]: https://code.google.com/apis/fusiontables/docs/developers_reference.html

### Select ###
A `SELECT` statement is used to choose the desired columns from a table. Options include `FROM`, `WHERE`, `GROUP BY`, `OFFSET`, and `LIMIT`.

Use an asterisk `*` to select all the columns from the [Summary ALM Data table][summary] which is identified with its ID number.

{% highlight sql %}
SELECT * FROM 204244
{% endhighlight %}


### Limit Results ###

Use the `LIMIT` option to restrict the number of rows returned by any query. This makes the query results easier to work with in other programs such as Google Docs, which can only import up to 500kb of data.
For example, to select the first 10 results of the [Summary ALM Data table][summary].

{% highlight sql %}
SELECT * FROM 204244 LIMIT 10
{% endhighlight %}
*[Example Spreadsheet](https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AuD5dr31WtX4dHc2RjVyLU1fVlEyYU04Mncxdk4zc2c&gid=0&output=html)* - *[Download CSV](https://www.google.com/fusiontables/exporttable?query=SELECT * FROM 204244 LIMIT 10)*

### Export CSV ###

Results can be exported in CSV format by adding the query on to a base URL.

    https://www.google.com/fusiontables/exporttable?query=
    
For example,

    https://www.google.com/fusiontables/exporttable?query=SELECT * FROM 204244 LIMIT 10
    Use URL encoding if needed.

### Google Spreadsheets ###

The CSV output can be loaded into other applications such as Google Spreadsheets. The `importData()` function imports the results of the query and the spreadsheet will automatically keep it updated.

To import the query results CSV and display it in an [Example Spreadsheet](https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AuD5dr31WtX4dHc2RjVyLU1fVlEyYU04Mncxdk4zc2c&gid=0&output=html) ([edit](https://docs.google.com/spreadsheet/ccc?key=0AuD5dr31WtX4dHc2RjVyLU1fVlEyYU04Mncxdk4zc2c&hl=en_US#gid=0)):

    =importData("https://www.google.com/fusiontables/exporttable?query=SELECT * FROM 204244 LIMIT 10")


<iframe src="http://spreadsheets.google.com/pub?key=tw6F5r-M_VQ2aM82w1vN3sg&amp;single=true&amp;gid=0&amp;output=html&amp;widget=true" frameborder="0" height="300" width="100%"></iframe>


### Columns ###

The number of columns can be limited, like the number of rows. The needed columns can be selected by their names. Separate multiple names by commas. Surround column names with single parentheses `'` if the name contains any special characters such as spaces.


{% highlight sql %}
SELECT 'Article Title',DOI,URL,'Publication Year','Citations - CrossRef' FROM 204244 LIMIT 10
{% endhighlight %}
*[Example Spreadsheet](https://spreadsheets.google.com/spreadsheet/pub?key=0AuD5dr31WtX4dHc2RjVyLU1fVlEyYU04Mncxdk4zc2c&gid=2)*


### Sort ###
Results can be sorted by any column using the `ORDER BY` option. The sort column must also be included in the `SELECT` statement. For example, to sort by the number of CrossRef citations with highest first:

{% highlight sql %}
SELECT 'Article Title',DOI,URL,'Publication Year','Citations - CrossRef' FROM 204244 ORDER BY 'Citations - CrossRef' DESC LIMIT 10
{% endhighlight %}
*[Example Spreadsheet](https://spreadsheets.google.com/spreadsheet/pub?key=0AuD5dr31WtX4dHc2RjVyLU1fVlEyYU04Mncxdk4zc2c&gid=3)*


### Filter ###

Filter the results to match some value with the `WHERE` option. For example, only articles that were published in 2009:

{% highlight sql %}
SELECT 'Article Title',DOI,URL,'Publication Year','Citations - CrossRef', FROM 204244 WHERE 'Publication Year' = 2009 ORDER BY 'Citations - CrossRef' DESC LIMIT 10
{% endhighlight %}
*[Example Spreadsheet](https://spreadsheets.google.com/spreadsheet/pub?key=0AuD5dr31WtX4dHc2RjVyLU1fVlEyYU04Mncxdk4zc2c&gid=4)*


### Special Characters ###
Quotation marks in a column name can be escaped with backslashes.

To select the `'Research Article' or 'non-Research Article'?` column:

{% highlight sql %}
SELECT 'Article Title','\'Research Article\' or \'non-Research Article\'?' FROM 204244 LIMIT 10
{% endhighlight %}
*[Example Spreadsheet](https://docs.google.com/spreadsheet/pub?key=0AuD5dr31WtX4dHc2RjVyLU1fVlEyYU04Mncxdk4zc2c&gid=5&output=html)*

### Column Reference ###

The columns can also be referenced by number instead of names. The first column is `col0`, the next `col1`, and so on. To select the first 3 columns:

{% highlight sql %}
SELECT col0,col1,col2 FROM 204244 LIMIT 10
{% endhighlight %}
*[Example Spreadsheet](https://docs.google.com/spreadsheet/pub?key=0AuD5dr31WtX4dHc2RjVyLU1fVlEyYU04Mncxdk4zc2c&gid=6&output=html)*


## Combined Download Statistics ##
[Combined Download Statistics][combined] shows the number of times each article was downloaded during a particular month. The download totals are also available separated by file type, in the [HTML][html], [PDF][pdf], and [XML][xml] tables. 

### Sort ###
Sort by the `2010-3` column to show the articles that had the most downloads in March 2010.

{% highlight sql %}
SELECT doi,'2010-3' FROM 202272 ORDER BY '2010-3' DESC LIMIT 10
{% endhighlight %}

*[Example Spreadsheet](https://spreadsheets.google.com/pub?key=0AuD5dr31WtX4dDJIWmMyQUlteURvN183c3JyYlo2d1E&gid=0&output=html)*

### Total Monthly Download ###

Use the `SUM()` function to add up the downloads for every article in a given month. To find the total downloads in January, 2010:

{% highlight sql %}
SELECT SUM('2010-1') FROM 202272
{% endhighlight %}


### Combined Download History ###
The complete history of downloads can be seen by summing all of the available columns.
{% highlight sql %}
SELECT SUM('2003-10'),SUM('2003-11'),SUM('2003-12'),SUM('2004-1'),SUM('2004-2'),SUM('2004-3'),SUM('2004-4'),SUM('2004-5'),SUM('2004-6'),SUM('2004-7'),SUM('2004-8'),SUM('2004-9'),SUM('2004-10'),SUM('2004-11'),SUM('2004-12'),SUM('2005-1'),SUM('2005-2'),SUM('2005-3'),SUM('2005-4'),SUM('2005-5'),SUM('2005-6'),SUM('2005-7'),SUM('2005-8'),SUM('2005-9'),SUM('2005-10'),SUM('2005-11'),SUM('2005-12'),SUM('2006-1'),SUM('2006-2'),SUM('2006-3'),SUM('2006-4'),SUM('2006-5'),SUM('2006-6'),SUM('2006-7'),SUM('2006-8'),SUM('2006-9'),SUM('2006-10'),SUM('2006-11'),SUM('2006-12'),SUM('2007-1'),SUM('2007-2'),SUM('2007-3'),SUM('2007-4'),SUM('2007-5'),SUM('2007-6'),SUM('2007-7'),SUM('2007-8'),SUM('2007-9'),SUM('2007-10'),SUM('2007-11'),SUM('2007-12'),SUM('2008-1'),SUM('2008-2'),SUM('2008-3'),SUM('2008-4'),SUM('2008-5'),SUM('2008-6'),SUM('2008-7'),SUM('2008-8'),SUM('2008-9'),SUM('2008-10'),SUM('2008-11'),SUM('2008-12'),SUM('2009-1'),SUM('2009-2'),SUM('2009-3'),SUM('2009-4'),SUM('2009-5'),SUM('2009-6'),SUM('2009-7'),SUM('2009-8'),SUM('2009-9'),SUM('2009-10'),SUM('2009-11'),SUM('2009-12'),SUM('2010-1'),SUM('2010-2'),SUM('2010-3') FROM 202272
{% endhighlight %}


*[Example Spreadsheet](https://spreadsheets.google.com/pub?key=0AuD5dr31WtX4dE1OZElxUmtJUWdVTDF0MW8zNEluQnc&hl=en&gid=5&output=html)*


### Chart ###

The history of download volume can be plotted over multiple months. This chart shows the increase in downloads over time, with various peaks such as in January 2007, and troughs such as in April 2009.

<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"dataSourceUrl":"//docs.google.com/spreadsheet/tq?key=0AuD5dr31WtX4dE1OZElxUmtJUWdVTDF0MW8zNEluQnc&transpose=1&headers=0&range=B1%3ACA2&gid=5&pub=1","options":{"vAxes":[{"title":"","useFormatFromData":false,"formatOptions":{"source":"inline","scaleFactor":null},"minValue":null,"viewWindowMode":"pretty","format":"0.##","logScale":false,"viewWindow":{"min":null,"max":null},"maxValue":null},{"useFormatFromData":true,"viewWindowMode":"pretty","viewWindow":{}}],"series":{"0":{"pointSize":0,"targetAxisIndex":1,"lineWidth":2}},"title":"Combined Download History","booleanRole":"certainty","animation":{"duration":500},"legend":"none","useFirstColumnAsDomain":true,"hAxis":{"useFormatFromData":true},"isStacked":false,"width":"100%","height":483},"state":{},"chartType":"AreaChart"} </script>


### Breakdown by Download Type ###
In addition to the total download counts, there is also a download history for each type of file format: HTML, PDF, and XML. The same query can be used again with these file type breakdown tables to compare the downloads of each file type.


Table IDs:
<a href="http://tables.googlelabs.com/DataSource?snapid=62324">HTML</a> `202552`
<a href="http://tables.googlelabs.com/DataSource?snapid=62524">PDF</a> `203967`
<a href="http://tables.googlelabs.com/DataSource?snapid=62607">XML</a> `203785`

*[Example Spreadsheet](https://spreadsheets.google.com/spreadsheet/pub?hl=en&key=0AuD5dr31WtX4dE1OZElxUmtJUWdVTDF0MW8zNEluQnc&hl=en&gid=3)*

Plotting the different file type histories together in a chart allows a comparison of their usage. This chart shows that HTML downloads have grown the quickest, and while PDF downloads have also increased, XML downloads peaked around 2008 and have since declined.

<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"dataSourceUrl":"//docs.google.com/spreadsheet/tq?key=0AuD5dr31WtX4dE1OZElxUmtJUWdVTDF0MW8zNEluQnc&transpose=1&headers=1&range=A1%3ACA4&gid=3&pub=1","options":{"vAxes":[{"title":"","useFormatFromData":true,"minValue":null,"viewWindowMode":"pretty","viewWindow":{"min":null,"max":null},"maxValue":null},{"useFormatFromData":true,"viewWindowMode":"pretty","viewWindow":{}}],"series":{"2":{"targetAxisIndex":1},"1":{"targetAxisIndex":1},"0":{"targetAxisIndex":1}},"booleanRole":"certainty","title":"Download History Breakdown","animation":{"duration":500},"legend":"in","useFirstColumnAsDomain":true,"hAxis":{"useFormatFromData":true},"isStacked":false,"width":"100%","height":483},"state":{},"chartType":"AreaChart"} </script>




#### Top 10 Articles 6 Month History ####
In addition to the overall download trends, the metric data includes usage history for individual articles. By selecting articles with the highest usage in the most recent month, 

{% highlight sql %}
SELECT doi,'2010-3' FROM 202272 ORDER BY '2010-3' DESC LIMIT 10
{% endhighlight %}

<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"dataSourceUrl":"//docs.google.com/spreadsheet/tq?key=0AuD5dr31WtX4dDJIWmMyQUlteURvN183c3JyYlo2d1E&transpose=1&headers=1&range=A1%3AG11&gid=3&pub=1","options":{"titleTextStyle":{"bold":true,"color":"#000","fontSize":"14"},"series":{"3":{"pointSize":4,"lineWidth":3},"2":{"pointSize":4,"lineWidth":3},"1":{"pointSize":4,"lineWidth":3},"0":{"pointSize":4,"lineWidth":3},"7":{"pointSize":4,"lineWidth":3},"6":{"pointSize":4,"lineWidth":3},"5":{"pointSize":4,"lineWidth":3},"4":{"pointSize":4,"lineWidth":3},"9":{"pointSize":4,"lineWidth":3},"8":{"pointSize":4,"lineWidth":3}},"curveType":"","animation":{"duration":500},"width":"100%","lineWidth":2,"hAxis":{"useFormatFromData":true,"viewWindowMode":"pretty","viewWindow":{}},"vAxes":[{"useFormatFromData":true,"title":"Combined Downloads","viewWindowMode":"pretty","viewWindow":{}},{"useFormatFromData":true,"viewWindowMode":"pretty","viewWindow":{}}],"booleanRole":"certainty","title":"Top 10 Article History","height":483,"interpolateNulls":false,"legend":"none"},"state":{},"chartType":"LineChart","chartName":"Chart 1"} </script>

There are several groupings. The most downloaded papers are 10.1371/journal.pbio.1000322 and 10.1371/journal.pone.0009505 which are new this month.  Some have decreased since the previous month such as 10.1371/journal.pone.0009042 and 10.1371/journal.pone.0008733 while others such as 10.1371/journal.pcbi.1000361 and 10.1371/journal.pgen.1000862 have increased.





<!--

<iframe width='100%' height='300' frameborder='0' src='https://spreadsheets.google.com/pub?key=0AuD5dr31WtX4dE1OZElxUmtJUWdVTDF0MW8zNEluQnc&hl=en&gid=0&output=html&widget=true'></iframe>


-->






## Additional Materials ##

[All Spreadsheets][gsheet]
[gsheet]: https://docs.google.com/leaf?id=0B-D5dr31WtX4NDdlY2U3ZTAtMmM3MC00MDZkLTkzZTAtMjVjOTFlZmU0Mjlk&hl=en

[All sample files][samplefiles]
[samplefiles]: https://github.com/mchelen/blog.opensci.info/tree/gh-pages/file/2011-06-14-Visualize-PLoS-Article-Level-Metrics-with-Google-Fusion-Tables-and-Spreadsheets


## Data Updated ##

An updated version of this ALM data is now also available on Google Fusion Tables, [PLoS Article Level Metrics on Google Fusion Tables Updated to V4][plosalmv4].

[plosalmv4]: /2011/08/14/PLoS-Article-Level-Metrics-on-Google-Fusion-Tables-Updated-to-V4/

