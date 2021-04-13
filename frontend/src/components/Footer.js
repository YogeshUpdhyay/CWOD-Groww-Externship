import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Footer() {
  return (
    <BigContainer>
      <Container>
        <AboutWrapper>
          <AddressLogoWrapper>
            <GrowwLogo>
              <img
                alt="Groww Logo"
                src="https://assets-netstorage.groww.in/website-assets/prod/1.4.2/build/client/images/logo-light-groww.1815ad63.svg"
              />
            </GrowwLogo>
            <GrowwAdrress>
              <p>No. 11, 2nd floor,80 FT Road</p>
              <p>4th Block, S.T Bed</p>
              <p>Koramangala, Bengaluru - 560034</p>
            </GrowwAdrress>
            <GrowwContact>
              <u>Contact Us</u>
            </GrowwContact>
            <GrowwSocials>
              <Facebook>
                <img
                  alt="Facebook"
                  src="https://assets-netstorage.groww.in/website-assets/prod/1.4.2/build/client/images/fb_icon_groww.1c94e937.svg"
                />
              </Facebook>
              <Twitter>
                <img
                  alt="Twitter"
                  src="https://assets-netstorage.groww.in/website-assets/prod/1.4.2/build/client/images/twitter_icon_groww.4cb988f6.svg"
                />
              </Twitter>
              <Youtube>
                <img
                  alt="Youtube"
                  src="https://assets-netstorage.groww.in/website-assets/prod/1.4.2/build/client/images/yt_icon_groww.ec96b677.svg"
                />
              </Youtube>
              <Instagram>
                <img
                  alt="Instagram"
                  src="https://assets-netstorage.groww.in/website-assets/prod/1.4.2/build/client/images/instagram_icon_groww.0454c1a2.svg"
                />
              </Instagram>
              <Linkedin>
                <img
                  alt="Linkedin"
                  src="https://assets-netstorage.groww.in/website-assets/prod/1.4.2/build/client/images/linkedin_icon_groww.b15f8240.svg"
                />
              </Linkedin>
              <Telegram>
                <img
                  alt="Telegram"
                  src="https://assets-netstorage.groww.in/website-assets/prod/1.4.2/build/client/images/telegram_icon_groww.f6524497.svg"
                />
              </Telegram>
            </GrowwSocials>
          </AddressLogoWrapper>
          <AboutGrowwColumn>
            <h3>GROWW</h3>
            <p>About Us</p>
            <p>AMC Mutual Funds</p>
            <p>Pricing</p>
            <p>Groww Q&A </p>
            <p>Blog</p>
            <p>Media & Press</p>
            <p>Help & Support</p>
          </AboutGrowwColumn>

          <ExploreColumn>
            <h3>EXPLORE</h3>
            <p>Mutual Funds</p>
            <p>Stocks</p>
            <p>NFO</p>
            <p>Mutual Funds Categories</p>
            <p>US Stocks</p>
            <p>Gold</p>
            <p>EFTs</p>
          </ExploreColumn>

          <ResourcesColumn>
            <h3>RESOURCES</h3>
            <p>Mutual Fund Beginners</p>
            <p>Learn Stock Market</p>
            <p>Calculators</p>
            <p>Gloassary</p>
            <p>Compare Funds</p>
            <p>Switch to Groww</p>
            <p>Download Forms</p>
          </ResourcesColumn>
        </AboutWrapper>
        <HorizontalLine>
          <p></p>
        </HorizontalLine>
        <CopyrightWrapper>
          <CopyrightText>
            ⓒ&nbsp;2016-2021 Groww. All rights reserved, Built with{" "}
            <span style={{ color: "red" }}>♥️</span> in India
          </CopyrightText>
          <DownloadAppWrapper>
            <AppStore>
              <img
                alt="App store"
                src="https://assets-netstorage.groww.in/website-assets/prod/1.4.2/build/client/images/app-store-logo.060773ea.svg"
              />
            </AppStore>
            <PlayStore>
              <img
                alt="Play store"
                src="https://assets-netstorage.groww.in/website-assets/prod/1.4.2/build/client/images/google-play-badge.0547a72f.svg"
              />
            </PlayStore>
          </DownloadAppWrapper>
        </CopyrightWrapper>
      </Container>
      <PopularStockWrapper>
        <PopularStockHeader>MOST POPULAR ON GROWW</PopularStockHeader>
        <StockMarkets>
          STOCK MARKET INDICES:&nbsp;&nbsp;
          <span style={{ color: "#00d09c" }}>
            S&P BSE SENSEX | S&P BSE 100 | NIFTY 100 | NIFTY 50 | NIFTY MIDCAP
            100 | NIFTY BANK | NIFTY NEXT 50
          </span>
        </StockMarkets>
        <MutualFunds>
          POPULAR MUTUAL FUNDS:&nbsp;&nbsp;
          <span style={{ color: "#00d09c" }}>
            AXIS BLUECHIP FUND | MOTILAL OSWAL S&P 500 INDEX FUND | PARAG PARIKH
            LONG TERM EQUITY FUND | SBI SMALL CAP FUND | HDFC BALANCE ADVANTAGE
            FUND | AXIS LONG TERM EQUITY FUND | UTI NIFTY INDEX FUND | AXIS
            MIDCAP FUND | SBI BLUECHIP FUND | MIRAE ASSET EMERGING BLUECHIP FUND
          </span>
        </MutualFunds>
        <MutualCompanies>
          MUTUAL FUNDS COMPANIES:&nbsp;&nbsp;
          <span style={{ color: "#00d09c" }}>
            ICICI PRUDENTIAL | HDFC | NIPPON INDIA | ADITYA BIRLA SUN LIFE | SBI
            | UTI | FRANKLIN TEMPLETON | KOTAK MAHINDRA | IDFC | DSP | AXIS |
            TATA | L&T | SUNDARAM | PGIM | INVESCO | LIC | JM FINANCIAL | BARODA
            PIONEER | CANARA ROBECO | HSBC | IDBI | INDIABULLS | MOTILAL OSWAL |
            BNP PARIBAS | MIRAE ASSET | PRINCIPAL | BOI AXA | UNION KBC | TAURAS
            | EDELWEISS | ESSEL | MAHINDRA | QUANTUM | PPFAS | IIFL | QUANT |
            SHRIRAM | SAHARA | ITI
          </span>
        </MutualCompanies>
        <Tools>
          TOOLS:&nbsp;&nbsp;
          <span style={{ color: "#00d09c" }}>
            BROKERAGE CALCULATOR | MARGIN CALCULATOR | SIP CALCULATOR | SWP
            CALCULATOR | SUKANYA SAMRIDDHI YOJANA CALCULATOR | MUTUAL FUND
            RETURNS CALCULATOR | FD CALCULATOR | RD CALCULATOR | EMI CALCULATOR
            | PPF CALCULATOR | EPF CALCULATOR | NPS CALCULATOR | GRATUITY
            CALCULATOR
          </span>
        </Tools>
        <Policy>
          <span style={{ color: "#80868b" }}>
            NSE | BSE | Terms and Conditions | Policies and Procedures |
            Regulatory & Other Info | Privacy Policy | Disclosure | Security
          </span>
        </Policy>
        <HorizontalLine2>
          <p></p>
        </HorizontalLine2>
        <AboutGrowwRow>
          <Text>ABOUT GROWW</Text>
          <ExpandMoreIcon />
        </AboutGrowwRow>
      </PopularStockWrapper>
    </BigContainer>
  );
}

