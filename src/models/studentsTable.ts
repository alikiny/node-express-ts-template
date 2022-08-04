import pool from "../index";

const createTable = async () => {
    await pool.query(
        "create table if not exists students(\
            id serial primary key,\
            firstname varchar not null,\
            lastname varchar not null,\
            grade varchar not null)"
    )
}

export default {
    createTable
}