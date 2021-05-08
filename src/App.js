import * as React from "react";
import styled from "styled-components";

const Button = styled.a`
  height: 100px;
  width: 203px;
  background-color: palevioletred;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  width: 65vw;
  background-color: white;
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <Main>
        <div>This is React!</div>;<Button>Buttons!</Button>
      </Main>
    </Container>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
