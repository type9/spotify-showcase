import { Outlet } from 'react-router-dom';
import { Header, AuthWrapper } from 'components';
import './styles.scss';
export const CoreLayout = () => {
    return (
        <div className="core-layout">
            <AuthWrapper>
                <Header className="core-layout__header"/>
                <main className="core-layout__viewport">
                    <Outlet />
                </main>
            </AuthWrapper>
        </div>
    );
}