import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import MakeAdmin from "../Admin/MakeAdmin/MakeAdmin";
import AdminRoute from "../../Registration/AdminRoute/AdminRoute";
import AddProducts from "../Admin/AddAProducts/AddProducts";
import ManageAllOrders from "../Admin/ManageAllOrders/ManageAllOrders";
import ManageAllProducts from "../Admin/ManageAllProducts/ManageAllProducts";
import MyOrders from "../Users/MyOrders/MyOrders";
import Review from "../Users/Review/Review";
import ComingSoon from "../../ComingSoon/ComingSoon";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="d-flex flex-column align-items-canter">
      <Toolbar />
      <Divider />
      {!admin && (
        <List>
          <Link className="DashboardLink" to="/home">
            <ListItem className="dashboardLinks" button>
              <i class="fas fa-home"></i> Home
            </ListItem>
          </Link>
          <Link className="DashboardLink" to={`${url}/userPay`}>
            <ListItem className="dashboardLinks" button>
              <i class="fas fa-shopping-cart"></i> Payment
            </ListItem>
          </Link>

          <Link className="DashboardLink" to={`${url}/myOrders`}>
            <ListItem className="dashboardLinks" button>
              <i class="fas fa-shopping-bag"></i> My Orders
            </ListItem>
          </Link>

          <Link className="DashboardLink" to={`${url}/reviews`}>
            <ListItem className="dashboardLinks" button>
              <i class="far fa-grin-stars"></i> Reviews
            </ListItem>
          </Link>
          <Link className="DashboardLink" to="/login">
            <ListItem className="dashboardLinks" button>
              <i class="fas fa-sign-out-alt"></i> Log Out
            </ListItem>
          </Link>
        </List>
      )}

      {admin && (
        <List>
          <Link className="DashboardLink" to="/home">
            <ListItem className="dashboardLinks" button>
              <i class="fas fa-home"></i> Home
            </ListItem>
          </Link>
          <Link className="DashboardLink" to={`${url}/makeAdmin`}>
            <ListItem className="dashboardLinks" button>
              <i class="fas fa-users-cog"></i> Make Admin
            </ListItem>
          </Link>
          <Link className="DashboardLink" to={`${url}/addDoctor`}>
            <ListItem className="dashboardLinks" button>
              <i class="fas fa-car"></i> Add Products
            </ListItem>
          </Link>
          <Link className="DashboardLink" to={`${url}/manageAllOrders`}>
            <ListItem className="dashboardLinks" button>
              <i class="fas fa-cart-arrow-down "></i> Manage All orders
            </ListItem>
          </Link>
          <Link className="DashboardLink" to={`${url}/manageAllProducts`}>
            <ListItem className="dashboardLinks" button>
              <i class="fas fa-clipboard-list"></i> Manage Products
            </ListItem>
          </Link>
          <Link className="DashboardLink" to="/login">
            <ListItem className="dashboardLinks" button>
              <i class="fas fa-sign-out-alt"></i> Log Out
            </ListItem>
          </Link>
        </List>
      )}
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
          backgroundColor: "#ff725e80",
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
            {admin && "Admin Dashboard"}
            {!admin && "User Dashboard"}
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
          {admin ? (
            <Route exact path={path}>
              <ManageAllProducts></ManageAllProducts>
            </Route>
          ) : (
            <Route exact path={path}>
              <MyOrders></MyOrders>
            </Route>
          )}
          <AdminRoute path={`${path}/manageAllProducts`}>
            <ManageAllProducts></ManageAllProducts>
          </AdminRoute>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/userPay`}>
            <ComingSoon></ComingSoon>
          </Route>
          <Route path={`${path}/reviews`}>
            <Review></Review>
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
