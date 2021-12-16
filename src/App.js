import React, { useState } from 'react';
import './App.css';
import ContentArea from './ContentArea';
import RightSideContent from './RightSideContent';
import Sidebar from './Sidebar';

function App() {

  const [myClass, setMyClass] = useState("");
  console.log(myClass, 'my');

  return (
    <div className="myApp">
      <Sidebar sideBarClass={myClass} />
      <ContentArea getClassName={(className) => setMyClass(className)} />
      <RightSideContent />
    </div>
  );
}

export default App;
