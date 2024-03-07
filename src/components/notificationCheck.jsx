import React from "react";
import { useParams } from 'react-router-dom'
import "../App.css";

function NotificationCheck (){

    const params = useParams();

    console.log(params);

    return (
            <div className='checkout'>
                <div className="container">
                    <div className='row'>    
                        <div className="checkoutForm">
                            <h2 className="titleCheck">Cadastro Concluido</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem distinctio aliquid illum numquam! Dolorum aliquid eligendi, voluptates dolorem possimus rem reprehenderit nobis numquam, labore dolor adipisci placeat officiis iusto officia.</p>
                        </div>
                        <div className='buttonCheckDiv'>
                            <div className='buttonCheck'>
                                <button className='btn btn-custom btn-lg page-scroll'>OK</button>
                            </div>
                            {/* <embed src={`data:application/pdf;base64,${base64STR}`} /> */}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default NotificationCheck;