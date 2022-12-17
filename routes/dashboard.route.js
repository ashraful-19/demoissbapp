const express = require("express");
const router = express.Router();
const multer  = require('multer');
const { upload } = require("../middlewares/multer");

const {
  
  
  iqadmin,
  dashboard,
  iq_save,
  delete_iq,
  get_question,
  iq_update,
  iqList,
  render_verbal,
  resultiq,
  doubts,


} = require("../controllers/dashboard.controller");
const {
  
  ppdtAddAdmin,

  ppdtShowVideoAdmin,
  ppdtShowVideoUser,
} = require("../controllers/content.controller");


router.post("/dashboard/iq_admin", upload.single('avatar'),iq_save);
router.get("/dashboard", dashboard);
router.get("/dashboard/iq_admin", iqadmin);
router.get("/dashboard/iq_admin/:id", delete_iq);
router.get("/dashboard/iq_admin/edit/:id", get_question);
router.post("/dashboard/iq_admin/update/:id", iq_update);
router.get("/iqlist", iqList);
router.get("/iqlist/verbal", render_verbal);
router.post("/resultiq", resultiq);
router.get("/doubts", doubts);
router.get("/dashboard/ppdt/video", ppdtShowVideoAdmin); 
router.post("/dashboard/ppdt/video", ppdtAddAdmin);

router.get("/ppdt/video", ppdtShowVideoUser); 


module.exports = router;
