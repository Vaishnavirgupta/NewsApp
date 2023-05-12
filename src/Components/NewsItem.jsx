import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date ,source , category} = this.props;
        let badgeClass = 'badge rounded-pill';
        let badgeColor = '';
        switch(category) {
            case 'business':
                badgeColor = 'bg-success';
                break;
            case 'entertainment':
                badgeColor = 'bg-primary';
                break;
            case 'health':
                badgeColor = 'bg-danger';
                break;
            case 'science':
                badgeColor = 'bg-warning';
                break;
            case 'sports':
                badgeColor = 'bg-info';
                break;
            case 'technology':
                badgeColor = 'bg-light text-dark';
                break;
            default:
                badgeColor = 'bg-dark';
        }
        badgeClass += ` ${badgeColor}`;
       

        return (
            <div>
                <div className="card" >
                <span className={`position-absolute top-0 start-100 translate-middle badge ${badgeClass}`} style={{left:"90%",zIndex:"1"}}>{source}</span>
                    <img src={!imageUrl ? "https://th.bing.com/th/id/OIP.bDp_eAiIOpjKKkoS0HLkYQHaGN?w=215&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className='card-title'>{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className='btn btn-dark'>Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
