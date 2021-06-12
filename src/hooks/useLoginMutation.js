import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`
export const useLoginMutation = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] =
    useMutation(LOGIN)

  const mutationLogin = ({ email, password }) => {
    return mutation({
      variables: {
        input: { email, password }
      }
    })
  }
  return { mutationLogin, mutationLoading, mutationError }
}
