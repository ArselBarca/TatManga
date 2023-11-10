const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Настройка хранилища для загрузки файлов
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const manganame = req.params.manganame;
    cb(null, `manga/${manganame}`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

// Загрузка манги
app.post('/upload/:manganame', upload.array('files'), (req, res) => {
  res.send('Файлы успешно загружены');
});

// Доступ к загруженным файлам
app.use('/manga/:manganame', express.static(path.join(__dirname, 'manga')));

app.get('./css/style.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('./js/script.js', (req, res) => {
  res.setHeader('Content-Type', 'text/javascript');
  res.sendFile(path.join(__dirname, 'script.js'));
});

app.listen(8080, () => {
  console.log('Сервер запущен на порту 8080');
});
