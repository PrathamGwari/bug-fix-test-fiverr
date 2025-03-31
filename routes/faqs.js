// faqs.js
import globals from "../helpers/globals.js";

export default (app, config, bucket, partials, _) => {
  app.get("/faqs", async (req, res) => {
    try {
      const response = await bucket.getObjects();
      const objects = response.objects;
      res.locals.globals = globals(objects, _);
      const page = _.find(objects, { slug: "faqs" });
      res.locals.page = page;
      return res.render("faqs.html", {
        partials,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ status: "error", message: "Yikes, something went wrong!" });
    }
  });
};
