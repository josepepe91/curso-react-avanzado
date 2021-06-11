import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`
export const useRegisterMutation = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] =
    useMutation(REGISTER)

  const mutationRegister = ({ email, password }) => {
    mutation({
      variables: {
        input: { email, password }
      }
    }).then()
  }
  return { mutationRegister, mutationLoading, mutationError }
}
