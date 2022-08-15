const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
app.use(express.static('public'));  //indica que la aplicacion tiene q usar archivos estaticos, es decir imagenes por ejemplo, 
//o app.use(express.static(path.join(__Dirname, 'public')) es para linux

app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`));

app.get('/', (req, res)=>
    res.sendFile(path.join(__dirname, './views/home.html'))
)