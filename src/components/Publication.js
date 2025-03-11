import React from 'react'
import Header from './Header'
import'./Header.css'
import { NavLink } from 'react-router-dom';

const Publication = () => {
  return (
    <>
    <section>
        <Header/>
        <div id='title' >
            <h2>Publication of procurement plan</h2>
        </div>
            <div id = 'container'>
            <div>
                <label class='form-label'>Tender Title</label>
            </div>
            <div>
                <text>__________</text>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Date of initial procurement plan publication</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Date of quarter II procurement plan publication</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Date of quarter III procurement plan publication</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Add more revision</label>
            </div>
            <div>
                <textarea id='textArea'></textarea>
            </div>
            <hr/>
            <div>
                <label className='form-label'>TAT Publication</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='text' placeholder='0'/>
            </div>
            <hr/>
            <div className='position-relative'>
            <NavLink to='/tenderPublication'>
                <button className='btn btn-info position-absolute end-0'>Next page</button>
            </NavLink>
            <NavLink to='/planningPhase'>
                <button className='btn btn-info position-absolute start-0'>Previous page</button>
            </NavLink>
            
        </div>
        </div>
    </section>
    </>
  )
}

export default Publication