--- 
layout: post
title: PLoS ALM Visualization
uuid: 8c6563f5-7230-4a97-b888-7a1536b5b746
published: false
---


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



