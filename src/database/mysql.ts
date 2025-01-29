import serverlessMysql from 'serverless-mysql';

export const mysql = serverlessMysql({
    config: {
        host: 'localhost',
        database: 'authentication',
        user: 'haruo',
        password: '#18Fhn3?'
    }
});