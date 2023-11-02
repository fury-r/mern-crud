const { Users } = require("../models/user");
const { ObjectId } = require("mongodb");

function insertData(req, res) {
    console.log("insert")

  const user = new Users({
    ...req.body,
  });


  
  user.save((err) => {
    if (err?.code == 11000) {
      res.status(400).send({
        status: "failed",
        message: "Email already exists",
        type: 2,
      });
    } else if (err) {
      return res.status(422).json(err.errors);
    } else {
      return res.status(201).json({ status: "success", type: 1 });
    }
  });
}

function getData(req, res) {
    console.log("get")

  Users.find({}).exec(function (err, data) {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.status(200).send({ status: "success", data: data });
    }
  });
}

function updateData(req, res) {
    console.log("update")
  let body = req.body;
  let id = req.body._id;
  delete body._id;
  try {
    Users.updateOne({ _id: ObjectId(id) }, { ...body }).exec((err, data) => {
      if (err?.code == 11000) {
        res.status(400).send({
          status: "failed",
          message: "Email already exists",
          type: 2,
        });
      } else if (data?.matchedCount == 0) {
        return res.status(401).send({ message: "no match found" });
      } else {
        return res.status(200).send({ status: "success" });
      }
    });
  } catch(err) {
    return res.status(401).send({ status: "failed" });
  }
}

function deleteData(req, res) {
    console.log("delete")

  let id = req.query.id;
  try{
    Users.deleteOne({ _id: ObjectId(id) }).exec((err, data) => {
      if (data.matchedCount == 0) {
        return res.status(401).send({ message: "no match found" });
      } else {
        return res.status(200).send({ status: "success" });
      }
    });
  } catch(err) {
    return res.status(401).send({ status: "failed" });
  }
}

module.exports = {
  insertData,
  getData,
  updateData,
  deleteData,
};
