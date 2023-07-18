import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import FormCategoriaProduto from './views/categoriaproduto/FormCategoriaProduto';
import ListCategoriaProduto from './views/categoriaproduto/ListCategoriaProduto';
import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import FormLogin from './views/login/FormLogin';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import FormRecuperarSenha from './views/login/FormRecuperarSenha';
import FormConfirmarCodigo from './views/login/FormConfirmarCodigo';
import InicioTela from './views/inicioTela/InicioTela';
import Index from './views/home/Index';
import PaginaManutencao from './views/paginaManutencao/PaginaManutencao';
import Agendamento from './views/agendamento/Agendamento';
import Cortes from './views/agendamento/Cortes';




function AppRouter() {
  return (
    <Routes>
     
      <Route path="/" element={<Index />} />
      <Route path="/login" element={< FormLogin/>} />
      <Route path="/list-cliente" element={<ListCliente />} />
      <Route path="/form-cliente" element={<FormCliente />} />
      <Route path="/list-produto" element={<ListProduto />} />
      <Route path="/form-produto" element={<FormProduto />} />
      <Route
        path="/list-categoria-produto"
        element={<ListCategoriaProduto />}
      />
      <Route
        path="/form-categoria-produto"
        element={<FormCategoriaProduto />}
      />
      <Route path="/list-entregador" element={<ListEntregador />} />
      <Route path="/form-entregador" element={<FormEntregador />} />

      <Route path="/recuperar-senha" element={<FormRecuperarSenha />} />

      <Route path="/confirmar-codigo" element={<FormConfirmarCodigo />} />
      <Route path="/inicio-tela" element={<InicioTela />} />
      
      <Route path="/pagina-manutencao" element={<PaginaManutencao />} />
      <Route path="/agendamento" element={<Agendamento />} />
      <Route path="/cortes" element={<Cortes />} />
     

      {/* Redirecionar para a página inicial se a rota não for encontrada */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRouter;
