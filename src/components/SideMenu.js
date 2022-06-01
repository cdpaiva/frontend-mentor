const SideMenu = ({ period, setPeriod }) => {

    return (
        <div className="side-menu">
            <div className="overlay">
                <img className="img-avatar" src="/images/image-jeremy.png" alt="personal avatar" />
                <div className="avatar-content">
                    <p className="pre-text">Report for</p>
                    <h3 className="username">Jeremy Robson</h3>
                </div>
            </div>
            <div className="interval-menu">
                <p className={period === 'daily' ? 'selected' : null} onClick={() => setPeriod('daily')}>Daily</p>
                <p className={period === 'weekly' ? 'selected' : null} onClick={() => setPeriod('weekly')}>Weekly</p>
                <p className={period === 'monthly' ? 'selected' : null} onClick={() => setPeriod('monthly')}>Monthly</p>
            </div>
        </div>
    )
}

export default SideMenu