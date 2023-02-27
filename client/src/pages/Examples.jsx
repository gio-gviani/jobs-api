import Terminal from "../components/Terminal";

const responseCat =
[
    {
        title: "Back-End Developer",
        company: "TNET",
        posted: "27 February",
        expires: "27 March",
        body: "https://jobs.ge/en/?view=jobs&id=440099",
        companyImage: "https://jobs.ge//data/clients/logo_icon/19887_tnet_1690360.gif"
    },
    {
        title: "Software Specialist/Intern",
        company: "I Know",
        posted: "27 February",
        expires: "12 March",
        body: "https://jobs.ge/en/?view=jobs&id=440204",
        companyImage: "https://jobs.ge//data/clients/logo_icon/8323_iknow_3258751.gif"
    },
];

const responseAll =
[
    {
        title: "Consultant",
        company: "Novko Retail Georgia",
        posted: "26 February",
        expires: "26 March",
        body: "https://jobs.ge/en/?view=jobs&id=439999",
        companyImage: "/clients/logo_icon/image.gif"
    },
    {
        title: "Sales Agent",
        company: "Gedu",    
        posted: "26 February",
        expires: "01 March",
        body: "https://jobs.ge/en/?view=jobs&id=439998"
    }
];

const Examples = () => (
    <div className="flex flex-col py-10 text-start items-center xl:item-start xl:justify-between text-2xl">
        <div className="flex flex-col">
            <h1 className="text-white py-8 text-center">
                Request all the posted jobs
            </h1>
            <div className="flex flex-col xl:flex-row justify-between">
                <Terminal json={responseAll} cat={"all"} type={"request"}/>
                <Terminal json={responseAll} cat={"all"} type={"response"}/>
            </div>
        </div>
        <div>
            <h1 className="text-white py-8 text-center">
                Request posted jobs by category
            </h1>
            <div className="flex flex-col xl:flex-row justify-between">
                <Terminal json={responseCat} cat={":cat"} type={"request"}/>
                <Terminal json={responseCat} cat={":cat"} type={"response"}/>
            </div>
        </div>
    </div>
)

export default Examples;