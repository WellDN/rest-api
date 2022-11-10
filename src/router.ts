import express from 'express'
import Item from './item'
import iRepository from './i-repository'

const routerItems = express.Router()

routerItems.post('/items', (req, res) => {
    const item: Item = req.body
    iRepository.create(item, (id) => {
        if (id) {
            res.status(201).location(`/items/${id}`).send()
        } else {
            res.status(400).send()
        }
    })
    
})
   
        routerItems.get('/items', (req, res) => {
            iRepository.readAll((items) => res.json(items))
        })
   


routerItems.get('/items/:id', (req, res) => {
    const id: number = +req.params.id
    iRepository.read(id, (item) => {
        if (item) {
            res.json(item)
        } else {
            res.status(404).send()
        }
        })
    })


routerItems.put('/items/:id', (req, res) => {
    const id: number = +req.params.id
    iRepository.refresh(id, req.body, (notFound) => {
        if (notFound) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })
})


routerItems.put('/itens/:id', (req, res) => {
    const id: number = +req.params.id
    iRepository.delete(id, (notFound) => {
        if (notFound) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })
})


export default routerItems