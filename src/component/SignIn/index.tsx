interface Props {
    onPathChange: (path: 'sign-in' | 'sign-up') => void;
}

export default function SignIn({ onPathChange }: Props) {
  return (
    <div className='form'>
        <div className="card-body">
            <h3>로그인</h3>
            <div className="input-box">
                <label>이메일 주소</label>
                <div className="input">
                    <input type="text" placeholder="이메일 주소를 입력해주세요" />
                </div>
            </div>
            <div className="input-box">
                <label>비밀번호</label>
                <div className="input">
                    <input type="password" placeholder="비밀번호를 입력해주세요" />
                </div>
            </div>
        </div>
        <div className="card-foot">
            <button>로그인</button>
            <p>신규 사용자이신가요? <span className="link" onClick={() => onPathChange('sign-up')}>회원가입</span></p>
        </div>
    </div>
  )
}
