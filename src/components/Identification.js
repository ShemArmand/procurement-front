import React, {useState, useContext } from 'react';
import Header from './Header';
import'./Header.css';
import'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { FormContext } from './FormContext';
import { updateTenderTitle } from '../FormSlice';
import { createDispatchHook, useDispatch } from 'react-redux';
import { createIdentificationForm } from '../services/FormService';

const Identification = () => {
    const [procurementDiv, setProcurementDiv] = useState ('')
    const [financialYear, setFinacialYear] = useState('')
    const [division, setDivision] = useState('')
    const [divManagerEmail, setDivManagerEmail] = useState('')
    const [divManagerPhone, setDivManagerPhone] = useState('')
    const [projectManagerEmail, setProjectManagerEmail] = useState('')
    const [contractManagerPhone, setContractManagerPhone] = useState('')
    const [tenderTitle, setTenderTitle] = useState('')
    const [tenderCategory, setTenderCategory] = useState('')
    const [quantity, setQuantity] = useState('')
    const [SourceOfFunds, setSourceOfFunds] = useState('')
    const [budgetLine, setBudgetLine] = useState('')
    const [estimatedAmount, setEstimatedAmount] = useState('')
    const [technicalSpecification, setTechnicalSpecification] = useState('')
    const [surveyReport, setSurveyReport] = useState('')
    const [tentativeTimeLine, setTentativeTimeLine] = useState('')
    const [status, setStatus] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                procurementDiv,
                financialYear,
                division,
                divManagerEmail,
                divManagerPhone,
                projectManagerEmail,
                contractManagerPhone,
                tenderTitle,
                tenderCategory,
                quantity,
                SourceOfFunds,
                budgetLine,
                estimatedAmount,
                technicalSpecification,
                surveyReport,
                tentativeTimeLine,
                status
            };

            console.log(formData);

            const response = await createIdentificationForm(formData);
            setSuccess('Form submitted successfully!');

            if (response.status === 200) {
                setSuccess('Form submitted successfully!');
                console.log('Form submitted successfully!');
                // navigate('/planningPhase');
            } else {
                setError('Error submitting form: ' + (response?.data?.message || response?.data?.error));
                setSuccess('');
            }
            // You can add navigation logic here if needed
        } catch (err) {
            setError('Error submitting form: ' + (err.response?.data?.message || err.message));
            setSuccess('');
        }
    };

  return (
    <>
    
    <section>
    <Header/>
    <div id='title' >
            <h2>Identification of Needs From program</h2>
    </div>
    
    <div id='container'>
    <form onSubmit={handleSubmit}>
    <div id='proc-div'>
        <label className='form-label'>Procurement division</label>
        <select className='form-select' onChange={(e)=> setProcurementDiv(e.target.value)}>
            <option value={'cs'}>CS</option>
            <option value={'spiu'}>SPIU</option>
        </select>
    </div>
    <hr/>
    <div id='proc-div'>
        <label className='form-label'>Financial year</label>
        <select className='form-select' onChange={(e)=> setFinacialYear(e.target.value)}>
            <option value={'2023-2024'}>2023-2024</option>
            <option value={'2024-2025'}>2024-2025</option>
        </select>
    </div>
    <hr/>
    <div id='div'>
        <label className='form-label'>Division</label>
        <select className='form-select' onChange={(e)=> setDivision(e.target.value)}>
            <option value={'>Choose a division'}>Choose a division</option>
            <option value={'Corporate Services Division'}>Corporate Services Division</option>
            <option value={'Medical Technology Division'}>Medical Technology Division</option>
            <option value={'Research Innovation and Data Science'}>Research Innovation and Data Science</option>
            <option value={'Malaria and Other Parasitic Diseases Control Division'}>Malaria and Other Parasitic Diseases Control Division</option>
            <option value={'TB and Other Respiratory Communicable Diseases Control Division'}>TB and Other Respiratory Communicable Diseases Control Division</option>
            <option value={'Public Health Surveillance and Emergencies preparedness and Response Division'}>Public Health Surveillance and Emergencies preparedness and Response Division</option>
            <option value={'Non Communicable Diseases Division'}>Non Communicable Diseases Division</option>
            <option value={'Mental Health Division'}>Mental Health Division</option>
            <option value={'National Reference Laboratory Division'}>National Reference Laboratory Division</option>
            <option value={'Blood Transfusion Division'}>Blood Transfusion Division</option>
            <option value={'SAMU Services'}>SAMU Services</option>
            <option value={'Rwanda Health Communication Center Division'}>Rwanda Health Communication Center Division</option>
            <option value={'HIV, STI, Viral hepatitis and Other viral diseases Control Division'}>HIV, STI, Viral hepatitis and Other viral diseases Control Division</option>
            <option value={'Maternal, Child and Community Health'}>Maternal, Child and Community Health</option>
        </select>
    </div>
    <hr/>
    <div>
        <label className='form-label'>Division Manager e-mail </label>
    </div>
    <div id='div'>
        <input type='text' className='form-control' placeholder='email@example.com' onChange={(e)=> setDivManagerEmail(e.target.value)}/>
    </div>
    <hr/>
    <div>
        <label className='form-label'>Division Manager Phone number</label>
    </div> 
    <div id='div'>
        <input type='text' className='form-control' placeholder='Phone number' onChange={(e)=> setDivManagerPhone (e.target.value)}/>
    </div>
    <hr/>
    <div>
        <label className='form-label'>Division Project Manager e-mail</label>
    </div>
    <div id='div'>
        <input type='text' className='form-control' placeholder='email@example.com' onChange={(e)=> setProjectManagerEmail(e.target.value)} />
    </div>
    <hr/>
    <div>
        <label className='form-label'>Contract manager Phone number</label>
    </div>
    <div id='div'>
        <input type='text' className='form-control' placeholder='Phone number' onChange={(e)=> setContractManagerPhone(e.target.value)}/>
    </div>
    <hr/>
    <div>
        <label className='form-label'>Tender title name</label>
    </div>
    <div id='div'>
        <input type='text' className='form-control' onChange={(e)=> createDispatchHook(updateTenderTitle(e.target.value))}/>
    </div>
    <hr/>
    <div id='proc-div'>
        <label className='form-label'>Category / Tender Type</label>
        <select className='form-select' onChange={(e)=>setTenderCategory(e.target.value)}>
            <option>Choose category</option>
            <option value={'Goods'}>Goods</option>
            <option value={'Consultancy'}>Consultancy</option>
            <option value={'Works'}>Works</option>
            <option value={'Non-consultancy'}>Non-consultancy</option>
        </select>
    </div>
    <hr/>
    <div>
        <label className='from-label'>Quantity</label>
    </div>
    <div id='div'>
        <input type='text' className='form-control' placeholder='Quantity' onChange={(e)=> setQuantity(e.target.value)}/>
    </div>
    <hr/>
    <div>
        <label className='form-label'>Source of funds</label>
    </div>
    <div id='div'>
        <input type='text' className='form-control' placeholder='Source of funds' onChange={(e)=> setSourceOfFunds(e.target.value)}/>
    </div>
    <hr/>
    <div>
        <label className='form-label'>Budget line</label>
    </div>
    <div id='div'>
        <input type='text' className='form-control' placeholder='Budget line' onChange={(e)=> setBudgetLine (e.target.value)}/>
    </div>
    <hr/>
    <div>
        <label className='form-label'>Estimated amount</label>
    </div>
    <div id='div'>
        <input type='text' className='form-control' placeholder='Amount' onChange={(e)=> setEstimatedAmount(e.target.value)}/>
    </div>
    <hr/>
    <div>
        <label className='form-label'>Technical specification or term of reference</label>
    </div>
    <div id='div'>
        <input type='text' className='form-control' placeholder='' onChange={(e)=> setTechnicalSpecification(e.target.value)}/>
    </div>
    <hr/>
    <div>
        <label className='form-label'>Market Survey report</label>
    </div>
    <div id='div'>
        <input className='form-control' type='file'/>
    </div>
    <hr/>
    <div>
        <label className='form-label'>Tentative timeline for delivery</label>
    </div>
    <div id='proc-div'>
        <input className='form-control' type='date' onChange={(e)=> setTentativeTimeLine(e.target.value)}/>
    </div>
    <hr/>
    <div id='proc-div'>
        <label className='from-labe p-2'>Status</label>
        <select className='form-select' onChange={(e)=>setStatus(e.target.value)}>
            <option>Status</option>
            <option value={'Complete'}>Complete</option>
            <option value={'Partially complete'}>Partially complete</option>
            <option value={'Incomplete'}>Incomplete</option>
        </select>
    </div>
    <hr/>
    <div>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
    </div>
    <div>
        <button type="submit" className="btn btn-primary me-2">Submit</button>
        <NavLink to='/planningPhase'>
            <button type="button" className="btn btn-info">Next Page{'>>'}</button>
        </NavLink>
    </div>
    </form>
    </div>
    </section>
    </>
  )
}

export default Identification