import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom';

const ContractManagement = () => {
  return (
    <>
    <section>
        <Header/>
        <div id='title'>
            <h2>Contract management start date / purchase order</h2>
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
                <label class='form-label'>Date of purchase order issue</label>
            </div>
            <div id='proc-div'>
                <input type='date' className='form-control'/>
            </div>
            <hr/>
            <div id='div'>
                <label className='form-label'>Division issuing a purchase order</label>
                <select className='form-select'>
            <option value={''}>Choose a division</option>
            <option value={''}>Corporate Services Division</option>
            <option value={''}>Medical Technology Division</option>
            <option value={''}>Research Innovation and Data Science</option>
            <option value={''}>Malaria and Other Parasitic Diseases Control Division</option>
            <option value={''}>TB and Other Respiratory Communicable Diseases Control Division</option>
            <option value={''}>Public Health Surveillance and Emergencies preparedness and Response Division</option>
            <option value={''}>Non Communicable Diseases Division</option>
            <option value={''}>Mental Health Division</option>
            <option value={''}>National Reference Laboratory Division</option>
            <option value={''}>Blood Transfusion Division</option>
            <option value={''}>SAMU Services</option>
            <option value={''}>Rwanda Health Communication Center Division</option>
            <option value={''}>HIV, STI, Viral hepatitis and Other viral diseases Control Division</option>
            <option value={''}>Maternal, Child and Community Health</option>
        </select>
        </div>
        <hr/>
        <div class="row">
            <div class="col">
                <div>
                    <label className='form-label'>Focal person from the program</label>
                </div>
                <div>
                    <input type="text" class="form-control"/> 
                </div>
            </div>
            <div class="col">
                <div>
                    <label className='form-label'>Procurement staff</label>
                </div>
                <div>
                    <input type="text" class="form-control"/> 
                </div>
            </div>
        </div>
        <hr/>
        <div>
            <label class='form-label'>Performance guarantee end period</label>
        </div>
        <div id='proc-div'>
            <input type='date' className='form-control'/>
        </div>
        <hr/>
        <div class="row">
            <div class="col">
                <div>
                    <label className='form-label'>Tender execution start date</label>
                </div>
                <div>
                    <input type="date" class="form-control"/> 
                </div>
            </div>
            <div class="col">
                <div>
                    <label className='form-label'>Tender execution end date</label>
                </div>
                <div>
                    <input type="date" class="form-control"/> 
                </div>
            </div>
        </div>
        <hr/>
        <div>
                <label class='form-label'>Inspection done by</label>
            </div>
            <div id='proc-div'>
                <input type='text' className='form-control'/>
            </div>
            <hr/>
            <div id='proc-div'>
               <label className='form-label'>Inspenction team</label>
               <select className='form-select'>
                <option></option>
                <option>Logistics team</option>
                <option>Acceptance team</option>
               </select>
            </div>
            <hr/>
            <div>
                <label class='form-label'>Delivery date</label>
            </div>
            <div id='proc-div'>
                <input type='date' className='form-control'/>
            </div>
            <hr/>
            <div>
                <label class='form-label'>Acceptance date</label>
            </div>
            <div id='proc-div'>
                <input type='date' className='form-control'/>
            </div>
            <hr/>
            <div>
                <label class='form-label'>Warranty/Liability start date</label>
            </div>
            <div id='proc-div'>
                <input type='date' className='form-control'/>
            </div>
            <hr/>
            <div>
                <label class='form-label'>Warranty/Liability end date</label>
            </div>
            <div id='proc-div'>
                <input type='date' className='form-control'/>
            </div>
            <hr/>
            <div>

            </div>
            <hr/>
            <div className='position-relative'>
                <NavLink to='/invoice'>
                    <button className='btn btn-info position-absolute end-0'>Next page</button>
                </NavLink>
                <NavLink to='/contractSigning'>
                    <button className='btn btn-info position-absolute start-0'>Previous page</button>
                </NavLink>                                   
            </div>
    </div>
    </section>
    </>
  )
}

export default ContractManagement