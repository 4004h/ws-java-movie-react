//로딩페이지
import { clear } from '@testing-library/user-event/dist/clear';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [LoadCounter, setLoadCounter] = useState(0)

  useEffect(
    ()=>{
      console.log("123")// 타이머가 끝나도 실행됨
      const loadTimer = setInterval(() => { // function IncreaseCounter()
        let count = LoadCounter+1
        if(count > 10)
        {
          setIsLoading(false)
          clearInterval(loadTimer) 
        }
        setLoadCounter(count)
      }, 1000);

      //clearInterval 없으면 숫자가 이상하게 나옴
      return ()=>{ clearInterval(loadTimer) }

    },[LoadCounter]
  )

  return (
    <div className="App">
      {isLoading ? `loading... ${LoadCounter}` : `Loaded`}

    </div>
  );
}

export default App;
