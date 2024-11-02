const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "titolo":"Elasticità e Scalabilità",
      "caratteristica":"Capacità di aumentare o diminuire dinamicamente le risorse computazionali in base alla domanda, garantendo alta disponibilità e riduzione dei costi."
    },
    {
      "id":"2",
      "titolo":"Architettura a Microservizi",
      "caratteristica":"Struttura dell'applicazione divisa in piccole componenti indipendenti, che migliorano la modularità e la manutenzione."
    },
    {
      "id":"3",
      "titolo":"Efficienza Operativa",
      "caratteristica":"Utilizzo di metodologie come DevOps e Agile per accelerare il ciclo di sviluppo, ridurre errori e promuovere la collaborazione tra team di sviluppo e infrastruttura."
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})