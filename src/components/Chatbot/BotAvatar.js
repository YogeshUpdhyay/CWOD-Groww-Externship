// Groww Logo as botAvatar with text as well

// import React from "react";
// import styled from "styled-components";

// function BotAvatar() {
//   return <BotAvatarContainer>G</BotAvatarContainer>;
// }

// export default BotAvatar;

// const BotAvatarContainer = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   font-size: 1.2rem;
//   margin-right: 12.5px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #00d09c;
//   color: white;
//   background-image: url("https://techunfolded.com/wp-content/uploads/2020/04/Groww-Mutual-fund-app.jpg");
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: relative;
// `;

// Groww logo as botAvatar

import React from "react";
import styled from "styled-components";

function BotAvatar() {
  return (
    <BotAvatarContainer>
      <img
        alt="Bot"
        src="https://techunfolded.com/wp-content/uploads/2020/04/Groww-Mutual-fund-app.jpg"
      />
    </BotAvatarContainer>
  );
}

export default BotAvatar;

const BotAvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.2rem;
  margin-right: 12.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00d09c;
  color: white;

  img {
    object-fit: contain;
    width: 50px;
  }
`;
