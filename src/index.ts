import logger from 'jet-logger';
import { Pool } from 'pg'
import studentsTable from './models/studentsTable';

import server from './server';

const pool = new Pool({
    user: 'alia',
    host: 'localhost',
    database: 'alia',
    port: 5432,
})

pool.connect()
    .then(async () => {
        const serverStartMsg = 'Express server started on port: ',
            port = (process.env.PORT);
        await studentsTable.createTable()
        // pool.query('select * from students').then(result=>console.log(result.rows))
        // Start server
        server.listen(port, () => {
            logger.info(serverStartMsg + port);
        })
    })
    .catch((e) => {
        console.log(e)
        process.exit(1)
    })

export default pool
