import React, { useState } from 'react';
import { useQueryClient, useMutation } from 'react-query';

function Checkout() {
    const [formData, setFormData] = useState({
        paymentValue: 1440.50,
        payerId: '',
        payerName: '',
        payerEmail: '',
        payerCep: '',
        payerTelephoneDDD: '',
        payerTelephoneNumber: '',
        courseId: 1,
    });

    const queryClient = useQueryClient()

    const postPayment = async (form) => {
        console.info(JSON.stringify(form))
        const data = await fetch("http://api.maestri.app.br/campaign/pix-slip/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });
        // const data = await fetch(http://api.maestri.app.br/pix/payment/${form.courseId}, {
        //     method: "GET",
        //     //headers: { "Content-Type": "application/json" },
        //     //body: JSON.stringify(form)
        // });

        return data.json();
    }


    const { mutateAsync: postNewPayment, isLoading } = useMutation({
        mutationFn: () => postPayment(formData),
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Processar os dados do formulário, como enviar para um servidor
        try {
            console.log(formData);
            formData.courseId = Number(formData.courseId)
            formData.paymentValue = Number(formData.paymentValue)
            const data = await postNewPayment()
            // alert('Checkout realizado com sucesso!');
            console.log("JsonData: ")
            console.log(data);

        } catch (e) {
            console.info(e);
            return;
        }
    };

  return (
    <div className='checkout'>
    <div className="container">
    <div className='row'>    

        <form onSubmit={handleSubmit} className="col-md-8 col-md-offset-2 intro-text">
            <div id="checkoutForm">
            <h2 className='titleCheck'>Checkout do Curso</h2>
            <div className='checkoutDiv'>
                <p className='paymentValue'>
                    {/* {y}R${x} */}Concatenar
                </p>
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

export default Checkout;
