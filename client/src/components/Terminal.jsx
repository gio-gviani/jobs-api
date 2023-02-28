import React from 'react';

const Response = (props) => {
    return (
        <div className="Terminal">
            <div className="terminal-window w-[35   0px] sm:h-[620px] sm:w-[500px]">
                <header>
                    <div className="button green"></div>
                    <div className="button yellow"></div>
                    <div className="button red"></div>
                </header>
                <div className="terminal h-[620px] w-[100%] overflow-x-auto sm:overflow-hidden">
                    <div>
                        <pre className=''>
                            <h3>Response:</h3>
                            <span className='text-teal-200'>&gt; </span>
                            {JSON.stringify(props.json, null, 3)}
                        </pre>
                    </div>
                    <div className='type text-teal-200'>
                    <h1>&gt;</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Request = (props) => {
    return (
        <div className="Terminal mb-10 2xl:mb-0 xl:mr-10">
            <div className="terminal-window w-[350px] sm:h-[620px] sm:w-[500px]">
                <header>
                    <div className="button green"></div>
                    <div className="button yellow"></div>
                    <div className="button red"></div>
                </header>
                <div className="terminal h-[620px] overflow-x-auto">
                    <code className=''>
                        <div>
                            <h3>Request:</h3>
                            <span className='text-teal-200'>&gt; </span>
                            fetch&#40;"http://localhost:5000/jobs/{props.cat}", &#123;
                        </div>
                        <div>
                            &nbsp; &nbsp; method: "GET", 
                        </div>
                        <div>
                            &nbsp; &nbsp; headers: &#123;
                        </div>
                        <div>
                            &nbsp; &nbsp; &nbsp; &nbsp; "Content-Type": "application/json",
                        </div>
                        <div>
                            &nbsp; &nbsp; &nbsp; &nbsp; "x-api-key": YOUR_KEY_HERE
                        </div>
                        <div>
                            &nbsp; &nbsp; &#125;
                        </div>
                        <div>
                            &#125;&#41;
                        </div>
                    </code>
                    <div className='type text-teal-200'>
                    <h1>&gt;</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Terminal = (props) => {
    {
        if(props.type === "response") {
            return <Response json={props.json}/> 
        } else {
            return <Request cat={props.cat} />
        }
    }
//   <div className="Terminal">
//     <div className="terminal-window">
//       <header>
//         <div className="button green"></div>
//         <div className="button yellow"></div>
//         <div className="button red"></div>
//       </header>
//       <section className="terminal">
//         <code>
//             <div>
//                 <h3>Request:</h3>
//                 <span className='text-teal-200'>&gt; </span>
//                 fetch&#40;"http://localhost:5000/jobs/{props.cat}", &#123;
//             </div>
//             <div>
//                 &nbsp; &nbsp; method: "GET", 
//             </div>
//             <div>
//                 &nbsp; &nbsp; headers: &#123;
//             </div>
//             <div>
//                 &nbsp; &nbsp; &nbsp; &nbsp; "Content-Type": "application/json",
//             </div>
//             <div>
//                 &nbsp; &nbsp; &nbsp; &nbsp; "x-api-key": YOUR_KEY_HERE
//             </div>
//             <div>
//                 &nbsp; &nbsp; &#125;
//             </div>
//             <div>
//                 &#125;&#41;
//             </div>
//         </code>
//         <br />
//         <div>
//             <pre className=''>
//                 <h3>Response:</h3>
//                 <span className='text-teal-200'>&gt; </span>
//                 {JSON.stringify(props.json, null, 4)}
//             </pre>
//         </div>
//         <div className='type text-teal-200'>
//           <h1>&gt;</h1>
//         </div>
//       </section>
//     </div>
//   </div>
};

export default Terminal;
