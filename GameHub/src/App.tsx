import React from "react";
import {

  Grid,
  GridItem,
} from "@chakra-ui/react";

const App = () => {
  return (
    <div>
      <Grid templateAreas={`"nav nav" "aside main"`}>

        <GridItem area={'nav'} bg={"red"}> nav</GridItem>

      </Grid>
    </div>
  );
};

export default App;
