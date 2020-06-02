
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: "Computer", description: "You need internet access"},
        {resource_name: "Time Machine", description: "To travel time"},
        {resource_name: "Gold Bars", description: "You got these from a heist"},
        {resource_name: "Weapons", description: "You need protection if you get attacked"},
        {resource_name: "Food", description: "Something to eat"},
        {resource_name: "Fast Car", description: "Basic travel"},
        {resource_name: "Submarine", description: "Underwater travel"},
        {resource_name: "Lumber", description: "Wood"},
        {resource_name: "Tools", description: "Building tools"},
        {resource_name: "Supplies", description: "Building supplies"}
      ]);
    });
};
