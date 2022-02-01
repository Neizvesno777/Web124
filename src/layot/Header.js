import './Header.css';

function Header(){
    return(
        <div className="header">
            <div className="wrap">
                <div className="logo">Video</div>
                <div className="right">
                    <div className="tel">+7 909 525-66-33</div>
                    <div className="email">Video@mail.ru</div>
                </div>
            </div>
        </div>
    )
}

export default Header;