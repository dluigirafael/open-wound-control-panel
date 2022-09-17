let env = process.env;
const config = {
	app: {
		port: parseInt(env.PORT) || 3000,
	},
	db: {
		host: "localhost",
		port: parseInt(env.DB_PORT) || 27017,
		name: env.DB_NAME || "db",
	},
	env: process.env.NODE_ENV,
};
export default config;
