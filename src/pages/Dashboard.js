import React from 'react';
import NavigationBar from '../layout/NavigationBar';
import '../resources/static/css/dashboard.css';

const Dashboard = () => {
  return (
    <>
      <NavigationBar />
      <div className='container'>
        <section className='section'>
          <div class="cards">
            <a class="card income" href="/">
              <p>Total Income</p>
              <p class="small">Card description with lots of great facts and interesting details.</p>
              <div class="go-corner" href="#">
                <div class="go-arrow">→</div>
              </div>
            </a>
            <a class="card expenses" href="/">
              <p>Total Expenses</p>
              <p class="small">Card description with lots of great facts and interesting details.</p>
              <div class="go-corner" href="#">
                <div class="go-arrow">→</div>
              </div>
            </a>
            <a class="card savings" href="/">
              <p>Total Savings</p>
              <p class="small">Card description with lots of great facts and interesting details.</p>
              <div class="go-corner" href="#">
                <div class="go-arrow">→</div>
              </div>
            </a>
            <a class="card status" href="/">
              <p>Budget Status</p>
              <p class="small">Card description with lots of great facts and interesting details.</p>
              <div class="go-corner" href="#">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
