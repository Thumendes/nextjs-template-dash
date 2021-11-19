const productsCodes = {
  intelligence: "1891248",
  sstPlus: "1891249",
  bmax: "1891250",
  p3: "1891251",
  etm: "1891252",
};

function useUser() {
  const prods = [
    // productsCodes.intelligence,
    productsCodes.sstPlus,
    productsCodes.bmax,
    productsCodes.p3,
    // productsCodes.etm,
  ];

  const user = {
    name: "Arthur Mendes",
    email: "thumendess@gmail.com",
    admin: true,
    prods,
  };

  return { user };
}

export default useUser;
