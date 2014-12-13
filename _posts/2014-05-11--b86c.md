--- 
layout: post
title: PLoS ALM Interactive Charts with Google Fusion Tables
permalink: /b86c/PLoS-ALM-Interactive-Charts-Google-Fusion-Tables
uuid: 769a9bc2-b86c-11e2-8b71-6c626d8ab8fe
shortid: b86c
redirect_from: /b86c/
published: false
comments: true
---

*Add user interaction to visualizations of PLoS Article Level Metrics with Google Charts*

<a href="/file/{{ page.shortid }}/sample7.html"  target="_blank"><img src ="/file/{{ page.shortid }}/sample7.jpg" class="mainimage" /></a>

In the [previous part][part1] we made a chart showing PLoS ALM data using the Javascript Google Charts API.


[The chart][oldchart] allowed some basic interaction. For example, we could hover the mouse on a column and see the exact number of citations and the full title of the article.

However the user had no control over which year to view, or which citations to use. Although they could see the article name, there was no way to click and read the full article.

In this article, we will learn how to let the user select parameters of the data query, and include formatting so the user can read the full article.

[part1]: /7230/
[oldchart]: /file/7230/columnChart.html


<!--
[test4.html][]


[test4.html]: /file/{{ page.shortid }}/test4.html

 - [foo](/file/{{ page.shortid }}/test5.html)
 - [foo1](/file/{{ page.shortid }}/test6.html)
 - [foo2](/file/{{ page.shortid }}/test7.html)
 - [foo3](/file/{{ page.shortid }}/test8.html)
 - [foo4](/file/{{ page.shortid }}/test9.html)
 - [foo5](/file/{{ page.shortid }}/test10.html)

-->

<!-- more -->
* Table of Contents
{:toc}

# Example Code #
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

<a href="/file/{{ page.shortid }}/sample1.html" target="_blank"><img src ="/file/{{ page.shortid }}/sample1.jpg" class="mainimage" /></a>
[View Source](view-source:/file/{{ page.shortid }}/sample1.html){:target="_blank"}


The user can choose which type of citation to sort by. Each time the query gets updated and sent to the Google Fusion Tables server, so it is querying the full dataset with thousands of records and returning the specified results.

# Filter by Year #

We can allow the user to select additional query parameters in the same way. Instead filtering only for 2013, let's allow the user to choose the year. First, modify `drawChart()` to read a value from an HTML form. Then use that variable when creating the data query.

{% highlight javascript %}
var year = document.getElementById('year').value;
if (year) {
  query += " WHERE publication_date >= '"+year+"-01-01' AND publication_date <= '"+year+"-12-31'";
}
{% endhighlight %}

Finally make sure the HTML includes a form with the values we want to give the user. Although 2013 is the last option, we can use `selected="selected"` to have it selected by default.

{% highlight html %}
<label>Year:</label>
<select id="year" onchange="drawTable();">
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013" selected="selected">2013</option>
</select>
{% endhighlight %}

<a href="/file/{{ page.shortid }}/sample2.html"  target="_blank"><img src ="/file/{{ page.shortid }}/sample2.jpg" class="mainimage" /></a>
[View Source](view-source:/file/{{ page.shortid }}/sample2.html){:target="_blank"}

# Filter by Journal #

The user now has control over the year and the type of citations to view. Another option they might want is to pick a particular journal to view. For example to see the top CrossRef cited PLoS ONE articles from 2013.
The source data does not include a column specifically for the journal. However, the DOI column includes fields like `10.1371/journal.pone.0045638` or `10.1371/journal.pbio.1001455` which include a 4-letter code for the journal.
We can attach an additional `CONTAINS` operator to the `WHERE` clause of our query.
The query will end up looking something like this:
{% highlight sql %}
SELECT title, crossref, scopus, pubmed FROM 1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW WHERE publication_date >= '2013-01-01' AND publication_date < '2014-01-01' AND doi CONTAINS 'pone' ORDER BY crossref desc LIMIT 10
{% endhighlight %}

This new option is added in the same way as the previous options, by building on the `query` variable. Make sure to put the code right after the `publication_date` code so that it is within the `WHERE` clause.
{% highlight javascript %}
var journal = document.getElementById('journal').value;
if (journal) {
  query += " AND doi CONTAINS '"+journal+"'";
}
{% endhighlight %}

The same as with other options, we need an HTML section to let the user select this input. Notice how the `value` of each `option` is the 4-letter journal code, while the text of the `option` is the human-readable journal title. 
{% highlight html %}
      <label>Journal:</label>
      <select id="journal" onchange="drawTable();">
        <option value="pone">PLoS ONE</option>
        <option value="pbio">PLoS Biology</option>
        <option value="pgen">PLoS Genetics</option>
        <option value="pmed">PLoS Medicine</option>
      </select>
{% endhighlight %}

