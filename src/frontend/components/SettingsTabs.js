import * as React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react';
import CompanySettings from '../components/SettingsTabs/CompanySettings';
import Backup from '../components/SettingsTabs/Backup';
import CronJob from '../components/SettingsTabs/CronJob';
import CustomFields from '../components/SettingsTabs/CustomFields';
import Customization from '../components/SettingsTabs/Customization';
import EmailSettings from '../components/SettingsTabs/EmailSettings';
import FinancialSettings from '../components/SettingsTabs/FinancialSettings';
import LocalizationDateTime from '../components/SettingsTabs/LocalizationDateTime';
import Payment from '../components/SettingsTabs/Payment';
import Roles from '../components/SettingsTabs/Roles';
import Security from '../components/SettingsTabs/Security';
import Series from '../components/SettingsTabs/Series';

export default function SettingTabs() {
    const [value, setValue] = useState('1')
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        < TabContext value={value} >
            <Box>
                <TabList onChange={handleChange} textColor='primary' variant='scrollable' >
                    <Tab label="COMPANY SETTINGS" value="1"></Tab>
                    <Tab label="FINANCIAL SETTINGS" value="2"></Tab>
                    <Tab label="ROLES" value="3"></Tab>
                    <Tab label="SERIES" value="4"></Tab>
                    <Tab label="LOCALIZATION / DATE TIME" value="5"></Tab>
                    <Tab label="E-MAIL SETTINGS" value="6"></Tab>
                    <Tab label="CUSTOMIZATION" value="7"></Tab>
                    <Tab label="CUSTOM FIELDS" value="8"></Tab>
                    <Tab label="SECURITY" value="9"></Tab>
                    <Tab label="PAYMENT" value="10"></Tab>
                    <Tab label="CRON JOB" value="11"></Tab>
                    <Tab label="BACKUP" value="12"></Tab>
                </TabList>
            </Box>

            <TabPanel value="1"><CompanySettings /></TabPanel>
            <TabPanel value="2"><FinancialSettings /></TabPanel>
            <TabPanel value="3"><Roles /></TabPanel>
            <TabPanel value="4"><Series /></TabPanel>
            <TabPanel value="5"><LocalizationDateTime />/</TabPanel>
            <TabPanel value="6"><EmailSettings /></TabPanel>
            <TabPanel value="7"><Customization /></TabPanel>
            <TabPanel value="8"><CustomFields /></TabPanel>
            <TabPanel value="9"><Security /></TabPanel>
            <TabPanel value="10"><Payment /></TabPanel>
            <TabPanel value="11"><CronJob /></TabPanel>
            <TabPanel value="12"><Backup /></TabPanel>
        </TabContext >
    );
}