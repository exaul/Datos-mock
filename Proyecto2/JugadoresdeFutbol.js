const exp = require("express");

const host = exp();

const Jugadores = [
  {
    id: "1",
    Nombre: "Haaland",
    Equipo: "M.City",
  },
  {
    id: "2",
    Nombre: "Messi",
    Equipo: "PSG",
  },
  {
    id: "3",
    Nombre: "vinicius",
    Equipo: "R.Madrid",
  },
];

host.get("/api/jugadores", (req, res, next) => {
  const jugadores = Jugadores;
  res.send(jugadores);
  next();
});

host.get("/api/jugadores/:id", (req, res, next) => {
  const jugadores = Jugadores.find((p) => {
    return p.id === req.params.id;
  });
  res.send(jugadores);
  next();
});
host.listen(4000);
