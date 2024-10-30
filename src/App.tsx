import Layout from './components/layout/layout';
import { BrowserRouter as Router } from 'react-router-dom';

import './style/special.scss';

const App = () => {
    return (
        <Router>
            <Layout />
        </Router>
    );
};

export default App;