> Now the user can select journal, publication year, and citation type. 

<a href="/file/{{ page.shortid }}/sample3.html"  target="_blank"><img src ="/file/{{ page.shortid }}/sample3.jpg" class="mainimage" /></a>
[View Source](view-source:/file/{{ page.shortid }}/sample3.html){:target="_blank"}


# Include All #
We have greatly expanded the user's control over the query data. The downside though is that the user is now *required* to specify a Journal or Publication Date. What if the user would like to see the top cited PLoS ONE articles, regardless of years? We need to include an option to select show all Journals, or all Years. For the HTML form, that means including a blank `All` option with no set value.

{% highlight html %}
      <label>Journal:</label>
      <select id="journal" onchange="drawTable();">
        <option value="">All</option>
        <option value="pone">PLoS ONE</option>
        <option value="pbio">PLoS Biology</option>
        <option value="pgen">PLoS Genetics</option>
        <option value="pmed">PLoS Medicine</option>
      </select>
      <label>Year:</label>
      <select id="year" onchange="drawTable();">
        <option value="">All</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013" selected="selected">2013</option>
      </select>
{% endhighlight %}

The Javascript now needs to handle the `All` option which contains no value. When building the query, we used an `if` statement that checked if the value was set. This means those additions to the query will be automatically excluded if the form value is not set.
The one problem is that when we added the `journal` part of the query, we assumed the `WHERE` clause was already started and therefore used an `AND` operator to attach the filter. Now we need to do a check and see if the `WHERE` clause was already started by the `year` part, and if not then start it here.

{% highlight javascript %}
if (journal) {
  if (year) {query += " AND";}
  else {query += " WHERE";}
  query += " doi CONTAINS '"+journal+"'";
}
{% endhighlight %}

<a href="/file/{{ page.shortid }}/sample4.html"  target="_blank"><img src ="/file/{{ page.shortid }}/sample4.jpg" class="mainimage" /></a>
[View Source](view-source:/file/{{ page.shortid }}/sample4.html){:target="_blank"}


# Link to Article #

Now that the user has more control over which results to show, let's improve the display of those results.

Although the article titles are shown, there is no easy way to read the full article without manual steps. Using the DOI of the paper, we can link the title directly to the full article.

First we make a small change to the data query, to select the `doi` column.
{% highlight javascript %}
var query = "SELECT doi, title, publication_date, crossref, scopus, pubmed FROM 1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW";
{% endhighlight %}

Now that the `doi` data is available, we need to format the table to include it as a hyperlink. For this, we will be working inside the `gvizQuery.send()` function.
The object we will work with is a `DataTable` which includes the data from the query result. First we load that into the variable `myDataTable` so we can modify it.

