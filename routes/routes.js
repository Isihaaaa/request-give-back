const express = require("express");
const router = express.Router();
const chalk = require("chalk");

router.get("/", (req, res) => {
  console.log(
    chalk.bold.yellow(
      "------------------------------------------------------------"
    )
  );
  console.log(chalk.bold.blue("req header: ") + req.header);
  console.log(chalk.bold.blue("req body: ") + JSON.stringify(req.body));
  console.log(
    chalk.bold.yellow(
      "------------------------------------------------------------"
    )
  );

  res.sendStatus(200);
});

router.post("/", (req, res) => {
  console.log(
    chalk.bold.yellow(
      "------------------------------------------------------------"
    )
  );
  console.log(chalk.bold.blue("req header: ") + req.header);
  console.log(chalk.bold.blue("req body: ") + JSON.stringify(req.body));
  console.log(
    chalk.bold.yellow(
      "------------------------------------------------------------"
    )
  );
  res.sendStatus(200);
});

router.delete("/", (req, res) => {
  console.log(
    chalk.bold.yellow(
      "------------------------------------------------------------"
    )
  );
  console.log(chalk.bold.blue("req header: ") + req.header);
  console.log(chalk.bold.blue("req body: ") + JSON.stringify(req.body));
  console.log(
    chalk.bold.yellow(
      "------------------------------------------------------------"
    )
  );
  res.sendStatus(200);
});

router.patch("/", (req, res) => {
  console.log(
    chalk.bold.yellow(
      "------------------------------------------------------------"
    )
  );
  console.log(chalk.bold.blue("req header: ") + req.header);
  console.log(chalk.bold.blue("req body: ") + JSON.stringify(req.body));
  console.log(
    chalk.bold.yellow(
      "------------------------------------------------------------"
    )
  );
  res.sendStatus(200);
});

module.exports = router;
