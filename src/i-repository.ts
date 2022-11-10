import Item from '../src/item'
import { database } from './database'

const iRepository = {
    create: (item: Item, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO items (name, description) VALUES (?, ?)'
            const params = [item.name, item.description]
            database.run(sql, params, function(_err) {
                callback(this?.lastID)
            })
    },
    readAll: (callback: (items: Item[]) => void) => {
        const sql = 'SELECT * FROM items'
        const params: any[] = []
        database.all(sql, params, (_err, rows) => callback(rows))
    },
    read: (id: number, callback: (item?: Item) => void) => {
        const sql = 'SELECT * FROM items WHERE id = ?'
        const params = [id]
        database.get(sql, params, (_err, row) => callback(row))
    },
    refresh: (id: number, item: Item, callback: (notFound: boolean) => void) => {
        const sql = 'UPDATE items SET name = ?, description = ? WHERE id = ?'
        const params = [item.name, item.description, id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
    delete: (id: number, callback: (notFound: boolean) => void) => {
        const sql = 'DELETE FROM itens WHERE id = ?'
        const params = [id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
}

export default iRepository