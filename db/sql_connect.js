const db = require("mysql");

var connection = db.createConnection({
        host: 'den1.mysql6.gear.host',
        user: 'librarysystems',
        password: 'airbus@360',
        name: 'librarysystems'
    }
);

connection.connect(
    (err)=> {
        if(err)
        {
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log("db connected");
    }
);

module.exports = connection;