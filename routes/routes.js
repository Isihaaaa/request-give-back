const express = require("express");
const router = express.Router();
const chalk = require("chalk");

router.get("/", (req, res) => {
  console.log(
    chalk.bold.yellow(
      "------------------------------------------------------------"
    )
  );
  console.log(chalk.bold.blue("req method: ") + req.method);
  console.log(chalk.bold.blue("req url: ") + req.url);
  console.log(chalk.bold.blue("req header: ") + JSON.stringify(req.headers));
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
  console.log(chalk.bold.blue("req method: ") + req.method);
  console.log(chalk.bold.blue("req url: ") + req.url);
  console.log(chalk.bold.blue("req header: ") + JSON.stringify(req.headers));
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
  console.log(chalk.bold.blue("req method: ") + req.method);
  console.log(chalk.bold.blue("req url: ") + req.url);
  console.log(chalk.bold.blue("req header: ") + JSON.stringify(req.headers));
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
  console.log(chalk.bold.blue("req method: ") + req.method);
  console.log(chalk.bold.blue("req url: ") + req.url);
  console.log(chalk.bold.blue("req header: ") + JSON.stringify(req.headers));
  console.log(chalk.bold.blue("req body: ") + JSON.stringify(req.body));
  console.log(
    chalk.bold.yellow(
      "------------------------------------------------------------"
    )
  );
  res.sendStatus(200);
});

module.exports = router;
