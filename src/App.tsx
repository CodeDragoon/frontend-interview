import Search from "./applications/Search"

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();



function App() {


  return <div>
    <QueryClientProvider client={queryClient}>

      <Search />
    </QueryClientProvider>


  </div>
}

export default App
