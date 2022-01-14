import './Example.css';

import { Container } from 'react-bootstrap';
import Navigation from '../../components/navigation/Navigation';
import RSSFeed from '../../components/rssfeed/RSSFeed';

export const RSSSources = [
    'http://www.news.gr/rss.ashx',
    'http://www.news.gr/rss.ashx?colid=2',
    'http://www.news.gr/rss.ashx?catid=9',
    'http://www.news.gr/rss.ashx?catid=5',
    'http://www.news.gr/rss.ashx?catid=20',
    'http://www.news.gr/rss.ashx?catid=5',
    'http://www.news.gr/rss.ashx?catid=10',
    'http://www.news.gr/rss.ashx?catid=12',
    'http://www.news.gr/rss.ashx?catid=30',
    'http://www.news.gr/rss.ashx?catid=15',
]

function Example() {
    return (
        <div>
            <Navigation />
            <Container fluid="md" >
                <RSSFeed sources={RSSSources} />
            </Container>
        </div>
    );
}

export default Example;
