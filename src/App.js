import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import Counter from './components/Counter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      {/* <NameList /> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}

      {/* <ErrorBoundary>
      <Hero heroname='superman' />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname='batman' />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname='joker' />
      </ErrorBoundary> */}

      {/* <ClickCounter name='Abhishek' />
      <HoverCounter name='Abhishek' /> */}

      {/* <ClickCounterTwo />
      <HoverCounterTwo /> */}

      {/* <Counter render={(count,increamentCount)=>(
        <ClickCounterTwo count={count} increamentCount={increamentCount} />
      )} /> */}

      {/* <Counter>
        {(count,increamentCount)=>(
        <ClickCounterTwo count={count} increamentCount={increamentCount} />)}
      </Counter>
      <Counter>
        {(count,increamentCount)=>(
        <HoverCounterTwo count={count} increamentCount={increamentCount} />)}
      </Counter>  */}


      {/* <UserProvider value='Abhishek' >
        <ComponentC />
      </UserProvider> */}

      {/* <PostList /> */}

      <PostForm />
    </div>
  );
}

export default App;
