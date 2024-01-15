import React, {useState} from 'react';
import data from '../Data/Simulated';
import BottomNavbar from '../Components/BottomNavbar';
import Footer from '../Components/footer';
import '../Styling/form.css';
import Mapper from '../Components/Mapper';
import {Admin} from '../Admin/Admin';
import {useEffect} from 'react';
import {useRef} from 'react';

function Control () {
  const admin = new Admin ();
  var [temp0, setTemp0] = useState ([
    {
      FirstName: 'No user info available',
      LastName: '',
      UserName: '',
      Email: '',
      Location: [],
    },
  ]);
  var [temp1, setTemp1] = useState ([
    {
      FirstName: 'No user info available',
      LastName: '',
      UserName: '',
      Email: '',
      Location: [],
    },
  ]);

  useEffect (() => {
    admin.viewAllUsers ();
    setTimeout (() => {
      setTemp0 (admin.riders);
      setTemp1 (admin.customers);
    }, 3000);
  }, []);

  return (
    <div className="Mainn">
      <div className="topSection">
        <div className="title">
          <div className="title0"><text>Payload</text></div>
          <div className="title1"><text>Admin Control</text></div>
        </div>
      </div>
      <h3>Customers</h3>
      <div className="control">
        <Mapper
          data={temp0}
          style={{
            width: '100%',
            height: '20px',
            backgroundColor: '#eee',
            marginBottom: '20px',
            padding: '20px',
            borderRadius: '5px',
          }}
          style0={{width: '40%', height: '90%', padding: '10px'}}
        />
        <div className='stats'>
           <h4>Total</h4>
           <div>

           </div>
           <div>
            
           </div>
        </div>
      </div>
      <h3>Riders</h3>
      <div className="control">
        <Mapper
          data={temp1}
          style={{
            width: '100%',
            height: '20px',
            backgroundColor: '#eee',
            marginBottom: '20px',
            padding: '20px',
            borderRadius: '5px',
          }}
          style0={{width: '50%', height: '90%', padding: '10px'}}
        />
        <div className="stats" />
      </div>
      <div id="navbar">
        <BottomNavbar />
      </div>
      <div className="bottom">
        <text>PKGDEL @2023</text>
      </div>
    </div>
  );
}

export default Control;
