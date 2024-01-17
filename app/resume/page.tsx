import { DeviceMobileIcon, HomeIcon, Icon, MailIcon, MarkGithubIcon, ShareAndroidIcon } from "@primer/octicons-react";

export default function Resume() {
    return (
        <main className='flex min-h-screen w-full bg-gray-400 place-content-center'>
            {/* 8.5in page for printing to PDF */}
            <div className='flex flex-col w-[8.5in] min-h-screen bg-white justify-between' >
                {/* Hero Block */}
                <div className='flex flex-col w-full bg-headerBlue h-48 items-center place-content-center gap-2 shadow'>
                    <div className='text-4xl uppercase tracking-widest'>Rick Batka</div>
                    <div className='text-sm font-light uppercase tracking-[0.35em] text-gray-200'>Gameplay &amp; Distributed Systems Engineer</div>
                </div>


                <div className="flex h-full p-8 gap-8 text-sm text-black">
                    {/* Left Rail */}
                    <div className="flex flex-col gap-4 w-1/4 place-items-end text-end">
                        {/* Contact Icons */}
                        <SectionHeading>Contact</SectionHeading>
                        <div className="flex flex-col gap-1">
                            <ContactWithIcon icon={MailIcon}>rick.batka@gmail.com</ContactWithIcon>
                            <ContactWithIcon icon={ShareAndroidIcon}><a className="underline" href="https://www.linkedin.com/in/rickbatka/" target="_blank">linkedin.com/in/rickbatka</a></ContactWithIcon>
                            <ContactWithIcon icon={MarkGithubIcon}><a className="underline" href="https://rickbatka.github.io/" target="_blank">rickbatka.github.io</a></ContactWithIcon>
                            <ContactWithIcon icon={DeviceMobileIcon}>(540) 409-6652</ContactWithIcon>
                            <ContactWithIcon icon={HomeIcon}>Alexandria, VA</ContactWithIcon>
                        </div>
                        <br />

                        {/* Education */}
                        <SectionHeading>Education</SectionHeading>
                        <div className="flex flex-col gap-1">
                            <div className="uppercase text-headerBlue font-bold">Shepherd University</div>
                            <h2 className="">B.S., Computer Programming and Information Science</h2>
                            <h2 className="italic">2004-2008</h2>
                        </div>
                        <br />

                        {/* Skills */}
                        <SectionHeading>Skills</SectionHeading>
                        <ul>
                            <li>Unreal</li>
                            <li>Unity</li>
                            <li>Playcanvas</li>
                            <li>C++</li>
                            <li>C#</li>
                            <li>Golang</li>
                            <li>Java</li>
                            <li>WebGL</li>
                            <li>Typescript</li>
                            <li>JS / ES6</li>
                            <li>React</li>



                            <li>Kubernetes</li>
                            <li>Podman / Docker</li>
                            <li>Azure / AWS / GCP</li>
                            <li>RPC / Protobuf</li>
                            <li>Pulumi / Bicep / IAC</li>

                            <li>PostgreSQL</li>
                            <li>Cassandra / ScyllaDB</li>


                            <li>&nbsp;</li>
                            <li>Interviewing & Hiring</li>
                            <li>Interview Design</li>
                            <li>Organization Building</li>
                            <li>Mentoring & Coaching</li>
                            <li>DevEx Advocacy</li>
                            <li>SDLC Process Design</li>

                            <li></li>
                        </ul>
                    </div>

                    {/* Right Rail */}
                    <div className="flex flex-1 flex-col gap-4">
                        <SectionHeading>About</SectionHeading>
                        <p>
                            Senior engineering leader with 15+ years of experience shipping software &amp; interactive experiences.
                            Focused on games, simulation, distributed systems, and scaling multiplayer systems.
                        </p>
                        <SectionHeading>Experience</SectionHeading>
                        <JobExperience
                            company="Bedrock Learning, Inc."
                            jobTitle="Chief Engineer & Co-Founder"
                            timeframe="2022 - Current"
                            stack="Unreal, C++, WebGL, PlayCanvas, Typescript, React, Azure, PostgreSQL">
                            <ul className="list-disc pl-8">
                                <li>Built multiplayer game platform for educational gaming startup</li>
                                <li>Built several game prototypes and one completed, shipped multiplayer game</li>
                                <li>Built APIs and scalable back-end for game services including lobby, matchmaking, and chat</li>
                                <li>Built frameworks and shared libraries to speed up similar game delivery times</li>
                                <li>Built platform, infrastructure, and responsive web app to deliver a full end-to-end &quot;Learning Experience Platform&quot;</li>
                                <li>Recruited and retained a team of engineers, designers, and product managers to accelerate platform growth</li>
                                <li>Sucessfully attained multiple cybersecurity compliance accreditations (SOC-2 Type 2 and NIST 800-171)</li>
                                <li>Designed and evangelized engineering processes, tenets, and core values to build an inclusive and expert team</li>
                                <li>Pitched ideas and successfully raised investment capital for startup, helping secure $1.15 mil for seed development fund</li>
                                <li>Successfully completed Phase II &quot;Small Business Innovation Research (SBIR)&quot; contract with the US Air Force, unlocking $750k in non-dilutive grant funding </li>
                            </ul>
                        </JobExperience>
                        <JobExperience
                            company="Improbable"
                            jobTitle="Senior Engineering Lead"
                            timeframe="2018 - 2022"
                            stack="Unreal, Unity, C++, C#, Go, Python, K8s, AWS, GCP">
                            <ul className="list-disc pl-8">
                                <li>Led a team building federated simulations combining Unreal, Unity, and other simulation engines and bespoke scientific models</li>
                                <li>Designed, built, and shipped distributed column-oriented database for recording dense time-series simulation data</li>
                                <li>Prototyped, pitched, and shipped a replay vizualizer for generating animated replays of recorded simulations</li>
                                <li>Designed, built, and shipped a protocol translation gateway to bridge SpatialOS with legacy DIS and HLA networked simulation paradigms</li>
                                <li>Pitched, advocated for, and achieved the creation of an engineering architecture council to help bridge organizational gaps between Engineering, Product, and Business Development functions</li>
                                <li>Acted as key advisor in development of ongoing product strategy</li>
                                <li>Interfaced with partners and potential customers in the capacity of solutions architect</li>
                                <li>Built demonstrator projects that showcased scale, graphics, and the integration of disparate systems working together in federated simulations</li>
                                <li>Implemented, documented and evangelized engineering tenets and best practices</li>
                                <li>Gave internal-facing technical talks, deep dives and onboarding sessions</li>
                                <li>Mentored junior engineers and new hires</li>
                                <li>Developed APIs and SDKs used by multiple teams and partners</li>
                                <li>Authored original CI/CD pipelines and build systems for US based products and projects</li>
                                <li>Helped establish policies for secure information and code sharing between US and UK companies</li>
                            </ul>
                        </JobExperience>
                        <JobExperience
                            company="Mixed In Key"
                            jobTitle="Sotware Engineer"
                            timeframe="2018-2018"
                            stack="C#, C++, SQL, WPF, Docker, Typescript, Angular, Azure">
                            <ul className="list-disc pl-8">
                                <li>Built and shipped features for an innovative cross-platform music composition desktop application</li>
                                <li>Owned product features from discovery through shipping</li>
                                <li>Developed cross-cutting features across desktop, web, and native core sampler engine</li>
                                <li>Designed and deployed cloud and native APIs</li>
                                <li>Triaged trends in telemetry data and bug reports, recommended and applied mitigations and product design changes</li>
                                <li>Worked closely with product designers and end users to discover and recommend new features</li>
                                <li>Contributed to patent on method of generating melodies by defining tension and release patterns</li>
                            </ul>
                        </JobExperience>
                        <JobExperience
                            company="AltSource"
                            jobTitle="Senior Software Engineer / Technical Lead"
                            timeframe="2013-2017"
                            stack="C#, SQL, Typescript, Angular, Razor, Entity Framework">
                            <ul className="list-disc pl-8">
                                <li>Acted as both team lead and individual contributor</li>
                                <li>Built large-scale line-of-business applications, websites, web services, and native iOS, Android, and Windows applications</li>
                                <li>Evangelized SOLID principles and automated testing best practices as they relate to very large software projects</li>
                                <li>Pitched, evangelized, and achieved a continuous delivery process that was sorely needed</li>
                                <li>Refactored, rewrote, and continuously improved large legacy systems</li>
                                <li>Led architectural design and implementation of new customer facing and internal applications</li>
                                <li>Acted as database design and optimization consultant for multiple teams</li>
                                <li>Spearheaded creation of internal-facing technical talks and company-sponsored &quot;labs day&quot; initiative</li>
                                <li>Performed code reviews and guided junior developers</li>
                                <li>Participated in product planning and roadmapping exercises</li>
                            </ul>
                        </JobExperience>
                        <JobExperience
                            company="American registry"
                            jobTitle="Software Engineer"
                            timeframe="2010-2013"
                            stack="MySQL, JS, PHP, Ubuntu"
                        >
                            <ul className="list-disc pl-8">
                                <li>Developed feaures across the full web stack from database to front-end</li>
                                <li>Acted as release manager</li>
                                <li>Performed requirements gathering and discovery</li>
                                <li>Performed database optimization and established database best practices</li>
                            </ul>
                        </JobExperience>
                        <JobExperience
                            company="TechMethods"
                            jobTitle="Software Engineer"
                            timeframe="2007-2010"
                            stack=".NET, PHP, JS, MySql, PostgreSQL">
                            <ul className="list-disc pl-8">
                                <li>Developed new features and bugfixes for a suite of database-driven web applications</li>
                                <li>Performed customer facing on-call support and DevOps</li>
                                <li>Performed discovery and requirements gathering for new projects</li>
                                <li>Collaborated with designers on new web and desktop applications</li>
                            </ul>
                        </JobExperience>
                    </div>
                </div>
            </div>
        </main>
    )
}


const ContactWithIcon = (props: { icon: Icon, children?: React.ReactNode }) => (
    <div className="flex w-full place-content-end place-items-center gap-2" >
        <div>{props.children}</div>
        <><props.icon size={14} /></>
    </div>);

const SectionHeading = (props: { children?: React.ReactNode }) => (
    <h1 className="text-headerBlue text-lg uppercase tracking-wider font-bold" >
        {props.children}
    </h1>);

const JobExperience = (props: { jobTitle: string, company: string, timeframe: string, stack: string, children?: React.ReactNode }) => (
    <div className="flex flex-col gap-[2px]">
        <h2 className="uppercase text-headerBlue font-bold">{props.jobTitle}</h2>
        <h3 className="uppercase text-headerBlue font-medium">{props.company}</h3>
        <h3 className="text-headerBlue italic">{props.timeframe}. {props.stack}</h3>
        <>{props.children}</>
    </div>)