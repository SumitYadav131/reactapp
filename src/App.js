import logo from './logo.svg';
import React from 'react';
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
// import Counter from './components/Counter';
// import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './hookcomponents/HookCounter';
import HookCounterTwo from './hookcomponents/HookCounterTwo';
import HookCounterThree from './hookcomponents/HookCounterThree';
import HookCounterFour from './hookcomponents/HookCounterFour';
import EffectCounterOne from './hookcomponents/EffectCounterOne';
import HookMouse from './hookcomponents/HookMouse';
import MouseContainer from './hookcomponents/MouseContainer';
import IntervalHookCounter from './hookcomponents/IntervalHookCounter';
import DataFetching from './hookcomponents/DataFetching';
import ComponentC from './hookcomponents/ComponentE';
import CounterOne from './hookcomponents/CounterOne';
import CounterTwo from './hookcomponents/CounterTwo';
import CounterThree from './hookcomponents/CounterThree';
import ParentComponent from './hookcomponents/ParentComponent';
import Counter from './hookcomponents/Counter';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


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

      {/* <PostForm /> */}

      {/* React Hooks */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <EffectCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}

      {/* <UserContext.Provider value={'Abhishek'} >
        <ChannelContext.Provider value={'MyDevIt'}>
        <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}

      {/* <ParentComponent /> */}
      <Counter />
      
    </div>
  );
}

export default App;
