import Header from './Header';
import MainContent from './MainContent';

export default function App() {
  return (
    <div className="app">
      <Header />
      <MainContent>
        <p>1/15</p>
        <p>Question 1</p>
      </MainContent>
    </div>
  );
}
