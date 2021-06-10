import {gql, useMutation} from '@apollo/client';

const MUTATION_LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
export const useToggleLikeMutation = ({id}) => {
  const [mutation, {loading: mutationLoading, error: mutationError}] = useMutation(MUTATION_LIKE_PHOTO)
  const mutationToggle = () => {
    mutation({
      variables: {
        input: {id}
      }
    }).then()
  }
  return {mutationToggle, mutationLoading, mutationError}
}
