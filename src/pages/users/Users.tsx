import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { userRows } from "../../data";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "nome", headerName: "Nome", width: 90 },
  {
    field: "ultimo preco",
    type: "number",
    headerName: "Último Preço",
    width: 200,
  },
  {
    field: "porcentagem",
    type: "number",
    headerName: "Porcentagem Lucro",
    width: 200,
  },
  {
    field: "valorMercado",
    headerName: "Valor de Mercado",
    width: 200,
    type: "number",
  },
  {
    field: "ultimodias",
    headerName: "últimos Dias",
    width: 150,
    type: "number",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Carteira</h1>
        <button onClick={() => setOpen(true)}>Add Novo Investimento</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
      
    </div>
  );
};

export default Users;
