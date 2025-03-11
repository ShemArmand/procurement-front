import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom';

const OpeningBids = () => {
  return (
    <>
    <section>
        <Header/>
        <div id='title' >
            <h2>Opening of Bids</h2>
        </div>
        <div id='container'>
            <div>
                <label class='form-label'>Tender Title</label>
            </div>
            <div>
                <text>__________</text>
            </div>
            <hr/>
            <div>
                <label>Date of opening bids</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div className='position-relative'>
                <NavLink to='/bidEvaluation'>
                    <button className='btn btn-info position-absolute end-0'>Next page</button>
                </NavLink>
                <NavLink to='/tenderPublication'>
                    <button className='btn btn-info position-absolute start-0'>Previous page</button>
                </NavLink>
                                   
                        </div>

        </div>
    </section>
    </>
  )
}

export default OpeningBids