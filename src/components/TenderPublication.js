import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom';

const TenderPublication = () => {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <body>
        <Header/>
        
        <div id='title' >
            <h2>Publication of tender</h2>
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
                <label>Date of preparation of tender document</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div id='div'>
                <label className='form-label'>Date of submission of the document in the tender commitee for approval</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label>Date of CBM approval</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label>Date of tender publication</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div className='position-relative'>
                <NavLink to='/openingOfBids'>
                    <button className='btn btn-info position-absolute end-0'>Next page</button>
                </NavLink>
                <NavLink to='/publication'>
                    <button className='btn btn-info position-absolute start-0'>Previous page</button>
                </NavLink>
                       
            </div>
        </div>
    
    </body>
    </>
  )
}

export default TenderPublication