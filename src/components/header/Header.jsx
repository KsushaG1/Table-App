import {
  AppBar,
  Avatar,
  Box,
  Button,
  Typography,
  Container,
  IconButton,
  LinearProgress,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

export const Header = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ background: "#fff" }}>
        <LinearProgress
          sx={{
            position: "fixed",
            width: "100%",
          }}
        />
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <IconButton edge="start" color="primary">
                Table App
              </IconButton>
            </Link>
            <Box sx={{ display: "flex", alignItems: 'center' }}>
              <Button
                variant="outlined"
                component="a"
                href="/"
                endIcon={<LoginIcon />}
              >
                <Box sx={{ display: "flex", alignItems: 'center' }}>
                  <Avatar sx={{ width: 24, height: 24, marginRight: 1 }} />
                  <Typography component="span">Гаврилова Ксения</Typography>
                </Box>
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
