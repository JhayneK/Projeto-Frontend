import { useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "nome", headerName: "Nome", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "Titulo",
    type: "string",
    headerName: "Título",
    width: 250,
  },
  {
    field: "Transacao",
    type: "string",
    headerName: "Transação",
    width: 150,
  },
  {
    field: "Preco",
    type: "string",
    headerName: "Preço",
    width: 200,
  },
  {
    field: "ValorMercado",
    headerName: "Valor de Mercado",
    width: 200,
    type: "string",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Portifólio</h1>
        <button onClick={() => setOpen(true)}>Adicionar novas Ações</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
     
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
      
    </div>
  );
};

export default Products;
