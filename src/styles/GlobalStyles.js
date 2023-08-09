import { createGlobalStyle } from "styled-components";
import { device } from "../utils/sizes";

const GlobalStyles = createGlobalStyle`

  :root{
    --color-white:#fff;
    --color-dark-blue:#140628;
    --color-blue:#14094a;
    --color-green:#0ECB81;
    --color-red:#FF0219;
    --color-background:#1B1229;
    --color-hover:#200840;

    --background-linear-home:linear-gradient(#140628 80%, #14094a 100%);
    --background-linear-coin:linear-gradient(#14094a 0%, #140628 20%);

    --text-linear:linear-gradient(25deg ,#2600fc 0%,#ff00ea 100%);
    --button-linear:linear-gradient(25deg ,#2600fc 0%,#ff00ea 100%);

    --shadow-button:1rem 2rem 4rem rgba(0,0,0,0.5);
    --shadow-header:0 1rem 4rem rgba(0,0,0,0.4);
    --shadow-button-hover:0 1rem 4rem 4rem rgba(255, 0, 234, 0.1);

    --border-small:1px solid #444;
  }

*,*::after,*::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html{
  font-size: 62.5%;
  overflow-x: hidden;
}

body{
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
  min-height: 100vh;
  background: var(--background-linear-coin);
  color: white;
}

body::-webkit-scrollbar {
  width: 1rem;
}

body::-webkit-scrollbar-thumb {
  background-color: #ff00ea;
  border-radius: 10px;
}

@media ${device.laptop}{
  html{
    font-size: 56.25%;
  }
}

 @media ${device.mobile} {
    html{
      font-size: 50%;
    }
  }

`;

export default GlobalStyles;
