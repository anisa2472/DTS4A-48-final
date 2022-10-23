import './App.css';
import { Routes, Route } from 'react-router-dom';
import ListBestBook from './containers/ListBestSeller';
import DetailBook from './containers/DetailBook';

function App() {
    return (
        <Routes>
            <Route path="/" element={<ListBestBook />} />
            <Route path="/:isbn10" element={<DetailBook />} />
            {/* </Route> */}
        </Routes>
    );
}

export default App;
