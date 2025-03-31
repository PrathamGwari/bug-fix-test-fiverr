// Routes
import home from "./home.js";
import blog from "./blog.js";
import contact from "./contact.js";
import search from "./search.js";
import faqs from "./faqs.js";
import page from "./page.js";

export default (app, config, bucket, partials, _) => {
  home(app, config, bucket, partials, _);
  blog(app, config, bucket, partials, _);
  contact(app, config, bucket, partials, _);
  search(app, config, bucket, partials, _);
  faqs(app, config, bucket, partials, _);
  page(app, config, bucket, partials, _);
};
