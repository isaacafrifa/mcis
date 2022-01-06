
# MCIS Task

This task examines the behaviour of contributors in relation to specified tags 
on stackoverflow.

## Description
The task investigates two tags namely: Strapi and Sanity. 
The obtained posts under the 2 tags were taken within the specified period 
of January, 2021 and June, 2021 (a 6-month period).

## Metrics
Five notable metrics were selected alongside each post extracted. They include:
+ Answer Count 
+ Score (votes)
+ Created Time 
+ Comments
+ View Count


### Motivation 
The table below displays the five metrics and the reasons why they were selected.

| Metrics             | Motivation        |
| ----------------- | ------------------------------------------------------------------ |
| Answer Count | To know the number of answers the posts had. |
| Score|  To verify the quality of the post, whether users approve them or not. |
| Comment Count |  To determine how users engage with posts.|
| Created Time |  To help determine when posts are usually published. |
| View Count |  To know the number of views a post has and compare with the answer count of posts. |



## Data Extraction

The data was derived from querying the StackExchange Data Explorer website. 
Two customized queries, representing the two tags, were composed and ran on [StackExchange URL](https://data.stackexchange.com/stackoverflow/query/new).
The [StackExchange URL](https://data.stackexchange.com/stackoverflow/query/new) provides a 
'Download CSV' button which was utilized to extract the data in a csv file.

Below are the two queries that were used:
+ #### Strapi Tag 
```sql
SELECT p.id, p.CreationDate, p.Tags, p.AnswerCount, p.Score, p.CommentCount, p.ViewCount   
FROM Posts p
WHERE
p.CreationDate between '2021-01-01' and '2021-07-01'
AND p.Tags like '%strapi%' 
ORDER BY p.CreationDate DESC

```

+ #### Sanity Tag
```sql
SELECT p.id, p.CreationDate, p.Tags, p.AnswerCount, p.Score, p.CommentCount, p.ViewCount   
FROM Posts p
WHERE
p.CreationDate between '2021-01-01' and '2021-07-01'
AND p.Tags like '%sanity%' 
ORDER BY p.CreationDate DESC

```

## Analysis

The data extracted from stackOverflow  .....
[Documentation](https://linktodocumentation)




## Results

What did you derive from your analysis? State your conclusions.
