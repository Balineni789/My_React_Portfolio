
import React, { useEffect, useState } from 'react'

function FormEvents2() {
    const [data, setdata] = useState('')
    const [update, setUpdate] = useState('Hi! Harsha')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const changeHandler = (e) => {
        setdata(e.target.value)
    }
    
    const Form = (event) => {
        event.preventDefault()
        setIsSubmitting(true)
        
        setTimeout(() => {
            setUpdate(data)
            setdata('')
            setIsSubmitting(false)
        }, 600)
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md transform transition-all duration-300 hover:shadow-xl">
                
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome</h1>
                    <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-6">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Enter Your Name" 
                            required 
                            value={data} 
                            onChange={changeHandler}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault()
                                    Form(e)
                                }
                            }}
                        />
                    </div>

                    <button 
                        type="button"
                        onClick={Form}
                        disabled={isSubmitting || !data.trim()}
                        className="w-full py-3 px-4 bg-blue-500 text-white font-medium rounded-lg transition-all duration-200 hover:bg-blue-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {isSubmitting ? (
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                <span>Submitting...</span>
                            </div>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </div>

                <div className="mt-8">
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                        <p className="text-gray-700 font-medium text-center">
                            {update}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormEvents2