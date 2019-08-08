// Sequelize ORM (Typescript version)
import { Sequelize } from "sequelize-typescript";

// Logger package
import { logger } from "../utils/Logger";

// Configuration package
import { config } from "node-config-ts";

// Our models
import { User } from "./models/User";
import { Post } from "./models/Post";

// Build database configuration
const dbConfig = config.db;

// Connect to the database
let sequelize: Sequelize = new Sequelize({
  dialect: "sqlite",
  logging: false,
  storage: "./database.sqlite3",

  // INFO: https://github.com/sequelize/sequelize/issues/8417#issuecomment-334056048
  operatorsAliases: false
});
logger.debug("CONFIG: Database configuration");
logger.debug({
  ...dbConfig,
  password: "--------------"
});

// Register our models with sequelize
sequelize.addModels([User, Post]);

// Helper methods

/**
 * Force initialization of the models and creation of tables
 * in the database; wipes all data if any exists.
 * @returns Success of the operation.
 */
async function resetDb(): Promise<boolean> {
  try {
    await sequelize.sync({ force: true });
    logger.debug("DB: Database initialized");
  } catch (ex) {
    logger.error("DB: ERROR initializing database");
    logger.error(ex);
    return false;
  }
  return true;
}

// Module exports
export { sequelize, Sequelize };
export { Post, User };
export { resetDb };
