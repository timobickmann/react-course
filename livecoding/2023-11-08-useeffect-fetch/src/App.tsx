import { useEffect, useState } from "react";
import { IJob, ISkill } from "./interfaces";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";

const jobsUrl = "https://edwardtanguay.vercel.app/share/jobs.json";
const skillsUrl = "https://edwardtanguay.vercel.app/share/skills_with_id.json";

function App() {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [skills, setSkills] = useState<ISkill[]>([]);

  useEffect(() => {
    // IIFE
    (async () => {
      const response = await axios.get(jobsUrl);
      const _jobs: IJob[] = response.data;
      for (const _job of _jobs) {
        _job.isOpen = false;
      }
      setJobs(_jobs);
    })();

    (async () => {
      const response = await axios.get(skillsUrl);
      const _skills: ISkill[] = response.data;
      for (const _skill of _skills) {
        _skill.isOpen = false;
      }
      setSkills(_skills);
    })();

    // one could also use then() but it has a less aesthetic syntax
    //  axios.get('')
    //         .then((response) =>
    //             setJobs(response?.data? [])
    //         );
  }, []);

  const handleJobToggle = (job: IJob) => {
    jobs.forEach((m) => {
      if (m.id !== job.id) {
        m.isOpen = false;
      }
    });
    job.isOpen = !job.isOpen;
    const _jobs = structuredClone(jobs);
    setJobs(_jobs);
  };

  const handleSkillsToggle = (skill: ISkill) => {
    skills.forEach((m) => {
      if (m.id !== skill.id) {
        m.isOpen = false;
      }
    });
    skill.isOpen = !skill.isOpen;
    const _skills = structuredClone(skills);
    setSkills(_skills);
  };


  return (
    <>
      <h1 className="text-3xl text-center">Info Site</h1>
      <div className="flex gap-2 p-2 justify-around">
        <section className="w-1/2 max-w-lg">
          <h2 className="text-xl mb-3">
            {jobs.length === 0 ? (
              <div>
                <ImSpinner9 className="animate-spin text-4xl text-slate-400" />
              </div>
            ) : (
              <div>There are {jobs.length} jobs.</div>
            )}
          </h2>
          <div
            className={`${
              jobs.length !== 0 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-in-out`}
          >
            {jobs.map((job) => {
              return (
                <div
                  key={job.id}
                  className="bg-slate-400 p-2 mb-2 rounded"
                  onClick={() => handleJobToggle(job)}
                >
                  <p
                    className={`cursor-pointer ${
                      job.isOpen ? "font-bold" : ""
                    }`}
                  >
                    {job.title}
                  </p>

                  {job.isOpen && (
									<div className="text-orange-900">
										<p>{job.company}</p>
                    <p>{job.skillList}</p>
									</div>
								)}
                </div>
              );
            })}
          </div>
        </section>
        <section className="w-1/2 max-w-lg">
          <h2 className="text-xl mb-3">
            {jobs.length === 0 ? (
              <div>
                <ImSpinner9 className="animate-spin text-4xl text-slate-400" />
              </div>
            ) : (
              <div>There are {skills.length} skills.</div>
            )}
          </h2>
          <div
            className={`${
              skills.length !== 0 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-in-out`}
          >
            {skills.map((skill) => {
              return (
                <div
                  key={skill.id}
                  className="bg-slate-400 p-2 mb-2 rounded"
                  onClick={() => handleSkillsToggle(skill)}
                >
                  <p
                    className={`cursor-pointer ${
                      skill.isOpen ? "font-bold" : ""
                    }`}
                  >
                    {skill.name}
                  </p>

                  {skill.isOpen && (
									<div className="text-orange-900">
										<p>{skill.description}</p>
									</div>
								)}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
