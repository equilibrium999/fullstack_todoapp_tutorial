var Todos = require("../models/todoModel");

module.exports = function (app) {
    app.get("/api/setupTodos", function (req, res) {
        // setup seed data
        var seedTodos = [
            {
                text: "Hoc Nodejs",
                isDone: false
            },
            {
                text: "Hoc AngularJs",
                isDone: false
            },
            {
                text: "Viet mot ung dung hoan chinh",
                isDone: false
            }
        ];

        Todos.create(seedTodos, function (err, results) {
            res.send(results);
        });
    });
};