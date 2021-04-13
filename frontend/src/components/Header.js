import React, { useState, useEffect } from "react";
import { Menu, Dropdown } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import AuthModal from "./Auth/AuthModal";
import "react-responsive-modal/styles.css";
import "antd/dist/antd.css";
import axios from "axios";

function Header({ userData }) {
  const [isUserLogged, setIsUSerLogged] = useState(false);
  const [kyc, setKyc] = useState("Verify KYC");

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const logout = () => {
    console.log("logout");
    localStorage.clear();
    setIsUSerLogged(false);
  };

  useEffect(() => {
    if (localStorage.getItem("accesstoken")) {
      setIsUSerLogged(true);
    }
  }, [isUserLogged]);

  const menu = (
    <Menu>
      <UserInformation>
        <Avatar
          alt="Priyansh Jain"
          src="https://e7.pngegg.com/pngimages/722/477/png-clipart-computer-icons-user-profile-avatar-face-heroes.png"
        />
        <NameAndEmail>
          <Name>{userData.name}</Name>
          <Email>{userData.email}</Email>
        </NameAndEmail>
      </UserInformation>
      <Menu.Item
        key="2"
        onClick={() => {
          let config = {
            headers: {
              accesstoken: localStorage.getItem("accesstoken"),
            },
          };
          axios
            .get("/api/v1/auth/kyc", config)
            .then((res) => {
              setKyc("KYC Verified");
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <BankBalance>
          <AccountBalanceOutlinedIcon />
          &nbsp; {kyc}
        </BankBalance>
      </Menu.Item>
      <Divider />
      <Menu.Item key="3">
        <Funds>
          <DescriptionOutlinedIcon />
          &nbsp; Import Funds
        </Funds>
      </Menu.Item>
      <Menu.Item key="4">
        <WatchList>
          <BookmarkBorderOutlinedIcon />
          &nbsp; Watchlist
        </WatchList>
      </Menu.Item>
      <Divider />
      <Menu.Item key="5">
        <Link to="/orders/stocks">
          <Orders>
            <DescriptionOutlinedIcon />
            &nbsp; Orders
          </Orders>
        </Link>
      </Menu.Item>
      <Menu.Item key="6">
        <SIP>
          <DateRangeOutlinedIcon />
          &nbsp; SIPs
        </SIP>
      </Menu.Item>
      <Divider />
      <Menu.Item key="7">
        <HelpSupport>
          <PhoneOutlinedIcon />
          &nbsp; Help & Support
        </HelpSupport>
      </Menu.Item>
      <Menu.Item key="8">
        <Settings>
          <SettingsOutlinedIcon />
          &nbsp; Settings
        </Settings>
      </Menu.Item>
      <Divider />
      <Menu.Item key="9" onClick={logout}>
        <LogOut>
          <ExitToAppOutlinedIcon />
          &nbsp; Log Out
        </LogOut>
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderContainer>
      <HeaderLogo>
        <img
          alt="Groww Logo"
          src="https://assets-netstorage.groww.in/website-assets/prod/1.4.2/build/client/images/logo-dark-groww.83f43714.svg"
        />
      </HeaderLogo>

      <HeaderLinks>
        <Link to="/stocks">
          <Explore>Explore</Explore>
        </Link>
        <Investment>Investments</Investment>
      </HeaderLinks>

      <HeaderSearch>
        <input placeholder="Search stocks and mutual funds"></input>
        <SearchIcon />
      </HeaderSearch>

      {isUserLogged ? (
        <HeaderIcons>
          <NotificationsNoneOutlinedIcon />
          <AccountBalanceWalletOutlinedIcon />
          {/* <Link to="/order/stocks"> */}
          <ShoppingCartOutlinedIcon />
          {/* </Link> */}
          <AvatarDropdown>
            <Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft">
              <Avatar
                alt="Priyansh Jain"
                src="https://e7.pngegg.com/pngimages/722/477/png-clipart-computer-icons-user-profile-avatar-face-heroes.png"
              ></Avatar>
              {/* <ExpandMoreIcon /> */}
            </Dropdown>
          </AvatarDropdown>
        </HeaderIcons>
      ) : (
        <LoginButton onClick={onOpenModal}>Login/Register</LoginButton>
      )}

      <AuthModal
        open={open}
        onCloseModal={onCloseModal}
        setIsUSerLogged={setIsUSerLogged}
      />
    </HeaderContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: {
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
    },
  };
};

export default connect(mapStateToProps, null)(Header);
// export default Header;

const HeaderContainer = styled.div`
  height: 80px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding-left: 12%;
  padding-right: 12%;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 43px;
    object-fit: contain;
  }
`;

const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  width: 22%;
  justify-content: space-evenly;
  a {
    color: black;
  }
`;

const Explore = styled.div``;

const Investment = styled.div``;

const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  height: 39px;
  width: 40%;
  box-shadow: 0 1px 5px 0 lightgrey;
  padding-right: 5px;
  margin-left: 1%;
  border-radius: 5px;
  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    padding-left: 10px;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  width: 23%;
  justify-content: space-evenly;
  margin-left: 2%;
`;

const AvatarDropdown = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .MuiAvatar-root {
    width: 34px;
    height: 34px;
  }
`;

const UserInformation = styled.div`
  display: flex;
  font-size: 15px;
  padding-left: 19px;
  padding-top: 10px;
  padding-bottom: 15px;
  background-color: #f9fafa;
  .MuiAvatar-root {
    width: 50px;
    height: 50px;
  }
`;

const NameAndEmail = styled.div`
  margin-left: 15px;
  margin-top: 5px;
`;

const Name = styled.div`
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #00d09c;
  }
`;

const Email = styled.div`
  font-weight: 400;
`;

const Divider = styled.div`
  height: 5px;
  background-color: #f9fafa;
`;

const BankBalance = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  font-size: 13px;
  height: 36px;
`;

const Funds = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  font-size: 13px;
  height: 36px;
`;

const WatchList = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  font-size: 13px;
  height: 36px;
`;

const Orders = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  font-size: 13px;
  height: 36px;
`;

const SIP = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  font-size: 13px;
  height: 36px;
`;

const HelpSupport = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  font-size: 13px;
  height: 36px;
`;

const Settings = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  font-size: 13px;
  height: 36px;
`;

const LogOut = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  font-size: 13px;
  height: 36px;
`;

const LoginButton = styled.button`
  margin-left: 8%;
  height: 42px;
  width: 14%;
  color: white;
  background-color: #00d09c;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
`;
