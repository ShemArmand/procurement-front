import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom';

const ContractSigning = () => {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <body>
        <Header/>
        <div id='title'>
            <h2>Contract signing</h2>
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
                <label className='form-label'>Draft of the contract date</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Review and approval by the legal date</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Contractor/bidder approval date</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Contractor/bidder names</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='text'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Contractor/bidder email</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='text'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Contract/bidder phone number</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='text'/>
            </div>
            <div>
                <label className='form-label'>Performanc guarantee validity ending date</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Submission of performance guarantee date</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Performance guarantee validiity start date</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Approval of contract by the MOJ date</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Approval of the CBM date</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Contract start date</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Contract end date</label>
            </div>
            <div id='proc-div'>
                <input className='form-control' type='date'/>
            </div>
            <hr/>
            <div className='position-relative'>
                <NavLink to='/contractManagement'>
                    <button className='btn btn-info position-absolute end-0'>Next page</button>
                </NavLink>
                <NavLink to='/bidEvaluation'>
                    <button className='btn btn-info position-absolute start-0'>Previous page</button>
                </NavLink>
                                   
            </div>
        </div>
    </body>
    </>
  )
}

export default ContractSigning