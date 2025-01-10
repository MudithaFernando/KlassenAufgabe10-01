const express = require('express');
const app = express();
const logger = require('./logger');

const port = 5001;

app.get('/', (req, res) =>{
    res.send('Hello World');
    console.log("Wurzel Route aufgerufen");
    logger.info('Wurzel Route aufgerufen');
});

app.get('/hallo', (req, res) =>{
    res.send('Hallo Welt');
    console.log("Hallo Welt Route aufgerufen");
    logger.info('Hallo Welt Route aufgerufen');
});

app.get('/bye', (req, res) =>{
    res.send('Bye Bye');
    console.log("Bye Route aufgerufen");
    logger.info('Bye Route aufgerufen');
});

app.get("/error", (req,res) =>{
    res.status(404).send("404 error")
    console.log("Seite Nicht Erreichbar")
    logger.error("Seite Nicht Erreichbar: Route/error")
})


// Neue Route: Fehler filtern
app.get('/filter-errors', (req, res) => {
    const errorLogs = logs.filter(log => log.startsWith("ERROR"));
    res.json(errorLogs);
});

// Neue Route: Log-Level zählen
app.get('/count-log-levels', (req, res) => {
    const logCounts = { INFO: 0, WARNING: 0, ERROR: 0 };

    logs.forEach(log => {
        const level = log.split(":")[0];
        if (logCounts.hasOwnProperty(level)) {
            logCounts[level]++;
        }
    });

    res.json(logCounts);
});


app.listen(port, () => {
    console.log(`Server läuft auf ${port}`);
    logger.info(`Server läuft auf ${port}`);
})