import { gql, useMutation } from '@apollo/client'

const MUTATION_LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`
export const useToggleLikeMutation = ({ id }) => {
  const [mutation, { loading: mutationLoading, error: mutationError }] =
    useMutation(MUTATION_LIKE_PHOTO)
  const mutationToggle = () => {
    console.log('mutation')
    return mutation({
      variables: {
        input: { id }
      }
    })
  }
  return { mutationToggle, mutationLoading, mutationError }
}
