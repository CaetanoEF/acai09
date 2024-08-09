import express from 'express'
const servidor = express()

servidor.listen(5001, () => console.log("Funcionando"))

servidor.get('/acai/:numero1/:numero2/:desconto', (req, resp) => {
    //const pequeno = 10 
    //const medio = 13
    //const grande = 17
    //tipo
    let numero1 = Number(req.params.numero1);
    if(numero1==1){
        numero1=10
    }
    if(numero1==2){
        numero1=13
    }
    if(numero1==3){
        numero1=17
    }
    //quantidade
    let numero2 = Number(req.params.numero2);
    let desconto = Number(req.params.numero1)
    let calculo= numero1*numero2
    let total = calculo - ((calculo * desconto) / 100)
    let multi = total
    resp.send('O valor total é ' + multi)
})

servidor.post ('/acai',  (req, resp) =>{
    let numero1 = Number(req.query.numero1) 
    if(numero1==1){
        numero1=10
    }
    if(numero1==2){
        numero1=13
    }
    if(numero1==3){
        numero1=17
    }
    let numero2 = Number(req.query.numero2);
    let desconto = Number(req.query.numero1)
    //const pequeno = 10 
    //const medio = 13
   // const grande = 17
    let calculo= numero1*numero2
    let total = calculo - (calculo * desconto) / 100
    let multi = total
    resp.send('O valor total é ' + multi)
})



servidor.use(express.json())

servidor.post('/loja/acai' , (req,resp)=>{
  let pequeno = req.body.pequeno
  let medio = req.body.medio
  let grande = req.body.grande
  let cupom = req.body.cupom



  let total = (pequeno*13.50)+(medio*15)+(grande*17.50)
  let desconto = cupom/100 * total
 let preco = total-desconto
  

resp.send({
    pequeno:pequeno,
    grande:grande,
    medio:medio,
    cupom:cupom,
    preco:preco})
})

//livro
servidor.post('/treino/leituraLivro' , (req,resp)=>{
    let livro= String(req.body.nome)
    let paginas = Number(req.body.paginas)
    let tempoPorPagina = Number(req.body.tempoPorPagina)

    if(!Number(req.body.tempoPorPagina)){
        resp.status(400).send({
            Error:'O tempo deve ser escrito em numeros.'
        })
        return
    }
  
  let total= (paginas*tempoPorPagina)/3600
  
  resp.send({
      "TempodeLeitura ": total
    })
  })

  //cor

  servidor.post('/treino/combinacaoCores', (req, resp) => {
   
    let cor1= String(req.body.cor1)
    let cor2 = String(req.body.cor2)
  
    resp.send('O valor total é ' + multi)
    
   })

  