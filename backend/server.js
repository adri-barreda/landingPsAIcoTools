const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3001;

// Configurar multer para la subida de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Configurar SQLite
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

// Crear la tabla si no existe
db.run(`CREATE TABLE IF NOT EXISTS submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  audioFile TEXT
)`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para manejar el envío del formulario
app.post('/submit', upload.single('audio'), (req, res) => {
    const { email } = req.body;
    const audioFile = req.file ? req.file.path : '';
  
    db.run('INSERT INTO submissions (email, audioFile) VALUES (?,?)', [email, audioFile], function (err) {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.json({ id: this.lastID, email, audioFile });
    });
  });
  

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
