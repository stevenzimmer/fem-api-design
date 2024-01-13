import { Router } from 'express';


const router = Router();

// Product routes
router.get("/products", (req, res) => {
  // res.send("Products");
  res.json({ message: req.secret });
});
router.get("/products/:id", (req, res) => {
  res.send("Product Id");
  // res.json({ id: req.params.id });
});
router.post('/products', (req, res) => {
  res.send('Create product');

  // res.json({ message: "Create product" });

});
router.put("/products/:id", (req, res) => {});
router.delete("/products/:id", (req, res) => {});

// Update routes
router.get('/update', (req, res) => {
  res.send('update');

  res.json({ message: "update" });
});
router.get("/update/:id", (req, res) => {
  res.send("update Id");
  res.json({ id: req.params.id });
});
router.post('/update', (req, res) => {
  res.send('Create update');

  res.json({ message: "Create update" });

});
router.put("/update/:id", (req, res) => {});
router.delete("/update/:id", (req, res) => {});

// Update Point routes
router.get('/updatepoint', (req, res) => {
  res.send('updatepoint');

  res.json({ message: "updatepoint" });
});
router.get("/updatepoint/:id", (req, res) => {
  res.send("updatepoint Id");
  res.json({ id: req.params.id });
});
router.post('/updatepoint', (req, res) => {
  res.send('Create updatepoint');

  res.json({ message: "Create updatepoint" });

});
router.put("/updatepoint/:id", (req, res) => {});
router.delete("/updatepoint/:id", (req, res) => {});


export default router;
