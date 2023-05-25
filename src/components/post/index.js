import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Journal from './journal';
import Experiences from './experiences';
import Acts from './acts';
import Infos from './infos';
import Resau from './resau';
import Galerie from './galerie';

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

    <Box sx={{ maxWidth: '50%' }}>
      <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"

        >
          <Tab className='font-semibold text-[#8E8EA9]' value={0} label="Journal" {...a11yProps(0)} />
          <Tab className='font-semibold text-[#8E8EA9]' value={1} label="Titres et experiences" {...a11yProps(1)} />
          <Tab className='font-semibold text-[#8E8EA9]' value={2} label="Actes" {...a11yProps(2)} />
          <Tab className='font-semibold text-[#8E8EA9]' value={3} label="Galerie" {...a11yProps(3)} />
          <Tab className='font-semibold text-[#8E8EA9]' value={4} label="Infos Pratique" {...a11yProps(4)} />
          <Tab className='font-semibold text-[#8E8EA9]' value={5} label="Réseau" {...a11yProps(5)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Journal />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Experiences />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Acts />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Galerie />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Infos />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Resau />
      </TabPanel>
    </Box>


  );
}
