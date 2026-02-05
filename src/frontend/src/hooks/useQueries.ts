import { useActor } from './useActor';

// Note: Backend currently only has initializeContent() method
// Partners data is hardcoded in the frontend component
// If backend adds getAllPartners() in the future, this hook can be re-enabled

export function useQueries() {
  const { actor, isFetching } = useActor();
  
  return {
    actor,
    isFetching
  };
}
