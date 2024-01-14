import prisma from "../db";
export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id
    },
    include: {
      products: true
    }
  });

  return res.json({data:user.products});
}

export const getOneProduct = async (req, res) => {
  const {id} = req.params;
  const product = await prisma.product.findFirst({
    where: {
      id,
      belongsToId: req.user.id
    }
  });
  return res.json({ data: product });
}

export const createProduct = async (req, res) => {
  const { name } = req.body;
  const product = await prisma.product.create({
    data: {
      name,
      belongsTo: {
        connect: {
          id: req.user.id
        }
      }
    }
  });
  return res.json({ data: product });
}

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updated = await prisma.product.update({
    where: {
      id,
      belongsToId: req.user.id
    },
    data: {
      name
    }
  });
  return res.json({ data: updated });
}

export const deleteProduct = async (req, res) => {


  const deleted = await prisma.product.delete({
    where: {
      id: req.params.id,
      belongsToId: req.user.id
    }
  });
  return res.json({ data: deleted });
}
