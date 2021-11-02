import role from "../models/role.js";

const registerRole = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send("Incomplete Data");

  const existingRole = await role.findOne({ name: req.body.name });
  if (existingRole) return res.status(400).send("The role alrady exist");

  const roleSchema = new role({
    name: req.body.name,
    description: req.body.description,
    dbstatus: true,
  });

  const result = await roleSchema.save();
  if (!result) return res.status(400).send("Failed to register role");

  return res.status(200).send({ result });
};

export default { registerRole };
