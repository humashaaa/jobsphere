import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
const ReactTabs = ({jobs}) => {
    return (
        <Tabs>
        
       <div className='font-semibold md:text-xl '>
       <TabList>
          <Tab >All Jobs</Tab>
          <Tab >On Site Job</Tab>
          <Tab >Remote Job</Tab>
          <Tab >Hybrid</Tab>
          <Tab >Part-Time</Tab>
        </TabList>
       </div>
    
    
      
       <TabPanel>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
         {
            jobs.map(job=><JobCard key={job.job_id} job={job}></JobCard>)
          }
         </div>
        </TabPanel>
       <TabPanel>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
         {
            jobs
            .filter(j=>j.category === 'On-site Job')
            .map(job=><JobCard key={job.job_id} job={job}></JobCard>)
          }
         </div>
        </TabPanel>
        <TabPanel>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
         {
            jobs
            .filter(j=>j.category === 'Remote Job')
            .map(job=><JobCard key={job.job_id} job={job}></JobCard>)
          }
         </div>
        </TabPanel>
        <TabPanel>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
         {
            jobs
            .filter(j=>j.category === 'Hybrid')
            .map(job=><JobCard key={job.job_id} job={job}></JobCard>)
          }
         </div>
        </TabPanel>
        <TabPanel >
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
         {
            jobs
            .filter(j=>j.category === 'Part-time')
            .map(job=><JobCard key={job.job_id} job={job}></JobCard>)
          }
         </div>
        </TabPanel>
      
      </Tabs>
    );
};

export default ReactTabs;