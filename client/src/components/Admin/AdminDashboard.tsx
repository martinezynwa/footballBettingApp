import FetchTeams from './FetchTeams'
import FetchLeague from './FetchLeague'
import FetchFinishedMatches from './FetchFinishedMatches'
import FetchFutureMatches from './FetchFutureMatches'

const AdminDashboard = () => {
  return (
    <>
      <a href="https://dashboard.api-football.com/soccer/ids">IDs link</a>
      <FetchLeague />
      <FetchTeams />
      <FetchFinishedMatches />
      <FetchFutureMatches />
    </>
  )
}

export default AdminDashboard
