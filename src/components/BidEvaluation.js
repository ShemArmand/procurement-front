import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom';

const BidEvaluation = () => {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <body>
        <Header/>
        <div id='title'>
            <h2>Bid Evaluation date</h2>
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
                <label className='form-label'>Bid evaluation date</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Bid validity starting date</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Bid validity ending date</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Notification date</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Contract negotiation date</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Contract amount</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='text'/>
            </div>
            <hr/>
            <div className='position-relative'>
                <NavLink to='/contractSigning'>
                    <button className='btn btn-info position-absolute end-0'>Next page</button>
                </NavLink>
                <NavLink to='/openingOfBids'>
                    <button className='btn btn-info position-absolute start-0'>Previous page</button>
                </NavLink>
                                   
            </div>
        </div>
    </body>
    </>
  )
}

export default BidEvaluation