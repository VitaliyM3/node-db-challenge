
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('id');
        tbl.string('project_name', 128)
            .notNullable();
        tbl.string('description', 128);
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments('id');
        tbl.string('resource_name', 128)
            .notNullable()
            .unique();
        tbl.string('description', 128);
    })
    .createTable('tasks', tbl => {
        tbl.increments('id');
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('projects.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.string('description', 128)
            .notNullable();
        tbl.string('notes', 128);
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('projects.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resources.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
