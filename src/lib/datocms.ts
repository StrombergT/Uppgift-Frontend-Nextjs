import { GraphQLClient } from "graphql-request";

interface performRequest {
  query: string;
  variables?: Record<string, any>;
  preview: boolean;
}
const request = <T>({ query, variables, preview }: performRequest) => {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: { authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}` },
  });
  return client.request<T>(query, variables);
};

export default request;
