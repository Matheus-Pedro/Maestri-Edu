import React, { useState } from 'react';
import { useQueryClient, useMutation, isError } from 'react-query';
import { useLocation } from 'react-router-dom';

function Checkout() {
    const location = useLocation()

    const [formData, setFormData] = useState({
        paymentValue: 1440.50,
        payerId: '',
        payerName: '',
        payerEmail: '',
        payerCep: '',
        payerTelephoneDDD: '',
        payerTelephoneNumber: '',
        courseId: location.state.id,
        courseName: location.state.name
    });

    const [validationError, setValidatorError] = useState({
        isError: false,
        error: ""
    })

    const [formResponse, setFormResponse] = useState({
        status: 100,
        ok: true,
        data: ""
    })

    const queryClient = useQueryClient()

    const postPayment = async (form) => {
        console.info("postPayment: ", JSON.stringify(form))
        const data = await fetch("http://api.maestri.app.br/campaign/pix-slip/payment/tt", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });

        setFormResponse({ status: data.status, ok: data.ok })
        return data.json()
    }

    const { mutateAsync: postNewPayment, isLoading, isError, error } = useMutation({
        mutationFn: () => postPayment(formData),
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = (e) => {

        if (formData.courseId < 0 || formData.paymentValue < 1430 || formData.paymentValue > 1500) {
            console.error("CourseId or Payment Value Err");
            return false;
        }

        if (
            formData.payerId === '' ||
            formData.payerName === '' ||
            formData.payerEmail === '' ||
            formData.payerCep === '' ||
            formData.payerTelephoneDDD === '' ||
            formData.payerTelephoneNumber === ''
        ) {
            console.log("Invalid form");

            setValidatorError({
                error: "O Formulário está incompleto",
                isError: true,
            })
            return false;
        }

        return true;

    }

    const handleReset = () => {
        setFormData({
            paymentValue: 1440.50,
            payerId: '',
            payerName: '',
            payerEmail: '',
            payerCep: '',
            payerTelephoneDDD: '',
            payerTelephoneNumber: '',
            courseId: location.state.id,
            courseName: location.state.name
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Processar os dados do formulário, como enviar para um servidor
        if (isLoading) {
            console.log("Wait, it's loading!")
            return;
        }

        if (!validateForm()) {
            return;
        }

        try {
            console.info("HandleSubmit: ", formData);
            formData.courseId = Number(formData.courseId);
            formData.paymentValue = Number(formData.paymentValue);
            const response = await postNewPayment();

            // if (!response.ok) {
            //     setValidatorError({
            //         error: response.data,
            //         isError: true,
            //     });
            //     return;
            // }

            console.log("JsonData: ", response);
            if (formResponse.ok) {
                console.log("it worked");
                handleReset();
            } else {
                setValidatorError({
                    error: response,
                    isError: true,
                });
                console.log("it didn't work");
            }

        } catch (e) {
            //console.error(e);
            console.log(e)
            console.log(isError)
            return;
        }

    };

    const closeMessage = () => {
        setValidatorError({
            error: "O Formulário está incompleto",
            isError: false,
        })

    }

    const message = () => {
        setTimeout(closeMessage, 5000);
        return (
            <div>
                <div className="error-container msg-show">
                    <span>{validationError.error}</span>
                    <div id="close-btn" className="close-btn">
                        <i className='bx bx-x-circle'></i>
                    </div>
                    <div className="icon">
                        <button onClick={closeMessage}>X</button>
                    </div>
                </div>
            </div>
        )
    }

    const checkoutMain = () => {
        return (
            <div className='checkout'>
                <link rel="stylesheet" type="text/css" href="css/message.css" />
                <div className="container">
                    <div className='row'>

                        <form onSubmit={handleSubmit} className="col-md-8 col-md-offset-2 intro-text">
                            <div id="checkoutForm">
                                <h2 className='titleCheck'>Checkout do Curso</h2>
                                <div>
                                    <p className='paymentValue'>
                                        {`${formData.courseName} - R$${formData.paymentValue}0 `}
                                    </p>
                                </div>
                                <div className='checkoutDiv'>
                                    <label className='checkLabel'>CPF:</label>
                                </div>
                                <div className="checkoutDiv">
                                    <input
                                        className='checkInput'
                                        type="number"
                                        name="payerId"
                                        value={formData.payerId}
                                        onChange={handleChange}
                                        placeholder="CPF - Somente Números"
                                    />
                                </div>
                                <div className='checkoutDiv' >
                                    <label className='checkLabel'>Nome:</label>
                                </div>
                                <div className="checkoutDiv">
                                    <input
                                        className='checkInput'
                                        type="text"
                                        name="payerName"
                                        value={formData.payerName}
                                        onChange={handleChange}
                                        placeholder="Nome Completo"
                                    />
                                </div>
                                <div className="checkoutDiv">
                                    <label className='checkLabel'>Email:</label>
                                </div>
                                <div className="checkoutDiv">
                                    <input
                                        className='checkInput'
                                        type="email"
                                        name="payerEmail"
                                        value={formData.payerEmail}
                                        onChange={handleChange}
                                        placeholder='exemplo@email.com'
                                    />
                                </div>
                                <div className='checkoutDiv'>
                                    <label className='checkLabel'>Número do Telefone com DDD:</label>
                                </div>
                                <div className='checkoutDiv'>
                                    <input
                                        id='checkInputDDD'
                                        className='checkInput'
                                        type="number"
                                        name="payerTelephoneDDD"
                                        value={formData.payerTelephoneDDD}
                                        onChange={handleChange}
                                        placeholder='DDD(xx)'
                                    />
                                    <input
                                        className='checkInput'
                                        type="number"
                                        name="payerTelephoneNumber"
                                        value={formData.payerTelephoneNumber}
                                        onChange={handleChange}
                                        placeholder='Telefone(xxxxxxxx)'
                                    />
                                </div>
                                <div className="checkoutDiv">
                                    <label className='checkLabel'>CEP:</label>
                                </div>
                                <div className="checkoutDiv">
                                    <input
                                        className='checkInput'
                                        type="number"
                                        name="payerCep"
                                        value={formData.payerCep}
                                        onChange={handleChange}
                                        placeholder='CEP'
                                    />
                                </div>
                            </div>
                            <div className='buttonCheckDiv'>
                                <div className='buttonCheck'>
                                    <button type="submit" className='btn btn-custom btn-lg page-scroll'>Finalizar Inscrição</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    if (validationError.isError) {
        return (
            <>
                {checkoutMain()}
                {message()}
            </>
        )
    } else if (isError) {
        setValidatorError({
            error: error,
            isError: true,
        });
        return (
            <>
                {checkoutMain()}
                {message()}
            </>
        )
    } else {
        return checkoutMain();

    }
}

export default Checkout;
