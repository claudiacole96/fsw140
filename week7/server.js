const express = require("express");
const mysql = require("mysql");

//making a connection to mysql db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Zaudia795',
    //default connection to newly created db
    database: 'giveAndGet'
});

db.connect((err) => {
    if (err){
        throw err;
    }
    console.log('MySQL Database Connection Established Succeffully');
});

//setup server
const app = express();

//create db
app.get('/CreateDB', (req, res) => {
    let SQL = 'CREATE DATABASE giveAndGet';
    db.query(SQL, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('giveAndGet db createed successfully!');
    });
});

//create new table
app.get('/CreateTable', (req, res) => {
    let SQL = 'CREATE TABLE quotes (id int auto_increment, time_stamp datetime, quote varchar(250), author varchar(50), views int default (0), likes int default (0), report int default (0), primary key(id) )';
    db.query(SQL, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('quotes table was createed successfully!');
    });
});

//execute insert query
app.get('/InsertRow', (req, res) => {
    let postVariables = {quote: `Don't Give Up`, author: 'Anonymous'}
    let SQL = 'INSERT INTO quotes set ?';
    db.query(SQL, postVariables, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send(' row inserted successfully!');
    });
});

//execute select query
app.get('/GetQuotes', (req, res) => {
    let SQL = 'SELECT * FROM quotes';
    db.query(SQL, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('select query with no where clause executed successfully');
    });
});

//execute select query, get count of rows in total
app.get('/GetQuotesCount', (req, res) => {
    let SQL = 'SELECT COUNT (*) FROM quotes';
    db.query(SQL, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('select query for count of all rows executed successfully');
    });
    console.log(req.body);
});

//execute select query w/ where clause
app.get('/GetQuote/:id', (req, res) => {
    let SQL = `SELECT * FROM quotes where id = ${req.params.id}`;
    db.query(SQL, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('select query with no where clause executed successfully');
    });
});

//update with a where clause
app.get('/UpdateQuoteViews/:id', (req, res) => {
    let SQL = `update quotes set views = views + 1 where id = ${req.params.id}`
    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('update query to change name with where clause executed successfully')
    });
});

app.get('/UpdateQuoteLikes/:id', (req, res) => {
    let SQL = `update quotes set likes = likes + 1 where id = ${req.params.id}`
    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('update query to change name with where clause executed successfully')
    });
});

//delete query with where clause
app.get('/ReportQuote/:id', (req, res) => {
    let SQL = `update quotes set report =  1 where id = ${req.params.id}`
    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('set report column remove post from generating successfully')
    });
});

//server listening
app.listen('4000', () => {
    console.log('Local Web Server is up and Running!');
});