import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

function FinanceCalculator() {

    const [price, setPrice] = useState(0)
    const [intrestRate, setIntrestRate] = useState(0)
    const [loanTerm, setLoanTerm] = useState(0)
    const [downPaymet, setDownPayment] = useState(0)
    const [monthlyPayment, setMonthlyPayment] = useState(0)

    const calculateMontlyPayment = () => {
        const principal = price - downPaymet;
        const monthlyIntrestRate = intrestRate/1200

        const payment = (principal*monthlyIntrestRate*Math.pow(1+monthlyIntrestRate, loanTerm))/(Math.pow(1+monthlyIntrestRate, loanTerm)-1)

        setMonthlyPayment(payment.toFixed(2))
    }

  return (
    <div className='p-10 mt-7 rounded-xl border shadow-md'>
        <h2 className='font-medium text-2xl'>Finance Calculator</h2>

        <div className='flex gap-5 mt-5'>
            <div className='w-full'>
                <label>Price $</label>
                <Input type='number' onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className='w-full'>
                <label>Intrest Rate</label>
                <Input type='number' onChange={(e) => setIntrestRate(e.target.value)} />
            </div>
        </div>
        <div className='flex gap-5 mt-5'>
            <div className='w-full'>
                <label>Loan Term</label>
                <Input type='number' onChange={(e) => setLoanTerm(e.target.value)} />
            </div>
            <div className='w-full'>
                <label>DownPayment</label>
                <Input type='number' onChange={(e) => setDownPayment(e.target.value)} />
            </div>
        </div>

        {monthlyPayment > 0 && <h2 className='font-medium text-2xl mt-5'>Your Monthly Payment is:  
            <span className='text-4xl font-bold'> ${monthlyPayment}</span>
        </h2>}

        <Button className='w-full mt-4' size='lg' onClick={calculateMontlyPayment}>Calculate Monthly Payment</Button>
    </div>
  )
}

export default FinanceCalculator