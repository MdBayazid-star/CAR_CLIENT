import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from "@mui/material";
// import DashboardHome from "../DashboardHome/DashboardHome";
import useAuth from "../../../Hooks/useAuth";
import MakeAdmin from "../Admin/MakeAdmin/MakeAdmin";
import AdminRoute from "../../Registration/AdminRoute/AdminRoute";
import AddProducts from "../Admin/AddAProducts/AddProducts";
import ManageAllOrders from "../Admin/ManageAllOrders/ManageAllOrders";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="d-flex flex-column align-items-canter">
      <Toolbar />
      <Divider />
      {!admin && (
        <Box>
          <Link to="/home">
            <button className="btn-Car my-2">
              <i class="fas fa-home"></i> Home
            </button>
          </Link>
          <Link to={`${url}/userPay`}>
            <button className="btn-Car my-2">
              <i class="fas fa-wallet"></i> Payment
            </button>
          </Link>
          <Link to={`${url}/myOrders`}>
            <button className="btn-Car my-2">
              <i class="fas fa-shopping-bag"></i> My Orders
            </button>
          </Link>
          <Link to={`${url}/reviews`}>
            <button className="btn-Car my-2">
              <i class="far fa-grin-stars"></i> Reviews
            </button>
          </Link>
          <Link to="/login">
            <button onClick={logout} className="btn-Car my-2">
              <i class="fas fa-sign-out-alt"></i> Log Out
            </button>
          </Link>
        </Box>
      )}
      {admin && (
        <div className="d-flex flex-column align-items-canter">
          <Box>
            <Link to="/home">
              <button className="btn-Car my-2">
                <i class="fas fa-home"></i> Home
              </button>
            </Link>
            <Link to={`${url}/makeAdmin`}>
              <button className="btn-Car my-2">
                <i class="fas fa-users-cog"></i> Make Admin
              </button>
            </Link>
            <Link to={`${url}/addDoctor`}>
              <button className="btn-Car my-2">
                <i class="fas fa-car"></i> Add Products
              </button>
            </Link>
            <Link to={`${url}/manageAllOrders`}>
              <button className="btn-Car my-2 px-3">
                <i class="fas fa-cart-arrow-down "></i> Manage All orders
              </button>
            </Link>
            <Link to={`${url}/manageAllProducts`}>
              <button className="btn-Car my-2 px-3">
                <i class="fas fa-clipboard-list"></i> Manage All Products
              </button>
            </Link>
            <Link to="/login">
              <button onClick={logout} className="btn-Car my-2">
                <i class="fas fa-sign-out-alt"></i> Log Out
              </button>
            </Link>
          </Box>
        </div>
      )}
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            {/* <DashboardHome></DashboardHome> */}
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addDoctor`}>
            <AddProducts></AddProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