{% highlight javascript hl_lines=7 %}
gvizQuery.send(function(response) {
  var table = new google.visualization.Table(
    document.getElementById('visualization')
  );
    
  // load DataTable from response
  myDataTable = response.getDataTable();
{% endhighlight %}

Next, we define a [formatter][formatter] that can alter the display of values in our table. The type of formatter we want is a [PatternFormat][patternformat]. This type of formatter can use the values from multiple columns to determine the data display.

[formatter]: https://developers.google.com/chart/interactive/docs/reference#formatters
[patternformat]: https://developers.google.com/chart/interactive/docs/reference#patternformatter


{% highlight javascript %}
var formatter = new google.visualization.PatternFormat('<a href="http://dx.doi.org/{0}" target="_blank">{1}</a> ');
{% endhighlight %}

This formatter creates a hyperlink with a URL of `http://dx.doi.org/` with the first input parameter appended. The text of the link is the second input parameter. The first input is referenced with `{0}` and the second parameter with `{1}`.

Although the formatter has been created, we still have to feed it the data we wish to format.

{% highlight javascript %}
formatter.format(myDataTable, [0,1],1);
{% endhighlight %}

The first column of the data is referenced with `0` and contains the article `doi`. The second column of the data is referenced with `1` and contains the article title.
We are telling the formatter to read column `0` and column `1` as input to the formatter, then output the results to column `1`.

The displayed result will be the article title, linked to the article's DOI link.


The final step is to output the `DataTable` into a `DataView` for display.
{% highlight javascript %}
myDataView = new google.visualization.DataView(myDataTable);

myDataView.setColumns([1, 2, 3, 4, 5]);

table.draw(myDataView, {
  showRowNumber: true,
  allowHtml: true
});
{% endhighlight %}

We want to use `DataView.setColumns()` to select which columns to display. We are leaving out the first column which is referenced as `0` because it contains the plain DOI's. We don't want to display the DOI's because they are only used for linking the title.

Finally, we need to set `allowHtml: true` in `table.draw()` so that the HTML markup we added will be rendered.

<a href="/file/{{ page.shortid }}/sample5.html"  target="_blank"><img src ="/file/{{ page.shortid }}/sample5.jpg" class="mainimage" /></a>
[View Source](view-source:/file/{{ page.shortid }}/sample5.html){:target="_blank"}

# Visual Representation of Numbers #
We have seen how a formatter lets us change the way the data is displayed. In addition to the pattern formatter, there is a [BarFormat][barformat]. This creates a visual bar to represent a numeric value. We can use this on the citation count columns to allow the user to visually recognize trends and outliers.

[barformat]: https://developers.google.com/chart/interactive/docs/reference#barformatter 

First we create the formatter with the default settings. Then we need to apply it to each of the citation columns, which are numbered 3, 4, and 5. We can use a `for` loop to apply the formatter to each of the citation columns.

{% highlight javascript %}
var formatterBar = new google.visualization.BarFormat();

for (i=3;i<6;i++) { formatterBar.format(myDataTable, i); }
{% endhighlight %}

Now in addition to the numeric citation counts, there is a visual indicator. 

<a href="/file/{{ page.shortid }}/sample6.html"  target="_blank"><img src ="/file/{{ page.shortid }}/sample6.jpg" class="mainimage" /></a>
[View Source](view-source:/file/{{ page.shortid }}/sample6.html){:target="_blank"}

# Final Adjustments #

The bar formatter helps the viewer's eye interpret the data results. The actual numbers can crowd out and obscure the bars. There is an option to hide the numbers, but we want to allow the user to get specific numbers if they want.
Because the table is made with standard HTML, we can take advantage of CSS to hide the numbers and then display them when the mouse is over the row.
The Google Visualization API uses a class `google-visualization-table-td-number` for numeric cells, and a class `google-visualization-table-tr-over` for the row that the mouse is hovering on.
If we set the text color for `-td-number` to white, then to black on the `-tr-over` class, the text will be hidden by default and only shown when the user wishes to see it. A third class `google-visualization-table-tr-sel` is used for rows that the user clicks to select.
These CSS styles go into the `<head>` portion of the HTML as usual, after the Fusion Tables CSS.
{% highlight css %}
<style>
  .google-visualization-table-td-number {
    color:white;
  }
  .google-visualization-table-tr-over > td {
    color:black;
  }
  .google-visualization-table-tr-sel > td {
    color:black;
  }       
</style> 
{% endhighlight %}

To change the column titles from their raw variable names such as `publication_date` to something human readable like `Publication Date` we can use the `AS` clause in our SQL statement for each column. 

{% highlight sql %}
SELECT doi, title AS 'Article', publication_date AS 'Publication Date', crossref AS 'CrossRef', scopus AS 'Scopus', pubmed AS 'PubMed' FROM 1zkfQ7rtG9UI5a8rPDk2bpD6d0QbgP63h2v2l9YzW
{% endhighlight %}

Finally, we can add a "Loading..." text within the visualization `<div>` so that before the first query completes, the user is not confused by a mostly blank screen.
{% highlight html %}
<div id="visualization">Loading...</div>
{% endhighlight %}


<a href="/file/{{ page.shortid }}/sample7.html"  target="_blank"><img src ="/file/{{ page.shortid }}/sample7.jpg" class="mainimage" /></a>
[View Source](view-source:/file/{{ page.shortid }}/sample7.html){:target="_blank"}

# Interpreting Results #

This is a simple visualization, but still shows some interesting results. Looking at 2013, for example, we can see that "The Effectiveness of Mobile-Health Technology-Based Health Behaviour..." "Elucidation of the RNA Recognition Code for Pentatricopeptide..."



# Next Steps #
We can let the user pick and choose the journal, year, and citation type to examine.

To start with, the Journal could include all the journals available. Additionally the Year could include all the available years. Instead of seeing the citation

In this example, we used a Table visualization for the results. The same methods can be used to manipulate any of the [chart types][charttypes]. 

[charttypes]: https://developers.google.com/chart/interactive/docs/gallery

The data used for soritn and display was 3 types of citations. The same method could be used to sort and display any of the available columns, including Citeulike or Mendeley bookmarks, Twitter or Facebook mentions, and HTML or PDF accesses.


