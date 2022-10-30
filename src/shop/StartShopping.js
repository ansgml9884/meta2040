import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function StartShopping() {
  const navigate = useNavigate();

  const onSetPageToShppingMall = () => {
    navigate("/purchase");
  };
  return (
    <Grid
      id="startshopping_page"
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
      onClick={onSetPageToShppingMall}
    >
      <Button variant="contained">Welcome to Samsung.com</Button>
    </Grid>
  );
}

export default StartShopping;
