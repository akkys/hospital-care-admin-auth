const router = require("express").Router();
const {
  getBranch,
  addBranch,
  updateBranch,
  deleteBranch,
} = require("../../controllers/admin/BranchController");
const { Auth, adminMiddleware } = require("../../util");

router.get("/admin/branches/", getBranch);

router.post("/admin/branches/add", Auth, adminMiddleware, addBranch);

router.post("/admin/branches/update/:id", Auth, adminMiddleware, updateBranch);

router.delete("/admin/branches/:id", Auth, adminMiddleware, deleteBranch);

module.exports = router;
