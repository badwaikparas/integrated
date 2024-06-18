// import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import FilterListIcon from '@mui/icons-material/FilterList';
import ListIcon from '@mui/icons-material/List';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';

function LeadsHeader() {
  return (
    <div className='flex p10' style={{ justifyContent: "space-between" }}>
      <div>
        <div style={{ fontSize: "20px" }}>Leads <small>(2)</small></div>
        <div style={{ fontSize: "13px" }}>Organize your Leads</div>
      </div>
      <div className='flex'>
        <div style={{ margin: "0 5px" }}>
          <IconButton><SearchIcon /></IconButton>
        </div>
        <div style={{ margin: "0 10px" }}>
          <IconButton><SettingsIcon /></IconButton>
        </div>
        <div style={{ margin: "0 10px" }}>
          <IconButton><ListIcon /></IconButton>
        </div>
        <div style={{ margin: "0 10px" }}>
          <IconButton><FilterListIcon /></IconButton>
        </div>
        <div style={{ margin: "0 10px" }}>
          <IconButton><AddCircleIcon style={{ color: "lightgreen" }} /></IconButton>
        </div>
        <div style={{ margin: "0 10px" }}>
          <IconButton><MoreVertIcon /></IconButton>
        </div>
      </div>
    </div>
  )
}

export default LeadsHeader