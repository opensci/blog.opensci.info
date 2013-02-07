--- 
layout: post
title: PLoS ALM Visualization
uuid: 8c6563f5-7230-4a97-b888-7a1536b5b746
published: false
---



plos alm api


-- total citations
use api to get total citations

check with google fusion to get rank

show rank



-- citations per day (velocity)
calculate






















Top 10 Most Accessed from PLoS Year


ID:	`2342386` is the Summary ALM Data table available here https://www.google.com/fusiontables/DataSource?snapid=S333751Rq2K


	plos-alm-v5-09182011.2.Summary.ALM.Data.csv


`col12` is the column ID for the `Combined Usage (HTML + PDF + XML)` column.

SELECT * FROM 2342386 WHERE 'Publication Year' = 2008 ORDER BY col12 DESC LIMIT 10

SELECT * FROM 2342386 WHERE 'Publication Year' = 2009 ORDER BY col12 DESC LIMIT 10

SELECT * FROM 2342386 WHERE 'Publication Year' = 2010 ORDER BY col12 DESC LIMIT 10

SELECT * FROM 2342386 WHERE 'Publication Year' = 2011 ORDER BY col12 DESC LIMIT 10



