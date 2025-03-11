import React, {createContext, useState} from "react";

export const FormContext = createContext();

export const FormProvider = ({Children})=> {
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

        return(
            <FormContext.Provider
            value={{
                procurementDiv,setProcurementDiv,
                financialYear, setFinacialYear,
                division, setDivision,
                divManagerEmail, setDivManagerEmail,
                divManagerPhone, setDivManagerPhone,
                projectManagerEmail,setProjectManagerEmail,
                contractManagerPhone,setContractManagerPhone,
                tenderTitle, setTenderTitle,
                tenderCategory,setTenderCategory,
                quantity, setQuantity,
                SourceOfFunds, setSourceOfFunds,
                budgetLine, setBudgetLine,
                estimatedAmount, setEstimatedAmount,
                technicalSpecification, setTechnicalSpecification,
                surveyReport, setSurveyReport,
                tentativeTimeLine, setTentativeTimeLine,
                status, setStatus

            }}
            >
                {Children}
            </FormContext.Provider>
        )
}