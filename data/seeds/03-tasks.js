
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: "Run", notes: "run like the wind", completed: false},
        {project_id: 2, description: "Sleep", notes: "sleep 6 hours a day", completed: false},
        {project_id: 3, description: "Fly", notes: "fly to another realm", completed: false},
        {project_id: 4, description: "Jump", notes: "jump to the moon", completed: false},
        {project_id: 5, description: "Hide", notes: "never", completed: false},
      ]);
    });
};
