import './App.scss';
import { useState } from 'react';
// import SpinLoader from './components/SpinLoader/SpinLoader';

function App() {
  const [uname, setUname] = useState('');
  const [passwd, setPasswd] = useState('');
  const doSetUname = (v) => {
    setUname(v.target.value)
  };
  const doSetPasswd = (v) => {
    setPasswd(v.target.value)
  };

  const [unameLbl, setUnameLbl] = useState('');
  const [passwdLbl, setPasswdLbl] = useState('');
  const submitUandP = (e) => {
    e.preventDefault();
    (uname == '') ? setUnameLbl(<p className="red-txt">Input username please.</p>) : setUnameLbl('');
    (passwd == '') ? setPasswdLbl(<p className='red-txt'>Input password please.</p>) : setPasswdLbl('');
  };


  const totoroJson = {
    customer: 'guest',
    sale: 'pom',
    dateSold: '2023-05-10T18:44:31+07:00',
    type: 'UP',
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
      grandTotalBeforeTax: 510
    }
  };

  return (
    <>
      <div className="App">
        <div className='form-login'>
          <form onSubmit={(e) => submitUandP(e)}>
            <div className='form-login-row'>
              <input type='text'
                    name='uname'
                    placeholder='Username'
                    onChange={(v) => doSetUname(v)}
              />
              {unameLbl}
            </div>
            <div className='form-login-row'>
              <input type='password'
                    name='passwd'
                    placeholder='Password'
                    onChange={(v) => doSetPasswd(v)}
              />
              {passwdLbl}
            </div>
            <button type='submit'>ตกลง</button>
          </form>
          {/* <div>Hi, Guest / <span>Logout</span></div> */}
        </div>

        <div className='display-json'>
          <button type='button'>เพิ่ม</button>
          <div>{JSON.stringify(totoroJson)}</div>
        </div>
      </div>
    </>
  );
}

export default App;
