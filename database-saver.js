const mysqldump = require('mysqldump');
const db = require('../database-app/database.js');
const CronJob = require("cron").CronJob;

new CronJob(
    // "0 */1 * * * *",
    "0 0 */8 * * *",
    function (){
        db.database(mysqldump);
        console.log("You will see this message every 8 hours");
    },
    null,
    true,
    "America/Chicago"
);
