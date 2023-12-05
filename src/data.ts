export const menu = [
  {
    id: 1,
    title: "Menu",
    listItems: [
      {
        id: 1,
        title: "Pagina Inicial",
        url: "/login",
        icon: "home.svg",
      },
      
    ],
  },
  {
    id: 2,
    title: "Para Você",
    listItems: [
      {
        id: 1,
        title: "Carteira",
        url: "/users",
        icon: "wallet.svg",
      },
      {
        id: 2,
        title: "Portfólio",
        url: "/products",
        icon: "portfolio.svg",
      },     
    ],
  },
  {
    id: 3,
    title: "DASHBOARDS",
    listItems: [
      {
        id: 1,
        title: "Demonstrativos",
        url: "/home",
        icon: "element.svg",
      },
      
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://www.svgrepo.com/show/498220/money-recive.svg",
    username: "CDB",
    email: "Compra",
    amount: "3.600",
  },
  {
    id: 2,
    img: "https://www.svgrepo.com/show/498223/money-send.svg",
    username: "Fundos Imobiliários",
    email: "Venda",
    amount: "3.200",
  },
  {
    id: 3,
    img: "https://www.svgrepo.com/show/498220/money-recive.svg",
    username: "Cripto Moedas",
    email: "Compra",
    amount: "9.800",
  },
  {
    id: 4,
    img: "https://www.svgrepo.com/show/498220/money-recive.svg",
    username: "Cripto Moedas",
    email: "Compra",
    amount: "2.500",
  },
  {
    id: 5,
    img: "https://www.svgrepo.com/show/498220/money-recive.svg",
    username: "CDB",
    email: "Compra",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://www.svgrepo.com/show/498220/money-recive.svg",
    username: "Fundos Imobiliários",
    email: "Compra",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://www.svgrepo.com/show/498220/money-recive.svg",
    username: "Ações de Empresas",
    email: "Compra",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Lucrado",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Dom", users: 400 },
    { name: "Seg", users: 600 },
    { name: "Ter", users: 500 },
    { name: "Qua", users: 700 },
    { name: "Qui", users: 400 },
    { name: "Sex", users: 500 },
    { name: "Sab", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Percentual de Ganhos",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Dom", products: 400 },
    { name: "Seg", products: 600 },
    { name: "Ter", products: 500 },
    { name: "Qua", products: 700 },
    { name: "Qui", products: 400 },
    { name: "Sex", products: 500 },
    { name: "Sab", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Percentual de Perdas",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Dom", revenue: 400 },
    { name: "Seg", revenue: 600 },
    { name: "Ter", revenue: 500 },
    { name: "Qua", revenue: 700 },
    { name: "Qui", revenue: 400 },
    { name: "Sex", revenue: 500 },
    { name: "Sab", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Investido",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Dom", ratio: 400 },
    { name: "Seg", ratio: 600 },
    { name: "Ter", ratio: 500 },
    { name: "Qua", ratio: 700 },
    { name: "Qui", ratio: 400 },
    { name: "Sex", ratio: 500 },
    { name: "Sab", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Evolução Aportes",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Dom",
      profit: 4000,
    },
    {
      name: "Seg",
      profit: 3000,
    },
    {
      name: "Ter",
      profit: 2000,
    },
    {
      name: "Qua",
      profit: 2780,
    },
    {
      name: "Qui",
      profit: 1890,
    },
    {
      name: "Sex",
      profit: 2390,
    },
    {
      name: "Sab",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Anual Aportes",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Dom",
      visit: 4000,
    },
    {
      name: "Seg",
      visit: 3000,
    },
    {
      name: "Ter",
      visit: 2000,
    },
    {
      name: "Qua",
      visit: 2780,
    },
    {
      name: "Qui",
      visit: 1890,
    },
    {
      name: "Sex",
      visit: 2390,
    },
    {
      name: "Sab",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://www.svgrepo.com/show/491278/money-dollars.svg",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://www.svgrepo.com/show/491278/money-dollars.svg",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://www.svgrepo.com/show/491278/money-dollars.svg",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://www.svgrepo.com/show/491278/money-dollars.svg",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://www.svgrepo.com/show/491278/money-dollars.svg",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.svgrepo.com/show/491278/money-dollars.svg",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://www.svgrepo.com/show/491278/money-dollars.svg",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://www.svgrepo.com/show/491278/money-dollars.svg",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://www.svgrepo.com/show/491278/money-dollars.svg",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://www.svgrepo.com/show/491278/money-dollars.svg",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://www.svgrepo.com/show/491278/money-dollars.svg",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://www.svgrepo.com/show/491278/money-dollars.svg",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://www.svgrepo.com/show/491278/money-dollars.svg",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://www.svgrepo.com/show/491278/money-dollars.svg",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://www.svgrepo.com/show/491278/money-dollars.svg",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];

export const products = [
  {
    id: 1,
    img: "https://www.svgrepo.com/show/486184/money-integral-line.svg",
    Titulo: "CDB",
    Transacao: "Venda",
    Preco: "$250.99",
    ValorMercado: "10", 
  },
  {
    id: 2,
    img: "https://www.svgrepo.com/show/486184/money-integral-line.svg",
    Titulo: "Ações de Empresas",
    Transacao: "Compra",
    Preco: "$499.99",
    ValorMercado: "1.022023",
    
  },
  {
    id: 3,
    img: "https://www.svgrepo.com/show/486184/money-integral-line.svg",
    Titulo: "Ações de Empresas",
    Transacao: "Venda",
    Preco: "$999.49",
    ValorMercado: "5000",
    
  },
  {
    id: 4,
    img: "https://www.svgrepo.com/show/486184/money-integral-line.svg",
    Titulo: "Fundos Imobiliários",
    Transacao: "Compra",
    Preco: "$799.49",
    ValorMercado: "50,0",
    
  },
  {
    id: 5,
    img: "https://www.svgrepo.com/show/486184/money-integral-line.svg",
    Titulo: "Ações de Empresas",
    Transacao: "Compra",
    Preco: "$799.49",
    ValorMercado: "2023",
  },
  {
    id: 6,
    img: "https://www.svgrepo.com/show/486184/money-integral-line.svg",
    Titulo: "CDB",
    Transacao: "Compra",
    Preco: "$799.49",
    ValorMercado: "23",
  },
  {
    id: 7,
    img: "https://www.svgrepo.com/show/486184/money-integral-line.svg",
    Titulo: "CDB",
    Transacao: "Venda",
    Preco: "$799.49",
    ValorMercado: "20",
  },
  {
    id: 8,
    img: "https://www.svgrepo.com/show/486184/money-integral-line.svg",
    Titulo: "Fundos Imobiliários",
    Transacao: "Compra",
    Preco: "$799.49",
    ValorMercado: "3",
  },
  {
    id: 9,
    img: "https://www.svgrepo.com/show/486184/money-integral-line.svg",
    Titulo: "Cripto Moedas",
    Transacao: "Venda",
    Preco: "$799.49",
    ValorMercado: "02,2023",
  },
  {
    id: 10,
    img: "https://www.svgrepo.com/show/486184/money-integral-line.svg",
    Titulo: "Apple Iphone 14 Pro Max",
    Transacao: "Compra",
    Preco: "$799.49",
    ValorMercado: "2,023",
  },
];

export const singleUser = {
  id: 1,
  title: "Jhayne",
  img: "https://www.svgrepo.com/show/532397/user-shield-alt-1.svg",
  info: {
    username: "Jhayne",
    fullname: "Jhayne",
    email: "investcentral@gmail.com",
    phone: "123 456 789",
    status: "Ok",
  },
  chart: {
    dataKeys: [
      { name: "Compras", color: "#82ca9d" },
      { name: "Vendas", color: "#8884d8" },
    ],
    data: [
      {
        name: "Dom",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Seg",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Ter",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Qua",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Qui",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Sex",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sab",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Você realizou a compra de um ativo CDB",
      time: "1 dia atrás",
    },
    {
      text: "Você realizou a venda de um ativo de Fundos Imobiliários",
      time: "2 dia atrás",
    },
    {
      text: "Você realizou a compra de um ativo de Cripto Moedas",
      time: "3 dia atrás",
    },
    {
      text: "Você realizou a compra de um ativo de Cripto Moedas",
      time: "4 dia atrás",
    },
    {
      text: "Você realizou a compra de um ativo de CDB",
      time: "5 dia atrás",
    },
    {
      text: "Você realizou a compra de um ativo de Fundos Imobiliários",
      time: "6 dia atrás",
    },
    {
      text: "Você realizou a compra de um ativo de Ações de Empresas",
      time: "7 dia atrás",
    }
  ],
};

export const singleProduct = {
  id: 1,
  title: "Portfólio InvestCentral",
  img: "https://www.svgrepo.com/show/94578/investment-insurance.svg",
  info: {
    Perfil: "Conservador",
    Aportes: "200",
    Faturado: "$250.99",
  },
  chart: {
    dataKeys: [
      { name: "Aportes", color: "#82ca9d" },
      { name: "Perdas", color: "#8884d8" },
    ],
    data: [
      {
        name: "Dom",
        Aportes: 4000,
        Perdas: 2400,
      },
      {
        name: "Seg",
        Aportes: 3000,
        Perdas: 1398,
      },
      {
        name: "Ter",
        Aportes: 2000,
        Perdas: 3800,
      },
      {
        name: "Qua",
        Aportes: 2780,
        Perdas: 3908,
      },
      {
        name: "Qui",
        Aportes: 1890,
        Perdas: 4800,
      },
      {
        name: "Sex",
        Aportes: 2390,
        Perdas: 3800,
      },
      {
        name: "Sab",
        Aportes: 3490,
        Perdas: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Você realizou a compra de um ativo CDB",
      time: "1 dia atrás",
    },
    {
      text: "Você realizou a venda de um ativo de Fundos Imobiliários",
      time: "2 dia atrás",
    },
    {
      text: "Você realizou a compra de um ativo de Cripto Moedas",
      time: "3 dia atrás",
    },
    {
      text: "Você realizou a compra de um ativo de Cripto Moedas",
      time: "4 dia atrás",
    },
    {
      text: "Você realizou a compra de um ativo de CDB",
      time: "5 dia atrás",
    },
    {
      text: "Você realizou a compra de um ativo de Fundos Imobiliários",
      time: "6 dia atrás",
    },
    {
      text: "Você realizou a compra de um ativo de Ações de Empresas",
      time: "7 dia atrás",
    }
  ],
};
