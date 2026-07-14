import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./schema/schema";
import resolvers from "./resolver/universityResolver";

const server = new ApolloServer({
  typeDefs:schema,
  resolvers
});
async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`Server running at ${url}`);
}
startServer()
