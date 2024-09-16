exports.submitContact = function (req, res) {

  if (req.body.secret.toUpperCase() !== "PUPPY") {
    console.log("Spam detected")
    return res.json({ message: "Sorry!" })
  }

  console.log(req.body)
  res.send("Thanks for contacting us!")
}