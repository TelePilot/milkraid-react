import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'zjxtv1l2',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
})
