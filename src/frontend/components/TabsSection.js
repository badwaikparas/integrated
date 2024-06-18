import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Summary from '../components/ProjectTabs/Summary';
import Milestones from '../components/ProjectTabs/Milestones';
import Expenses from '../components/ProjectTabs/Expenses';
import Services from '../components/ProjectTabs/Services';
import Tasks from '../components/ProjectTabs/Task';
import Notes from '../components/ProjectTabs/Notes';
import Proposal from '../components/ProjectTabs/Proposal';
import ProjectActivity from '../components/ProjectTabs/ProjectActivity';
// import ExpenseItem1 from '../components/ProjectTabs/ExpenseItem';
function TabsSection() {
  return (
    <Tabs>
      <Tabs>
        <TabList>
          <Tab>SUMMARY</Tab>
          <Tab>SERVICES</Tab>
          <Tab>MILESTONES</Tab>
          <Tab>TASKS</Tab>
          <Tab>NOTES</Tab>
          <Tab>TIME LOGS</Tab>
          <Tab>EXPENSES</Tab>
          <Tab>PROPOSALS</Tab>
          <Tab>TICKETS</Tab>
          <Tab>PROJECT ACTIVITIES</Tab>
        </TabList>

        <TabPanel>
          <Summary />
        </TabPanel>
        <TabPanel>
          <Services />
        </TabPanel>
        <TabPanel>
          <Milestones />
        </TabPanel>
        <TabPanel>
          <h2><Tasks /></h2>
        </TabPanel>
        <TabPanel>
          <Notes />
        </TabPanel>
        <TabPanel>
          <h2>Any content 6</h2>
        </TabPanel>
        <TabPanel>
          <Expenses />
          {/* <ExpenseItem1
            title="EXP-2"
          /> */}
        </TabPanel>
        <TabPanel>
          <h2><Proposal /></h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 9</h2>
        </TabPanel>
        <TabPanel>
          <ProjectActivity />
        </TabPanel>
      </Tabs>
    </Tabs>
  )
}

export default TabsSection