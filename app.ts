import {createConnection} from "typeorm";

// connection settings are in the "ormconfig.json" file

// create app db connection.
createConnection().then(async connection => {
    console.log("Database Connection Created");
}).catch(error => console.log("Data Access Error : ", error));