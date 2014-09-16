--- 
layout: post
title: PLoS ALM Interactive Charts with Google Fusion Tables
permalink: /b86c/PLoS-ALM-Interactive-Charts-Google-Fusion-Tables
uuid: 769a9bc2-b86c-11e2-8b71-6c626d8ab8fe
shortid: b86c
redirect_from: /b86c/
published: true
comments: true
---

In the [previous part][part1] we made a chart showing PLoS ALM data using the Javascript Google Charts API.


[The chart][oldchart] allowed some basic interaction. For example, we could hover the mouse on a column and see the exact number of citations and the full title of the article.

However the user had no control over which year to view, or which citations to use. Although they could see the article name, there was no way to click and read the full article.

In this article, we will learn how to let the user select parameters of the data query, and include formatting so the user can read the full article.

[part1]: /7230/
[oldchart]: /file/7230/columnChart.html



[test4.html][]


[test4.html]: /file/{{ page.shortid }}/test4.html

 - [foo](/file/{{ page.shortid }}/test5.html)
 - [foo1](/file/{{ page.shortid }}/test6.html)
 - [foo2](/file/{{ page.shortid }}/test7.html)
 - [foo3](/file/{{ page.shortid }}/test8.html)
 - [foo4](/file/{{ page.shortid }}/test9.html)
 - [foo5](/file/{{ page.shortid }}/test10.html)


<!-- more -->


Google provides an [example visualization][example] that includes user input. Copy this code into a new HTML file. There are two sections we need to modify.

The first is the beginning of the Javascript `drawTable()` function which includes the actual query. It forms the query using a variable gets modified by the user.

The second part is the HTML form which provides an interface so the user can select the desired variable value. 

When the form is changed it calls the `drawTable()` function which reads the input value from the form.

[example]: https://developers.google.com/fusiontables/docs/samples/gviz_datatable

We will reuse the query from the [previous article][part1]. It selects three types of citation counts for articles published in 2013 and then sorts by the highest `crossref` citations.  

{% highlight sql %}
SELECT title, crossref, scopus, pubmed FROM 1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW WHERE publication_date >= '2013-01-01' AND publication_date < '2014-01-01' ORDER BY crossref desc LIMIT 10
{% endhighlight %}

Our custom query can be adapted into the sample code.

> Sample code builds query and then appends user input.
{% highlight javascript %}
function drawTable() {
  var query = "SELECT 'Scoring Team' as Scoring, " +
      "'Receiving Team' as Receiving, 'Minute of goal' as Minute " +
      'FROM 1VlPiBCkYt_Vio-JT3UwM-U__APurJvPb6ZEJPg';
  var team = document.getElementById('team').value;
  if (team) {
    query += " WHERE 'Scoring Team' = '" + team + "'";
  }
{% endhighlight %}

We will let the user select the `citation` type used in the `ORDER BY` clause by replacing `team` from the example. 

> The query now contains our custom query plus the user input. 
{% highlight javascript %}
function drawTable() {
  var query = "SELECT title, crossref, scopus, pubmed FROM 1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW WHERE publication_date >= '2013-01-01' AND publication_date < '2014-01-01'";
  var citation = document.getElementById('citation').value;
  if (citation) {
    query += " ORDER BY " + citation + " desc LIMIT 10";
  }
{% endhighlight %}

After changing the query and Javascript variables, we have to change the HTML for user input.

{% highlight html %}
<label>Scoring Team:</label>
<select id="team" onchange="drawTable();">
  <option value="">All</option>
  <option value="Germany">Germany</option>
  <option value="New Zealand">New Zealand</option>
  <option value="Uruguay">Uruguay</option>
</select>
{% endhighlight %}

The option values will set the type of citations the user can choose from.

{% highlight html %}
<label>Citation:</label>
<select id="citation" onchange="drawTable();">
  <option value="crossref">CrossRef</option>
  <option value="scopus">Scopus</option>
  <option value="pubmed">Pubmed</option>
</select>
{% endhighlight %}

> The modified sample can now be loaded in a web browser.

<a href="/file/{{ page.shortid }}/gviz_datatable2.html"><img src ="/file/{{ page.shortid }}/sample1.jpg" class="mainimage" /></a>










<!--

{% highlight javascript %}
      function drawTable() {
        var query = "select col0,col1,col2,col10"
          + "from 1W7-apvjDSgsT5jRy4lAcxYJgsGVIcFhudiFN0J0"
          + "where col0 contains ignoring case 'pone'";
        var year = document.getElementById('year').value;
        if (year) {
          query += "and col1 >= 'Jan 1, "+year+"' and col1 <= 'Dec 31, " + year + "'";
        }
        query += " order by col10 desc limit 10";

        var queryText = encodeURIComponent(query);
        var gvizQuery = new google.visualization.Query(
            'http://www.google.com/fusiontables/gvizdata?tq=' + queryText);

        gvizQuery.send(function(response) {

          var table = new google.visualization.Table(
            document.getElementById('visualization')
          );

          table.draw(response.getDataTable(), {
            showRowNumber: true,
            allowHtml: true
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


-->
