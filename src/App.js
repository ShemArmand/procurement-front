import {Navigate, Route, Routes } from 'react-router';
import './App.css';

import { FormProvider } from './components/FormContext';
import Identification from './components/Identification';
import Header from './components/Header';
import PlanningPhase from './components/PlanningPhase';
import Publication from './components/Publication';
import TenderPublication from './components/TenderPublication';
import OpeningBids from './components/OpeningBids';
import BidEvaluation from './components/BidEvaluation';
import ContractSigning from './components/ContractSigning';
import ContractManagement from './components/ContractManagement';
import Invoice from './components/Invoice';
import { Provider } from 'react-redux';
import { store } from './Store';
function App() {
  return (
    <>
    
   
    
    <Provider store={store}>
    <Routes>
      <Route path='/' element={<Navigate to={'/identification'}/>}/>
      <Route path='/identification' element={<Identification/>}/>
      <Route path='/planningPhase' element={<PlanningPhase/>}/>
      <Route path='/publication' element={<Publication/>}/>
      <Route path='/tenderPublication'element={<TenderPublication/>}/>
      <Route path='/openingOfBids'element={<OpeningBids/>}/>
      <Route path='/bidEvaluation' element={<BidEvaluation/>}/>
      <Route path='/contractSigning' element={<ContractSigning/>}/>
      <Route path='/contractManagement' element={<ContractManagement/>}/>
      <Route path='/invoice' element={<Invoice/>}/>
    </Routes>
    </Provider>
    
    
    </>
  );
}

export default App;
