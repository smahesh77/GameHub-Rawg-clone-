import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    // template is like the layout of our site
    // its like we define the areas in the  form rows and columns like matrix
    <div>
      <Grid
        templateAreas={{
          base: `"nav " " main"`, // we dont want aside for mobile devices,
          lg: `"nav nav" "aside main"`, // for devices greater than 1024px, this basically defines all the ares of our component
        }}
      >
        <GridItem area="nav" >
          {" "}
          <NavBar></NavBar>
        </GridItem>
         <Show above="lg"> {/*the show will only render the components under it if it is above or below a certain size */}
          <GridItem area="aside" bg={"gold"}>
            {" "}
            Aside
          </GridItem>
        </Show>

        <GridItem area="main" bg={"green"}>
          {" "}
          Main
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
