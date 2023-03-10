# Welcome to Jobs API!

![GIF SHOWCASE](https://github.com/Vashakmadze/jobs-api/blob/main/jobs-gif.gif "WEBSITE SHOWCASE")


NOTE: IF YOU CANNOT CONNECT TO API, PLEASE GIVE IT A FEW TRIES BEFORE SENDING A COMPLAINT. THIS IS BECAUSE THE SERVER SLEEPS WHEN THERES NO ACTIVITY.

The Jobs API is a tool that provides users with up-to-date information on the latest job vacancies posted on the Jobs.ge website. This API allows users to search for job vacancies based on a variety of job categories. With this API, users can easily access the most relevant and current job vacancies in Georgia, making it a valuable resource for job seekers, employers, and recruitment agencies. 

# Data Properties
-   title: The title of the Job
-   posted: the date when the job was posted
-   expires: the date until when the job is open for applications
-   body: the job description
-   companyImage (optional): the URL of the company's logo image

# Endpoints
To get list of all the jobs use the following endpoint - 
```
 https://jobs-api-qmzj.onrender.com/jobs/all
```
To get list of all the jobs by category, use the following endpoint where <:cat> is replaced by the category of your choice.  
```
https://jobs-api-qmzj.onrender.com/jobs/<:cat>
```
Here are current list of categories -

 - **tech** - All the jobs in Tech
 - **management** - All the jobs in Management
 - **finance** - All the jobs in Finance
 - **logistics** - All the jobs in Logistics
 - **construction** - All the jobs in Construction
 - **law** - All the jobs in Law

# Request

You can make a GET request to the endpoint to retrieve a list of all or category based job openings. Here are some of the examples of the requests -

## JavaScript - Axios

    const axios  =  require('axios');
    const config  = {
	    method: 'get',
	    url: 'https://jobs-api-qmzj.onrender.com/jobs/all',
	    headers: {
		    'x-api-key': YOUR_API_KEY,
		    'Content-Type': 'application/json'
		},
	};
	axios(config).then(function (response) {
		console.log(JSON.stringify(response.data));
	}).catch(function (error) {
		console.log(error);
	});

## Curl

    curl --location 'https://jobs-api-qmzj.onrender.com/jobs/all' 
    --header 'x-api-key: YOUR_API_KEY' 
    --header 'Content-Type: application/json'
##  JavaScript - Fetch
	

    const myHeaders  =  new  Headers();
    myHeaders.append("x-api-key", YOUR_API_KEY);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions  = {
	    method: 'GET',
	    headers: myHeaders,
	    redirect: 'follow'
	};
	fetch("https://jobs-api-qmzj.onrender.com/jobs/all", requestOptions)
	.then(response  =>  response.text())
	.then(result  =>  console.log(result))
	.catch(error  =>  console.log('error', error));
## Python - Requests

    import requests
    import json
    url = "https://jobs-api-qmzj.onrender.com/jobs/all"
    headers = {
	    'x-api-key': YOUR_API_KEY,
	    'Content-Type': 'application/json'
	}
	response = requests.request("GET", url, headers=headers)
	print(response.text)

# Response

The response from the API will be a JSON array of job objects, each with the properties described above. Here is an example response - 

    [
	    {
		    "title": "Technical Support Specialist with German",
		    "company": "Concentrix",
		    "posted": "27 February",
		    "expires": "27 March",
		    "body": "https://jobs.ge/en/?view=jobs&id=440285",
		    "companyImage": "https://jobs.ge//data/clients/logo_icon/17158
			_concentrix_8678613.gif"
		},
		{
			"title": "Italian Speaking Technical Support Specialist",
			"company": "Concentrix",
			"posted": "27 February",
			"expires": "27 March",
			"body": "https://jobs.ge/en/?view=jobs&id=440284",
			"companyImage":"https://jobs.ge//data/clients/logo_icon/17158
			_concentrix_8678613.gif"
		},
		{
			"title": "Asterisk Specialist",
			"company": "Ertaoza",
			"posted": "27 February",
			"expires": "27 March",
			"body": "https://jobs.ge/en/?view=jobs&id=440211",
			"companyImage": "https://jobs.ge//data/clients/logo_icon/22647
			_Untitled_design_1421885.gif"			
		}
	]


