import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom';
const Invoice = () => {
  return (
    <>
    <section>
        <Header/>
        <div id='title'>
            <h2>Invoice</h2>
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
                <label class='form-label'>Invoice submission date</label>
            </div>
            <div id='proc-div'>
                <input type='date' className='form-control'/>
            </div>
            <hr/>
            <div>
                <label class='form-label'>Invoice received by the finance officer date</label>
            </div>
            <div id='proc-div'>
                <input type='date' className='form-control'/>
            </div>
            <hr/>
            <div>
                <label class='form-label'>Request for payment date</label>
            </div>
            <div id='proc-div'>
                <input type='date' className='form-control'/>
            </div>
            <hr/>
            <div>
                <label class='form-label'>Date of invoice payment</label>
            </div>
            <div id='proc-div'>
                <input type='date' className='form-control'/>
            </div>
            <hr/>
            <div className='position-relative'>
                <NavLink to='/'>
                    <button className='btn btn-info position-absolute end-0'>Submit</button>
                </NavLink>
                <NavLink to='/contractManagement'>
                    <button className='btn btn-info position-absolute start-0'>Previous page</button>
                </NavLink>                                   
            </div>
        </div>

    </section>
    </>
  )
}

export default Invoice