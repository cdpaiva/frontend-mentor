import PropTypes from 'prop-types'

const Card = ({ period, title, timeframes }) => {
    const getCurrentHours = () => {
        return timeframes[period]['current']
    }

    const getPreviousHours = () => {
        return timeframes[period]['previous']
    }

    const getPeriodSubstantive = () => {
        switch (period) {
            case 'daily':
                return 'day'
            case 'weekly':
                return 'week'
            case 'monthly':
                return 'month'
            default:
                return
        }
    }

    const formatTitle = () => title.toLowerCase().replace(' ', '-')

    return (
        <div className='card'>
            <div className={`card-top card-${formatTitle()}`}></div>
            <div className="card-content">
                <div className="card-upper-bar">
                    <h4>
                        {title}
                    </h4>
                    <p className="options-menu">...</p>
                </div>
                <div className="phone-flex">
                    <div className="main-content">
                        {getCurrentHours() + 'hrs'}
                    </div>
                    <div className="sec-content">
                        {`Last ${getPeriodSubstantive()} - ` + getPreviousHours() + 'hrs'}
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    period: PropTypes.string.isRequired,
    title: PropTypes.string,
    timeframes: PropTypes.object.isRequired
}

export default Card