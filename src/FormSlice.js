import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    procurementDiv: '',
  financialYear: '',
  division: '',
  divManagerEmail: '',
  divManagerPhone: '',
  projectManagerEmail: '',
  contractManagerPhone: '',
  tenderTitle: '',
  tenderCategory: '',
  quantity: '',
  sourceOfFunds: '',
  budgetLine: '',
  estimatedAmount: '',
  technicalSpecification: '',
  surveyReport: '',
  tentativeTimeLine: '',
  status: ''
}

const fomSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateProcurementDiv: (state, action) => {
            state.procurementDiv = action.payload;
          },
          updateFinancialYear: (state, action) => {
            state.financialYear = action.payload;
          },
          updateDivision: (state, action) => {
            state.division = action.payload;
          },
          updateDivManagerEmail: (state, action) => {
            state.divManagerEmail = action.payload;
          },
          updateDivManagerPhone: (state, action) => {
            state.divManagerPhone = action.payload;
          },
          updateProjectManagerEmail: (state, action) => {
            state.projectManagerEmail = action.payload;
          },
          updateContractManagerPhone: (state, action) => {
            state.contractManagerPhone = action.payload;
          },
          updateTenderTitle: (state, action) => {
            state.tenderTitle = action.payload;
          },
          updateTenderCategory: (state, action) => {
            state.tenderCategory = action.payload;
          },
          updateQuantity: (state, action) => {
            state.quantity = action.payload;
          },
          updateSourceOfFunds: (state, action) => {
            state.sourceOfFunds = action.payload;
          },
          updateBudgetLine: (state, action) => {
            state.budgetLine = action.payload;
          },
          updateEstimatedAmount: (state, action) => {
            state.estimatedAmount = action.payload;
          },
          updateTechnicalSpecification: (state, action) => {
            state.technicalSpecification = action.payload;
          },
          updateSurveyReport: (state, action) => {
            state.surveyReport = action.payload;
          },
          updateTentativeTimeLine: (state, action) => {
            state.tentativeTimeLine = action.payload;
          },
          updateStatus: (state, action) => {
            state.status = action.payload;
          }
    }
})

export const{
    updateProcurementDiv,
  updateFinancialYear,
  updateDivision,
  updateDivManagerEmail,
  updateDivManagerPhone,
  updateProjectManagerEmail,
  updateContractManagerPhone,
  updateTenderTitle,
  updateTenderCategory,
  updateQuantity,
  updateSourceOfFunds,
  updateBudgetLine,
  updateEstimatedAmount,
  updateTechnicalSpecification,
  updateSurveyReport,
  updateTentativeTimeLine,
  updateStatus
}=fomSlice.actions

export default fomSlice.reducer;