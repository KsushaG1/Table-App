import { Box } from "@mui/material";
import { Login } from "./Login";
import { Register } from "./Register";
import { Reset } from "./Reset";
import { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import Tab from '@mui/material/Tab';
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";

export const LoginTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ bottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} centered>
            <Tab label="Вход" value="1" />
            <Tab label="Регистрация" value="2" />
            <Tab label="Сброс пароля" value="3" />
          </TabList>
        </Box>
        <TabPanel value='1'><Login /></TabPanel>
        <TabPanel value='2'><Register /></TabPanel>
        <TabPanel value='3'><Reset /></TabPanel>
      </TabContext>
    </>
  );
};
