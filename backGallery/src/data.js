import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Adminus Pulus Maximus",
      email: "buligan2006@gmail.com",
      password: bcrypt.hashSync("test1234", 8),
      isAdmin: true,
    },
  ],
};

export default data;
