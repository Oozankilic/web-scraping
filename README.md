# web-scraping

Project's colab link is [here](https://colab.research.google.com/drive/1QdQBF7qhd943Chg5B1buJUUK53u6vYUz?usp=sharing) in case it does not open on Github(Github has a bug with ipynb files) 

# Description

  This is a web scraping project written with python. In the project python's Beautiful Soup libarary is used to handle the main problem. The task wanted to be solved is scraping some data about given products' URLs and printing these data to a google spreadsheet. 

  We are given a bunch of URLs which consist of the website's all URLs. First things first, the URLs' of product pages should be extracted. This is provided with selecting URLs which address a last page. After selecting these URLs, product code data is controlled to be ensured that the page is a product page.
  
  After determining product's URLs, the next step is retrieving data from these pages. As it is mentioned earlier, Python's Beautiful Soup library is used in this stage. With requesting all addresses, asked data extracted from html codes. 
  
  Finally when all data gathered in a tuple, they are written down to a google spreadsheet with the help of Gspread library of Python. That is also asked in the project that the spreadsheet data should be sorted in terms of availability values and sent to an e-mail address via google apps script. Google apps script codes for sorting and sending the data as e-mail can be reached from the project's github file.
  
  
## URL of the report

  [This report](https://docs.google.com/spreadsheets/d/1IhL3WcVU742pI3xtqrR6BZ8cljHBTxKivzwRdVxoIk4/edit?usp=sharing) is the spreadsheet output of the project.
  
## Used tech-stack
  * Colab
  * Google apps script
  * pandas library of python
  * numpy library of python
  * BeautifulSoup library of python
  * re library of python
  * html library of python
  * gspread library of python

## Challenges I have encountered
   I think the real one challange was knowing almost nothing about the project's way of done. I was not familiar with web scraping, writing the output to google sheets, and google app script before coding the project. I needed to learn most the thing while writing the project.
   
   Also the other challange was limited time. Because there was also plenty of projects, quizes, and homeworks at the university, I had hard times to spare time to code this project.
   
## What I learned from the project
  As I mentioned above, I learned web scraping, using google sheets in my code, google app script.
  
## Additional Questions

### If I’d have 10.000 urls that I should visit, then it takes hours to finish. What can we make to fasten this process?
  I think in this case we should focus on bottleneck of the process. The bottleneck part is requesting data from the website's server. This operation takes almost the entire time of the execution. 
