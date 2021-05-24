# web-scraping

Project's colab link is [here](https://colab.research.google.com/drive/1QdQBF7qhd943Chg5B1buJUUK53u6vYUz?usp=sharing) in case it does not open on Github(Github has a bug with ipynb files) 

# Description

  This is a web scraping project written with python. In the project python's Beautiful Soup libarary is used to handle the main problem. The task wanted to be solved is scraping some data about given products' URLs and printing these data to a google spreadsheet. 

  We are given a bunch of URLs which consist of the website's all URLs. First things first, the URLs' of product pages should be extracted. This is provided with selecting URLs which address a last page. After selecting these URLs, product code data is controlled to be ensured that the page is a product page.
  
  After determining product's URLs, the next step is retrieving data from these pages. As it is mentioned earlier, Python's Beautiful Soup library is used in this stage. With requesting all addresses, asked data extracted from html codes. 
  
  Finally when all data gathered in a tuple, they are written down to a google spreadsheet with the help of Gspread library of Python. That is also asked in the project that the spreadsheet data should be sorted in terms of availability values and sent to an e-mail address via google apps script. Google apps script codes for sorting and sending the data as e-mail can be reached from the project's github file.
  
  
