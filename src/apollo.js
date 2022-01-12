import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { graphqlUrl } from "./config/Env";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem("token")));

export const logUserIn = (token) => {
  localStorage.setItem("token", token);
  isLoggedInVar(true);
};

export const logUserOut = () => {
  localStorage.removeItem("token");
  isLoggedInVar(false);
};

const httpLink = createHttpLink({
  uri: graphqlUrl,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
