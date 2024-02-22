import { mysqlDB } from "../mysql.js"

export const useModel = {
    findMany: async () => {
        try {
            return await new Promise((ok) => {
                let queryStr = `
                SELECT *
                FROM todolist
                `
                mysqlDB.query(queryStr, (err, result) => {
                    if(err) ok({
                        err: " Lỗi query"
                    })
                    ok({
                        data: result
                    })
                })
            })
        } catch(err) {
            return err
        }
    },
    create: async (data) => {
        try {
            return await new Promise((ok) => {
                let queryStr = `
                    INSERT INTO todolist SET ?
                `
                mysqlDB.query(queryStr, data, (err, result) => {
                    if(err) ok({
                        err: " Lỗi query"
                    })
                    ok({
                        data: result
                    })
                })
            })
        } catch(err) {
            return err
        }
    },
    delete: async (id) => {
        try {
            return await new Promise((ok) => {
                let queryStr = `
                    DELETE FROM todolist WHERE id = ${id}
                `
                mysqlDB.query(queryStr, (err, result) => {
                    if(err) ok({
                        err: " Lỗi query"
                    })
                    ok({
                        data: result
                    })
                })
            })
        } catch(err) {
            return err
        }
    },
    update: async (id, data) => {
        try {
            return await new Promise((ok) => {
                let updateDataStr = ``;

                for(let i in data) {
                    updateDataStr += `${i} = "${data[i]}",`
                }

                let queryStr = `
                UPDATE user 
                SET ${updateDataStr.slice(0, -1)}
                WHERE id = ${id}
                `
                mysqlDB.query(queryStr, (err, result) => {
                    if(err) ok({
                        err: " Lỗi query"
                    })
                    ok({
                        data: result
                    })
                })
            })
        } catch(err) {
            return err
        }
    }
}