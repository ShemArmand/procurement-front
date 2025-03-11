import React, { useContext, useState } from 'react';
import'./Header.css';
import Header from './Header';
import'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useNavigate } from 'react-router-dom';
import'./Identification';
import { useSelector } from 'react-redux';
import { createPlanningPhaseForm } from '../services/FormService';

const PlanningPhase = () => {
    const tenderTitle = useSelector((state) => state.form.tenderTitle);
    const navigate = useNavigate();
    
    const [finalTenderTitle, setFinalTenderTitle] = useState('');
    const [tenderMethod, setTenderMethod] = useState('');
    const [estimatedBudget, setEstimatedBudget] = useState('');
    const [tenderType, setTenderType] = useState('');
    const [frameworkType, setFrameworkType] = useState('');
    const [documentPrepDate, setDocumentPrepDate] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [bidOpeningDate, setBidOpeningDate] = useState('');
    const [evaluationDate, setEvaluationDate] = useState('');
    const [notificationDate, setNotificationDate] = useState('');
    const [contractSigningDate, setContractSigningDate] = useState('');
    const [contractStartDate, setContractStartDate] = useState('');
    const [contractClosureDate, setContractClosureDate] = useState('');
    const [planningStatus, setPlanningStatus] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                tenderTitle,
                finalTenderTitle,
                tenderMethod,
                estimatedBudget,
                tenderType,
                frameworkType,
                documentPrepDate,
                publicationDate,
                bidOpeningDate,
                evaluationDate,
                notificationDate,
                contractSigningDate,
                contractStartDate,
                contractClosureDate,
                planningStatus
            };

            const response = await createPlanningPhaseForm(formData);
            
            if (response.status === 200) {
                setSuccess('Planning phase data submitted successfully!');
                setError('');
            }

        } catch (err) {
            setError('Error submitting form: ' + (err.response?.data?.message || err.message));
            setSuccess('');
        }
    };

  return (
    <>    
    <section>
    <Header/>
    <div id='title'>
        <h2>Planning (Procurement) Phase</h2>
    </div>
    
    <div id='container'>
        <form onSubmit={handleSubmit}>
            <div>
                <label className='form-label'>Tender Title</label>
            </div>
            <div>
                <text>{tenderTitle}</text>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Tender final given title</label>
            </div>
            <div id='proc-div'>
                <input 
                    type='text' 
                    className='form-control' 
                    placeholder='Name'
                    value={finalTenderTitle}
                    onChange={(e) => setFinalTenderTitle(e.target.value)}
                />
            </div>
            <hr/>
            <div id='div'>
                <label className='form-label'>Tender Methods</label>
                <select 
                    className='form-select'
                    value={tenderMethod}
                    onChange={(e) => setTenderMethod(e.target.value)}
                >
                    <option value="">Choose method</option>
                    <option value="International Competitive Bidding">International Competitive Bidding</option>
                    <option value="Direct">Direct</option>
                    <option value="National Competitive Bidding">National Competitive Bidding</option>
                    <option value="Open">Open</option>
                    <option value="Restricted">Restricted</option>
                    <option value="Single Source">Single Source</option>
                </select>
            </div>
            <hr/>
            <div>
                <label className='form-label'>Estimated Budget</label>
            </div>
            <div id='div'>
                <input 
                    type='text' 
                    className='form-control'
                    value={estimatedBudget}
                    onChange={(e) => setEstimatedBudget(e.target.value)}
                />
            </div>
            <hr/>
            <div>
                <label className='form-label p-2'>New or Ongoing Tender</label>
            </div>
            <div>
                <input 
                    type='radio' 
                    className='form-check-input' 
                    name='new-ongoing' 
                    value='new'
                    checked={tenderType === 'new'}
                    onChange={(e) => setTenderType(e.target.value)}
                />New     
                <input 
                    type='radio' 
                    className='form-check-input' 
                    name='new-ongoing' 
                    value='ongoing'
                    checked={tenderType === 'ongoing'}
                    onChange={(e) => setTenderType(e.target.value)}
                /> Ongoing
            </div>
            <hr/>
            <div>
                <label className='form-label p-2'>Multi year or Regular frame work</label>
            </div>
            <div>
                <input 
                    type='radio' 
                    className='form-check-input' 
                    name='regular-multiYear' 
                    value='multiYear'
                    checked={frameworkType === 'multiYear'}
                    onChange={(e) => setFrameworkType(e.target.value)}
                />Multi year     
                <input 
                    type='radio' 
                    className='form-check-input' 
                    name='regular-multiYear' 
                    value='regular'
                    checked={frameworkType === 'regular'}
                    onChange={(e) => setFrameworkType(e.target.value)}
                /> Regular
            </div>
            <hr/>
            <div>
                <label className='form-label'>Planned tender document preparation</label>
            </div>
            <div id='proc-div'>
                <input 
                    className='form-control' 
                    type='date'
                    value={documentPrepDate}
                    onChange={(e) => setDocumentPrepDate(e.target.value)}
                />
            </div>
            <hr/>
            <div>
                <label className='form-label'>Planned publication date</label>
            </div>
            <div id='proc-div'>
                <input 
                    className='form-control' 
                    type='date'
                    value={publicationDate}
                    onChange={(e) => setPublicationDate(e.target.value)}
                />
            </div>
            <hr/>
            <div>
                <label className='form-label'>Planned bid opening date</label>
            </div>
            <div id='proc-div'>
                <input 
                    className='form-control' 
                    type='date'
                    value={bidOpeningDate}
                    onChange={(e) => setBidOpeningDate(e.target.value)}
                />
            </div>
            <hr/>
            <div>
                <label className='form-label'>Planned evaluation date</label>
            </div>
            <div id='proc-div'>
                <input 
                    className='form-control' 
                    type='date'
                    value={evaluationDate}
                    onChange={(e) => setEvaluationDate(e.target.value)}
                />
            </div>
            <hr/>
            <div>
                <label className='form-label'>Planned notification date</label>
            </div>
            <div id='proc-div'>
                <input 
                    className='form-control' 
                    type='date'
                    value={notificationDate}
                    onChange={(e) => setNotificationDate(e.target.value)}
                />
            </div>
            <hr/>
            <div>
                <label className='form-label'>Planned contract signing date</label>
            </div>
            <div id='proc-div'>
                <input 
                    className='form-control' 
                    type='date'
                    value={contractSigningDate}
                    onChange={(e) => setContractSigningDate(e.target.value)}
                />
            </div>
            <hr/>
            <div>
                <label className='form-label'>Planned contract management start date</label>
            </div>
            <div id='proc-div'>
                <input 
                    className='form-control' 
                    type='date'
                    value={contractStartDate}
                    onChange={(e) => setContractStartDate(e.target.value)}
                />
            </div>
            <hr/>
            <div>
                <label className='form-label'>Planned contract closure date</label>
            </div>
            <div id='proc-div'>
                <input 
                    className='form-control' 
                    type='date'
                    value={contractClosureDate}
                    onChange={(e) => setContractClosureDate(e.target.value)}
                />
            </div>
            <hr/>
            <div id='proc-div'>
                <label className='form-label'>Planning status</label>
                <select 
                    className='form-select'
                    value={planningStatus}
                    onChange={(e) => setPlanningStatus(e.target.value)}
                >
                    <option value="">Status</option>
                    <option value="Complete">Complete</option>
                    <option value="Partially complete">Partially complete</option>
                    <option value="Incomplete">Incomplete</option>
                </select>
            </div>
            <hr/>
            <div>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
            </div>
            <div className='position-relative'>
                <button type="submit" className="btn btn-primary me-2">Submit</button>
                <NavLink to='/publication'>
                    <button type="button" className='btn btn-info position-absolute end-0'>Next page</button>
                </NavLink>
                <NavLink to='/identification'>
                    <button type="button" className='btn btn-info position-absolute start-0'>Previous page</button>
                </NavLink>
            </div>
        </form>
    </div>
    </section>
    </>
  )
}

export default PlanningPhase