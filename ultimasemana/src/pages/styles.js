.TipoDePlano {
    font-size: 0.8em;
    color: rgb(62, 61, 61);
  }
  
  .Assine {
    font-size: 2.8em;
    margin: 30px 0 0 0;
    animation: assine 1.5s linear infinite;
  }
  
  @keyframes assine{
    0%{
      opacity: 0;
    }
    50%{
      opacity: 0.7;
    }
    100%{
      opacity: 0;
    }
  }
  
  .Valor {
    font-size: 1.5em;
    font-weight: bold;
    color: rgb(62, 61, 61);
  }
  
  .Valor span {
    font-size: 1.5em;
  }
  
  .Pago > p {
    font-size: 1.5em;
    color: rgb(62, 61, 61);
  }
  
  .BotaoAssine {
    background-color: #fff;
    color: #4CAF50;
    padding: 20px;
    border-color: #fff;
    border-radius: 40px;
    margin: 15px;
    font-size: 1.3em;
    font-weight: bold;
  }
  
  .Pago > ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin: 40px auto 60px;
  }
  
  .Cancele {
    text-align: right;
    margin: 30px;
    color: rgb(62, 61, 61);
    font-size: 0.8em;
  }
  
  .Cancele button {
    background-color: #4CAF50;
    color: #fff;
    padding: 5px;
    border-color: #fff;
    border-radius: 10px;
    margin: 0 15px;
    font-size: 0.6em;
   }
  
   .CustoAdicional {
    font-size: 1em !important;
    margin-bottom: 20px;
   }
  
   .Adicionar{
    margin-bottom: 10px;
   }
  
   .Adicionar input {
    width: 30%;
    padding: 5px;
    border-radius: 10px;
    border: 2px solid #fff;
    margin-left: 10px;
   }