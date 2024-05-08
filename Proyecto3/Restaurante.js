const exp = require("express");

const host = exp();

const Platillos = [
  {
    id: "1",
    Nombre: "Cafe de civeta",
    Precio: "205$ por kilogramo",
  },
  {
    id: "2",
    Nombre: "Jamón Ibérico de Bellota Albarragena",
    Precio: "350$ por kilogramo",
  },
  {
    id: "3",
    Nombre: "Entrecot de Wagyu",
    Precio: "Mil 100$ por kilogramo",
  },
];

host.get("/api/comida", (req, res, next) => {
  const comida = Platillos;
  res.send(comida);
  next();
});

host.get("/api/comida/:id", (req, res, next) => {
  const comida = Platillos.find((p) => {
    return p.id === req.params.id;
  });
  res.send(comida);
  next();
});
host.listen(5000);
