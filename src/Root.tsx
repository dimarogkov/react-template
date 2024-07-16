import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/pages/HomePage';
import { TodosPage } from './components/pages/TodosPage';
import { NotFoundPage } from './components/pages/NotFoundPage';

// basename='/rep' - should have rep name

export const Root = () => {
    return (
        <Router basename='/'>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path='todos' element={<TodosPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
};
