import React, { useContext } from 'react';
import'./Header.css';
import Header from './Header';
import'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import'./Identification';
import { FormContext } from './FormContext';
import { useSelector } from 'react-redux';


const PlanningPhase = () => {
    const tenderTitle = useSelector((state) => state.form.tenderTitle) 
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <body>
    <Header/>
    <div id='title' >
        <h2>Planning (Procurement) Phase</h2>
    </div>
    
    <div id='container'>
        <div>
            <label class='form-label'>Tender Title</label>
        </div>
        <div>
            <text>{tenderTitle}</text>
        </div>
        <hr/>
        <div>
            <label class='form-label'>Tender final given title</label>
        </div>
        <div id='proc-div'>
            <input type='text' className='form-control' placeholder='Name'/>
        </div>
        <hr/>
        <div id='div'>
            <label className='form-label' >Tender Methods</label>
            <select className='form-select'>
                <option>Choose method</option>
                <option>International Competitive Bidding</option>
                <option>Direct</option>
                <option>National Competitive Bidding</option>
                <option>Open</option>
                <option>Restricted</option>
                <option>Single Source</option>
            </select>
        </div>
        <hr/>
        <div>
            <label className='form-label'>Estimated Budget</label>
        </div>
        <div id='div'>
            <input type='text' className='form-control'></input>
        </div>
        <hr/>
        <div>
            <label className='form-label p-2'>New or Ongoing Tender</label>
        </div>
        <div>
            <input type='radio' className='form-check-input' name='new-ongoing' value={'new'}/>New     <input type='radio' className='form-check-input' name='new-ongoing' value={'ongoing'}/> Ongoing
        </div>
        <hr/>
        <div>
            <label className='form-label p-2'>Multi year or Regular frame work</label>
        </div>
        <div>
            <input type='radio' className='form-check-input' name='regular-multiYear' value={'multiYear'}/>Multi year     <input type='radio' className='form-check-input' name='regular-multiYear' value={'regular'}/> Regular
        </div>
        <hr/>
        <div>
            <label className='form-label'>Planned tender document preparation</label>
        </div>
        <div id='proc-div'>
            <input className='form-control' type='date'/>
        </div>
        <hr/>
        <div>
            <label className='form-label'>Planned publication date</label>
        </div>
        <div id='proc-div'>
            <input className='form-control' type='date'/>
        </div>
        <hr/>
        <div>
            <label className='form-label'>Planned bid opening date</label>
        </div>
        <div id='proc-div'>
            <input className='form-control' type='date'/>
        </div>
        <hr/>
        <div>
            <label className='form-label'>Planned evaluation date</label>
        </div>
        <div id='proc-div'>
            <input className='form-control' type='date'/>
        </div>
        <hr/>
        <div>
            <label className='form-label'>Planned notification date</label>
        </div>
        <div id='proc-div'>
            <input className='form-control' type='date'/>
        </div>
        <hr/>
        <div>
            <label className='form-label'>Planned contract signing date</label>
        </div>
        <div id='proc-div'>
            <input className='form-control' type='date'/>
        </div>
        <hr/>
        <div>
            <label className='form-label'>Planned contract management start date</label>
        </div>
        <div id='proc-div'>
            <input className='form-control' type='date'/>
        </div>
        <hr/>

        <div>
            <label className='form-label'>Planned contract closure date</label>
        </div>
        <div id='proc-div'>
            <input className='form-control' type='date'/>
        </div>
        <hr/>

        <div id='proc-div'>
            <label className='form-label'>Planning status</label>
            <select className='form-select'>
                <option>Status</option>
                <option>Complete</option>
                <option>Partially complete</option>
                <option>Incomplete</option>
            </select>
        </div>
        <hr/>
        <div className='position-relative'>
            <NavLink to='/publication'>
                <button className='btn btn-info position-absolute end-0'>Next page</button>
            </NavLink>
            <NavLink to='/identification'>
                <button className='btn btn-info position-absolute start-0'>Previous page</button>
            </NavLink>
            
        </div>
    </div>
    </body>
    </>
  )
}

export default PlanningPhase