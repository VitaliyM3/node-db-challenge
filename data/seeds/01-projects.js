
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: "Save the world.", description: "You have to turn into a super hero first bro", completed: false},
        {project_name: "Fly to the international space station", description: "Meet Elon Musk and see if he can hook you up with a ticket", completed: false},
        {project_name: "Build a House", description: "You first gotta gather all the shit you'll need to do this", completed: false},
        {project_name: "Clean the reef tank", description: "Make sure you have RODI water and salt before you start", completed: false},
        {project_name: "Take over the universe", description: "Become a billionare", completed: false},
      ]);
    });
};
