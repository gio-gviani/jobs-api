const Docs = () => (
    <div className="text-white text-start docs backdrop-blur-sm">
        <div className="">
            <h1 className="text-white text-start leading-[1.33] text-[1.5rem] md:text-[2rem] my-[2rem]">Welcome to Jobs API!</h1>
            <p className="sm:my-[1.2em] italic font-bold sm:text-[1.5rem]">NOTE: IF YOU CANNOT CONNECT TO API, PLEASE GIVE IT A FEW TRIES BEFORE SENDING A COMPLAINT. THIS IS BECAUSE THE SERVER SLEEPS WHEN THERES NO ACTIVITY.</p>
            <p className="my-[1.2em] sm:text-[1.5rem]">The Jobs API is a tool that provides users with up-to-date information on the latest job vacancies posted on the <a href="http://Jobs.ge">Jobs.ge</a> website. This API allows users to search for job vacancies based on a variety of job categories. With this API, users can easily access the most relevant and current job vacancies in Georgia, making it a valuable resource for job seekers, employers, and recruitment agencies.</p>
            <h1 className="text-white text-start leading-[1.33] text-[1.5rem] md:text-[2rem] my-[2rem]">Data Properties</h1>
            <ul className="my-[1.2em] list-disc pl-[2.5em]">
                <li className="sm:text-[1.5rem]"><code>title</code>: The title of the Job</li>
                <li className="sm:text-[1.5rem]"><code>posted</code>: The date when the job was posted</li>
                <li className="sm:text-[1.5rem]"><code>expires</code>: The date until when the job is open for applications</li>
                <li className="sm:text-[1.5rem]"><code>body</code>: The job description</li>
                <li className="sm:text-[1.5rem]"><code>companyImage</code> (optional): The URL of the company’s logo image</li>
            </ul>
            <h1 className="text-white text-start leading-[1.33] text-[1.5rem] md:text-[2rem] my-[2rem]">Endpoints</h1>
            <p className="my-[1.2em] sm:text-[1.5rem]">To get list of all the jobs use the following endpoint -</p>
            <pre><code className="text-[0.8rem] sm:text-[1.5rem]">  https://jobs-api-qmzj.onrender.com/jobs/all
            </code></pre>
            <p className="my-[1.2em] sm:text-[1.5rem]">To get list of all the jobs by category, use the following endpoint where &lt;:cat&gt; is replaced by the category of your choice.</p>
            <pre className="text-[0.8rem] sm:text-[1.5rem]"><code>  https://jobs-api-qmzj.onrender.com/jobs/&lt;:cat&gt;
            </code></pre>
            <p className="my-[1.2em] sm:text-[1.5rem]">Here are current list of categories -</p>
            <ul className="my-[1.2em] list-disc pl-[2.5em]">
                <li className="sm:text-[1.5rem]"><strong>tech</strong> - All the jobs in Tech</li>
                <li className="sm:text-[1.5rem]"><strong>management</strong> - All the jobs in Management</li>
                <li className="sm:text-[1.5rem]"><strong>finance</strong> - All the jobs in Finance</li>
                <li className="sm:text-[1.5rem]"><strong>logistics</strong> - All the jobs in Logistics</li>
                <li className="sm:text-[1.5rem]"><strong>construction</strong> - All the jobs in Construction</li>
                <li className="sm:text-[1.5rem]"><strong>law</strong> - All the jobs in Law</li>
            </ul>
            <h1 className="text-white text-start leading-[1.33] text-[1.5rem] md:text-[2rem] my-[2rem]">Request</h1>
            <p className="my-[1.2em] sm:text-[1.5rem]">You can make a GET request to the endpoint to retrieve a list of all or category based job openings. Here are some of the examples of the requests -</p>
            <h2 className="my-[2rem] text-[1rem] sm:text-[1.75rem]">JavaScript - Axios</h2>
            <pre><code className="text-[0.8rem] sm:text-[1.5rem]">{`const axios  =  require('axios');
const config  = {
method: 'get',
url: ' https://jobs-api-qmzj.onrender.com/jobs/all',
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
            `}</code></pre>
            <h2 className="my-[2rem] text-[1rem] sm:text-[1.75rem]">Curl</h2>
            <pre><code className="text-[0.8rem] sm:text-[1.5rem]">curl --location ' https://jobs-api-qmzj.onrender.com/jobs/all' 
            --header 'x-api-key: YOUR_API_KEY' 
            --header 'Content-Type: application/json'
            </code></pre>
            <h2 className="my-[2rem] text-[1rem] sm:text-[1.75rem]">JavaScript - Fetch</h2>
            <pre className="text-[0.8rem] sm:text-[1.5rem]"><code>{`const myHeaders  =  new  Headers();
myHeaders.append("x-api-key", YOUR_API_KEY);
myHeaders.append("Content-Type", "application/json");
const requestOptions  = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
fetch(" https://jobs-api-qmzj.onrender.com/jobs/all", requestOptions)
.then(response;  response.text())
.then(result;  console.log(result))
.catch(error;  console.log('error', error));
            `}</code></pre>
            <h2 className="my-[2rem] text-[1rem] sm:text-[1.75rem]">Python - Requests</h2>
            <pre><code className="text-[0.8rem] sm:text-[1.5rem]">{`import requests
import json
url = " https://jobs-api-qmzj.onrender.com/all"
headers = {
    'x-api-key': YOUR_API_KEY,
    'Content-Type': 'application/json'
}
response = requests.request("GET", url, headers=headers)
print(response.text) `}
            </code></pre>
            <h1 className="text-white text-start leading-[1.33] text-[1.5rem] md:text-[2rem] my-[2rem]">Response</h1>
            <p className="my-[1.2em] sm:text-[1.5rem]">The response from the API will be a JSON array of job objects, each with the properties described above. Here is an example response -</p>
            <pre><code className="text-[0.8rem] sm:text-[1.5rem]">{`[
    {
        "title": "Technical Support Specialist with German",
        "company": "Concentrix",
        "posted": "27 February",
        "expires": "27 March",
        "body": "https://jobs.ge/en/?view=jobs&amp;id=440285",
        "companyImage": "https://jobs.ge//data/clients/logo_icon/17158
        _concentrix_8678613.gif"
    },
    {
        "title": "Italian Speaking Technical Support Specialist",
        "company": "Concentrix",
        "posted": "27 February",
        "expires": "27 March",
        "body": "https://jobs.ge/en/?view=jobs&amp;id=440284",
        "companyImage":"https://jobs.ge//data/clients/logo_icon/17158
        _concentrix_8678613.gif"
    },
    {
        "title": "Asterisk Specialist",
        "company": "Ertaoza",
        "posted": "27 February",
        "expires": "27 March",
        "body": "https://jobs.ge/en/?view=jobs&amp;id=440211",
        "companyImage": "https://jobs.ge//data/clients/logo_icon/22647
        _Untitled_design_1421885.gif"			
    }
]`}
            </code></pre>
        </div>
    </div>
)

export default Docs;