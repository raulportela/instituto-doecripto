import '../../styles/styleDoacao.scss';
import Qrcode from '../../img/qrcode.png';
import { useState } from 'react';
import { useEffect } from 'react';


export default function PageInstituto() {


    const [doacao, setDoacao] = useState([
        { anonimo: false, nomeDoador: "", emailDoador: "", qtdMoedas: 1, vlrMoeda: 1.53, vlorTotal: 1.53 }
    ]);


    useEffect(() => {

    }, []);



    return (
        <>
            <header>
                <nav className="navbar navbar-dark cabecalho">
                    <a href="index.html">
                        <h1 className="logo">Doe Cripto moeda para instituições carentes</h1>
                    </a>

                </nav>
            </header>
            <section>
                <div className="containe-fluid">
                    <div className="jumbotron banner">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-5">
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h6 className="display-8">Você está doando para:</h6>
                                    </div>
                                    <div className="col col-lg-12">
                                        <h1 className="display-2">PET'S Cidade Dutra</h1>
                                    </div>
                                    <hr className="my-4 hr-banner" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <p className="display-6">Informe abaixo os dados da doação.</p>
                                <p className="lead">Você pode doar sem se identificar, ou pode nos informar seu nome e e-mail. </p>

                            </div>
                        </div>



                    </div>
                </div>
                <svg id="svg-cabecalho" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#1E272E" fill-opacity="1" d="M0,288L480,288L960,96L1440,160L1440,0L960,0L480,0L0,0Z">

                    </path>
                </svg>
            </section>
            <div className="container">
                <main>
                    <form>
                        <div className="row">
                            <div className="col-sm-6 col-md-6">
                                <div className="dados-pessoais">
                                    <h2>Dados Pessoais <i className="bi bi-person-circle"></i></h2>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" id="nao-id" htmlFor="defaultCheck1">
                                            Não quero me identificar
                                        </label>
                                    </div>
                                    <div className="col">
                                        <label className="form-check-label" htmlFor="nome-doador">Insira seu nome</label>
                                        <input type="text" id="nome-doador" className="form-control" placeholder="Nome" />
                                    </div>
                                    <div className="col">
                                        <label className="form-check-label" htmlFor="email">E-mail:</label>
                                        <input type="text" id="email" className="form-control" placeholder="seuemail@seudominio.com.br" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="dados-doacao">
                                    <h2>Dados de doação <i className="bi bi-cash-coin"></i></h2>
                                    <label id="gamb"></label>
                                    <div className="row">
                                        <div className="col">
                                            <label className="form-check-label" htmlFor="qtd-moedas">Qtd de Moedas</label>
                                            <input type="number" id="qtd-moedas" />
                                        </div>
                                        <div className="col">
                                            <label className="form-check-label" htmlFor="vlr-uni">Vlr Unitário - CashHand <i className="bi bi-currency-exchange"></i></label>
                                            <input type="text" id="vlr-uni" className="form-control" disabled />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 col-md-6">
                                            <label className="form-check-label" htmlFor="total-brl">Total R$</label>
                                            <input type="text" id="total-brl" className="form-control" disabled />
                                        </div>
                                        <div className="col-6 col-md-6">
                                            <button type="button" className="btn-principal">GERAR CODE PIX <i className="bi bi-x-diamond-fill"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </form>
                    <hr className="my-4" />
                </main>

            </div>
            <section className="pix-content">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="display-8" id="h2-pix">SCANEIE QR CODE</h2>
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4 col-md-12 box-qrcode">
                                <img src={Qrcode} />
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h2 className="display-8" id="h2-pix">PIX COPIE E COLA</h2>
                        <div className="row itens-copy">
                            <div className="col-12">
                                <input type="text" id="pix-copy" className="form-control" value="06e33d08-cf02-4fbb-a573-ed46779c2142" disabled />
                                <button className="btn btn-principal" id="btn-copy" type="submit">COPIAR <i className="bi bi-clipboard"></i></button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="rodape">
                <div className="row">
                    <div className="social-icons">
                        <a target="_blank" href="https://www.facebook.com/Doecriptooficial-109272728092811/?ref=pages_you_manage"><i className="fab fa-facebook-f"></i></a>
                        <a target="_blank" href="https://www.instagram.com/doecripto/"><i className="fab fa-instagram"></i></a>
                        <a target="_blank" href="https://twitter.com/doecripto?s=09"><i className="fab fa-twitter"></i></a>
                        <a target="_blank" href="https://t.me/doecripto"><i className="fab fa-telegram-plane"></i></a>
                    </div>
                </div>
                <p className="copyright">Todos os direitos reservados. <i className="bi bi-copyright"></i></p>
            </footer>
        </>
    );
}

