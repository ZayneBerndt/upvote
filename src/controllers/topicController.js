const topicQueries = require("../db/queries.topics.js");

module.exports = {
  index(res, body, next) {
    topicQueries.getAllTopics((err, topics) => {
        if(err){
          res.redirect(500, "static/index");
        } else {
          res.render("topics/index", {topics});
        }
      })
  }
}
