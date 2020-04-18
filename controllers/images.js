const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
   destination: "./public/uploads/",
   filename: function(req, file, cb){
    //   cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    cb(null, file.originalname);
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("postImg");

const create = (req, res) => {
    upload(req, res, function (err) {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file);
        if(!err) {
            return res.send(200).end();
        }
    })
};

const index = async (req, res) => {
    try {
      const imgs = await db.Post.find({image});
      if (!imgs) return res.status(404).json({error: 'No posts found!'});
      return res.json(imgs);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

const show = async (req, res) => {
    try {
      const post = await db.Post.findOne(req.params.img);
      if (!post) return res.status(404).json({error: 'No post found with that ID!'});
      return res.json(post);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

module.exports = {
    create,
    show,
    index
}