from __future__ import with_statement
import os
import logging
from logging.config import fileConfig

from flask import current_app
from alembic import context

# Alembic Config
config = context.config
fileConfig(config.config_file_name)
logger = logging.getLogger('alembic.env')

# Grab schema from environment
schema = os.getenv("SCHEMA")
db = current_app.extensions['migrate'].db
target_metadata = db.metadata

# Set metadata schema for generation
target_metadata.schema = schema

# Inject current DB URL (for offline mode)
config.set_main_option(
    'sqlalchemy.url',
    str(db.get_engine().url).replace('%', '%%')
)

def run_migrations_offline():
    """Run migrations without DB connection (offline mode)."""
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        include_schemas=True,
        version_table_schema=schema  # 💡 stores alembic_version table in schema
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online():
    """Run migrations with DB connection (online mode)."""
    def process_revision_directives(context, revision, directives):
        if getattr(config.cmd_opts, 'autogenerate', False):
            script = directives[0]
            if script.upgrade_ops.is_empty():
                directives[:] = []
                logger.info('No changes in schema detected.')

    connectable = db.get_engine()

    with connectable.connect() as connection:
        if schema:
            connection.execute(f'CREATE SCHEMA IF NOT EXISTS {schema}')
            connection.execute(f'SET search_path TO {schema}')

        context.configure(
            connection=connection,
            target_metadata=target_metadata,
            process_revision_directives=process_revision_directives,
            include_schemas=True,
            version_table_schema=schema,  # 💡 prevents versioning conflict
            **current_app.extensions['migrate'].configure_args
        )

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
