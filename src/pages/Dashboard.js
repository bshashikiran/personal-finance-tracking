import React from 'react';
import NavigationBar from '../layout/NavigationBar';
import '../resources/static/css/dashboard.css';

const Dashboard = ({ setIsAuthenticated }) => {
  return (
    <>
      <NavigationBar setIsAuthenticated={setIsAuthenticated} />
      <div className='container'>
        <section className='section'>
          <div className="cards">
            <a className="card income" href="/">
              <p>Total Income</p>
              <p className="small">Card description with lots of great facts and interesting details.</p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </a>
            <a className="card expenses" href="/">
              <p>Total Expenses</p>
              <p className="small">Card description with lots of great facts and interesting details.</p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </a>
            <a className="card savings" href="/">
              <p>Total Savings</p>
              <p className="small">Card description with lots of great facts and interesting details.</p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </a>
            <a className="card status" href="/">
              <p>Budget Status</p>
              <p className="small">Card description with lots of great facts and interesting details.</p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
