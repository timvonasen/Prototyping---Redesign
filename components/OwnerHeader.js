import React from "react";
import { useRouter } from "next/router";
import { Box, Tab, Tabs } from "@mui/material";
import { Opacity, List } from "@mui/icons-material";

const OwnerHeader = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(router.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    router.push(newValue);
  };

  return (
    <>
      <Box className="sticky top-0 z-10 bg-white py-4 px-4">
        <h2 className="text-4xl font-semibold text-black">BlendBorg</h2>
      </Box>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          borderBottom: "1px solid gray",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<List />} label="Ingredients" value="/OwnerPage" />
          <Tab icon={<Opacity />} label="Refill/Clean" value="/refillClean" />
        </Tabs>
      </Box>
    </>
  );
};

export default OwnerHeader;
