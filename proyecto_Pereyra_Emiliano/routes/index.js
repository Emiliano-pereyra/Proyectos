var express = require('express');
var router = express.Router();
var nodemailer= require('nodemailer');
var novedadesmodel =require('../models/novedadesmodel');
var cloudinary = require('cloudinary').v2;

/* GET home page. */
router.get('/', async function(req, res, next) {

 var novedades= await novedadesmodel.getNovedades();
 novedades =novedades.splice(0,5);
 novedades= novedades.map(novedad =>{
   if(novedad.img_id) {
     const imagen = cloudinary.url(novedad.img_id, {
       width:460,
       crop:'fill'
     });
     return{
       ...novedad,
       imagen
     }
   } else {
     return{
       ...novedad,
       imagen: '/images/noimage.jpg'
     }
   }
 });
  res.render('index', {
    novedades
  });
});

router.post('/', async(req, res, next) => {

  var Nombre= req.body.Nombre;
  var Apellido= req.body.Apellido;
  var Email= req.body.Email;
  var Telefono= req.body.Telefono;
  var Consulta= req.body.Consulta;


var obj={
  to: 'emilianopereyra844@gmail.com',
  subject:'contacto desde la pagina',
  html: Nombre + " " + Apellido + " envio la consulta y quiere la respuesta enviada a: " + Email + ". <br> Su consulta fué " + Consulta + ". <br> Su número es " + Telefono
}

var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth:{
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS
  }
});

var info= await transporter.sendMail(obj);

res.render('index', {
  message: 'Mensaje enviado correctamente',
});
});

module.exports = router;
