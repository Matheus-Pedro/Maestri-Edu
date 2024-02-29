import React, { useState } from 'react';

function CheckoutForm() {
  const [formData, setFormData] = useState({
    paymentValue: '',
    payerId: '',
    payerName: '',
    payerEmail: '',
    payerCep: '',
    payerTelephoneDDD: '',
    payerTelephoneNumber: '',
    courseId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Processar os dados do formulário, como enviar para um servidor
    console.log(formData);
    alert('Checkout realizado com sucesso!');
  };

  return (
    <div className='checkout'>
    <div className="container">
    <div className='row'>    

        <form onSubmit={handleSubmit} className="col-md-8 col-md-offset-2 intro-text">
            <div id="checkoutForm">
            <h2>Checkout do Curso</h2>
            <div className='checkoutDiv'>
                <label className='checkLabel'>Valor do Pagamento:</label>
            </div>
            <div className="checkoutDiv">
                <input
                    className='checkInput'
                    type="text"
                    name="paymentValue"
                    value={formData.paymentValue}
                    onChange={handleChange}
                    placeholder='parateste'
                />
            </div>
            <div className='checkoutDiv'>
                <label className='checkLabel'>CPF:</label>
            </div>
            <div className="checkoutDiv">
                <input
                    className='checkInput'
                    type="text"
                    name="payerId"
                    value={formData.payerId}
                    onChange={handleChange}
                    placeholder="somente números"
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
                    placeholder="nome completo"
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
            <div className="checkoutDiv">
                <label className='checkLabel'>CEP:</label>
            </div>
            <div className="checkoutDiv">
                <input
                    className='checkInput'
                    type="text"
                    name="payerCep"
                    value={formData.payerCep}
                    onChange={handleChange}
                    placeholder='somente números'
                />
            </div>
            <div className='checkoutDiv'>
                <label className='checkLabel'>Número do Telefone com DDD:</label>
            </div>
            <div className='checkoutDiv'>
                <input
                    id='checkInputDDD'
                    className='checkInput'
                    type="text"
                    name="payerTelephoneDDD"
                    value={formData.payerTelephoneDDD}
                    onChange={handleChange}
                    placeholder='xx'
                />
                <input
                    className='checkInput'
                    type="text"
                    name="payerTelephoneNumber"
                    value={formData.payerTelephoneNumber}
                    onChange={handleChange}
                    placeholder='xxxx-xxxx'
                />
            </div>
            <div className="checkoutDiv">
                <label className='checkLabel'>ID do Curso:</label>
            </div>
            <div className='checkoutDiv'>
                <input
                    className='checkInput'
                    type="text"
                    name="courseId"
                    value={formData.courseId}
                    onChange={handleChange}
                    placeholder='parateste'
                />
            </div>
            </div>
            <div>
            <button type="submit" className='btn btn-custom btn-lg page-scroll'>Finalizar Inscrição</button>
            </div>
            </form>
        </div>
        </div>
        </div>
  );
}

export default CheckoutForm;