export default Footer;

const BigContainer = styled.div`
  background-color: #1e2232;
`;

const Container = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 12%;
  padding-right: 12%;
`;

const AboutWrapper = styled.div`
  display: flex;
  background-color: #1e2232;
  color: white;
  padding-top: 40px;
  width: 100%;
  font-size: 16px;
  padding-bottom: 12px;
`;

const AddressLogoWrapper = styled.div``;

const GrowwLogo = styled.div`
  margin-bottom: 30px;
  display: flex;
  img {
    height: 45px;
    object-fit: contain;
  }
`;

const GrowwAdrress = styled.div`
  display: flex;
  text-align: start;
  padding-left: 12px;
  flex-direction: column;
  p {
    margin-bottom: 3px;
    font-size: 15px;
  }
`;

const GrowwContact = styled.div`
  text-align: start;
  padding-left: 12px;
`;

const GrowwSocials = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
  justify-content: space-evenly;
`;
const Facebook = styled.div`
  img {
    height: 30px;
    object-fit: contain;
  }
`;
const Twitter = styled.div`
  img {
    height: 30px;
    object-fit: contain;
  }
`;
const Youtube = styled.div`
  img {
    height: 30px;
    object-fit: contain;
  }
`;
const Instagram = styled.div`
  img {
    height: 30px;
    object-fit: contain;
  }
`;
const Telegram = styled.div`
  img {
    height: 30px;
    object-fit: contain;
  }
`;
const Linkedin = styled.div`
  img {
    height: 30px;
    object-fit: contain;
  }
`;
const AboutGrowwColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  flex: 0.4;
  margin-left: 3%;
  p {
    margin-bottom: 3px;
    margin-top: 3px;
    font-size: 15px;
  }
  h3 {
    color: white;
    margin-top: 10px;
  }
`;
const ExploreColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  flex: 0.4;
  p {
    margin-bottom: 3px;
    margin-top: 3px;
    font-size: 15px;
  }
  h3 {
    color: white;
    margin-top: 10px;
  }
`;

const ResourcesColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  flex: 0.4;
  p {
    margin-bottom: 3px;
    margin-top: 3px;
    font-size: 15px;
  }
  h3 {
    color: white;
    margin-top: 10px;
  }
`;
const CopyrightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: white;
  background-color: #1e2232;
  padding-bottom: 20px;
`;
const CopyrightText = styled.div``;
const DownloadAppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 0.6;
`;
const AppStore = styled.div`
  display: flex;
`;
const PlayStore = styled.div`
  display: flex;
`;

const HorizontalLine = styled.div`
  background-color: #1e2232;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    height: 1px;
    display: flex;
    opacity: 0.2;
    width: 100%;
    background-color: white;
    margin-top: 15px;
  }
`;
const PopularStockWrapper = styled.div`
  background-color: #191c27;
  color: white;
  font-size: 15px;
  font-weight: 500;
  padding-left: 12%;
  padding-right: 12%;
`;
const PopularStockHeader = styled.div`
  display: flex;
  padding-top: 30px;
  margin-bottom: 30px;
`;
const StockMarkets = styled.div`
  text-align: start;
  margin-bottom: 20px;
`;
const MutualFunds = styled.div`
  margin-bottom: 20px;
  text-align: start;
`;
const MutualCompanies = styled.div`
  margin-bottom: 20px;
  text-align: start;
`;
const Tools = styled.div`
  margin-bottom: 40px;
  text-align: start;
`;
const Policy = styled.div`
  margin-bottom: 35px;
  text-align: start;
`;
const AboutGrowwRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 23px;
`;
const Text = styled.div``;

const HorizontalLine2 = styled.div`
  background-color: #191c27;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    height: 1px;
    display: flex;
    opacity: 0.2;
    width: 100%;
    background-color: white;
  }
`;
