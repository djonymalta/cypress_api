const { Router } = require('express');
const router = Router()

 const { getUsers, createUser, getUserById, deleteUser, updateUser } = require('../controllers/index.controllers')
  
// Listar usuários
 router.get('/users', getUsers)

// Listar Usuários por ID
router.get('/users/:id', getUserById);

// Inserir usuários
router.post('/users', createUser);

router.delete('/users/:id', deleteUser);

router.put('/users/:id', updateUser)

module.exports = router;