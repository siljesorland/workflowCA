import ApolloClient, { gql } from "apollo-boost";

const posts = new ApolloClient({
uri: https://graphqlzero.almansi.me/api
});

client
	.query({
		query: gql`
			{
				user(id: 2) {
					id
					username
					email
					address {
						geo {
							lat
							lng
						}
					}
				}
			}
		`,
	})
	.then(console.log);