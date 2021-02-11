import './App.css';
import RouterContainer from './App/Page'
import Footer from './App/Page/layout/Footer'
import Header from './App/Page/layout/Header'
import styled from 'styled-components'

let Styled = styled.div`{
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  main{
    flex: 1 1 auto;
  }
  
}`

function App() {
  return (
    <Styled>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <RouterContainer />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </Styled>
  );
}
export default App;
