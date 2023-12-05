import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-8">
          <RepositoriesList />
        </div>
        <div className="col-3"></div>
      </div>
    </Provider >
  )
}

export default App;