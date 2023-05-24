import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    
    <Box sx={{ width: '100' }}>
      <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="white"
          indicatorColor="none"
          aria-label="secondary tabs example"
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
           
          }}
          
        >
          <Tab sx={{minHeight: '30px',height: 'auto', paddingTop: '6px',paddingBottom: '6px',}} className={`font-semibold  ${value === 0 ? 'btn text-sm' : ''}`} value={0} label="All Media" {...a11yProps(0)}   />
          <Tab sx={{minHeight: '30px',height: 'auto', paddingTop: '6px',paddingBottom: '6px',}} className={`font-semibold  ${value === 1 ? 'btn text-sm' : ''}`}value={1} label="Images" {...a11yProps(1)} />
          <Tab sx={{minHeight: '30px',height: 'auto', paddingTop: '6px',paddingBottom: '6px',}} className={`font-semibold  ${value === 2 ? 'btn text-sm' : ''}`}value={2} label="Before & After" {...a11yProps(2)} />
          <Tab sx={{minHeight: '30px',height: 'auto', paddingTop: '6px',paddingBottom: '6px',}} className={`font-semibold  ${value === 3 ? 'btn text-sm' : ''}`}value={3} label="Videos" {...a11yProps(3)} />
      

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        item1
      </TabPanel>
      <TabPanel value={value} index={1}>
        item2
      </TabPanel>
      <TabPanel value={value} index={2}>
       oitem
      </TabPanel>
      <TabPanel value={value} index={3}>
       item4
      </TabPanel>
     
    </Box>
 
  );
}
