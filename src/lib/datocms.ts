import { GraphQLClient } from "graphql-request";

interface performRequest {
  query: string;
  variables?: Record<string, any>;
  preview: boolean;
}
const request: React.FC<performRequest> = ({ query, variables, preview }) => {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: { authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}` },
  });
  return client.request(query, variables);
};

export default request;
