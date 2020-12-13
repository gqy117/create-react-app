import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Dispatch } from 'redux';
import { load } from './currencyReducer';

export const getCurrency = () => async (dispatch: Dispatch): Promise<void> => {
  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache(),
  });

  const result = await client.query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `,
  });

  console.log(result);

  dispatch(load(result.data.rates));
};
