import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Summary from './Tabs/Summary';
import Milestones from './Tabs/Milestones';
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
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2><Milestones /></h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 6</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 7</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 8</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 9</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 10</h2>
        </TabPanel>
      </Tabs>
    </Tabs>
  )
}

export default TabsSection