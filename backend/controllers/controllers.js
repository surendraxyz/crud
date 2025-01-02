const create_user = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    console.log(name, age, email);
  } catch (error) {
    console.log(error);
  }
};

const get_user = async (_, res) => {
  try {
    res.send("hello surenda");
  } catch (error) {
    console.log(error);
  }
};

export default { create_user, get_user };
