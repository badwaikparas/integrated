import React from 'react';
import SettingsHeader from '../components/SettingsHeader';
import SettingTabs from '../components/SettingsTabs';


// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material
// npm install ajv --save-dev
// npm install @mui/lab @mui/material
// npm install @mui/x-data-grid @mui/x-data-grid-generator


function Settings() {
    return (
        <>
            <SettingsHeader />
            <SettingTabs />
        </>
    )
}

export default Settings