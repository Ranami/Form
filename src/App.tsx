import React from "react";
import { NewContractForm } from "./components/NewContractForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#dc1832",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NewContractForm />
      </div>
    </ThemeProvider>
  );
};

export default App;
