import user from "../model/model.js";

const create_user = async (req, res) => {
  try {
    const { name, age, email, className, address } = req.body;
    const data = new user({ name, age, email, className, address });
    await data.save();

    res.status(201).json({
      message: "User created successfully",
      users: data,
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const get_user = async (_, res) => {
  try {
    const data = await user.find();

    res.status(200).json({
      status: true,
      users: data,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export default { create_user, get_user };
