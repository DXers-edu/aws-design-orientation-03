import { useState } from 'react';
import './App.css';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';

export default function App() {

    const [path, setPath] = useState<'sign-in' | 'sign-up'>('sign-in');

    const onPathChangeHandler = (path: 'sign-in' | 'sign-up') => {
        setPath(path);
    }

    return (
        <div>
            <header>
                <div className="title-box">
                    <img src="/images/svg/logo.svg" alt="로고" width="18" height="18" />
                    <div className="title">DXers Edu Sample</div>
                </div>
            </header>
            <main>
                <article>
                    <div className="jumbotron">
                        <img src="/images/svg/logo-white.svg" />
                        <div className="jumbotron-title-box">
                            <h2>환영합니다.</h2>
                            <h2>DXers Edu Sample 페이지 입니다.</h2>
                        </div>
                    </div>
                    {path === 'sign-in' ? <SignIn onPathChange={onPathChangeHandler} /> : <SignUp  onPathChange={onPathChangeHandler} />}
                </article>
            </main>
        </div>
    )
}
