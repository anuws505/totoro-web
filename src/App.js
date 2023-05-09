import './App.scss';
import { useState } from 'react';
// import SpinLoader from './components/SpinLoader/SpinLoader';

function App() {
  // const flag = true;
  // const spinn = (flag) ? <SpinLoader /> : '';
  const totoroJson = {
    customer: 'guest',
    sale: 'pom',
    createAt: '2023-05-09 12:02:31',
    modifyAt: [
      '2023-05-09 12:02:31','2023-05-09 12:03:10',
      '2023-05-09 12:05:11','2023-05-09 13:11:06'
    ],
    numbers: [
      {
        number: '09',
        direct: {
          price: 100,
          multiple: 70,
          total: 100,
          reward: {
            reward: false,
            total: 7000
          }
        },
        mix: {
          price: 100,
          multiple: 35,
          total: 100,
          reward: {
            reward: false,
            total: 3500
          }
        }
      },
      {
        number: '31',
        direct: {
          price: 200,
          multiple: 70,
          total: 200,
          reward: {
            reward: false,
            total: 14000
          }
        },
        mix: {
          price: 200,
          multiple: 35,
          total: 200,
          reward: {
            reward: false,
            total: 7000
          }
        }
      }
    ],
    grandTotal: 600,
    tax: {
      percent: 15,
      total: 90,
      grandTotalBeforTax: 510
    }
  };
  const [uname, setUname] = useState('');
  const [passwd, setPasswd] = useState('');

  return (
    <>
      <div className="App">
        <button type='button'
        >เพิ่ม</button>

        <div>{JSON.stringify(totoroJson)}</div>

        <input type='text'
               name='uname'
               placeholder='uname'
               value={uname}
               onChange={(v) => setUname(v.target.value)}
        />
        <input type='password'
               name='passwd'
               placeholder='passwd'
               value={passwd}
               onChange={(v) => setPasswd(v.target.value)}
        />
      </div>
    </>
  );
}

export default App;
