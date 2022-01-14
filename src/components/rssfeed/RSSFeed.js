import { Col, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Loading from '../../components/loading/Loading';
import { getData } from '../../services/RSS2Json'

function RSSFeed({ sources }) {
    
    const [rssSource, setRSSSource] = useState(0)
    const [title, setTitle] = useState('')
    const [data, setData] = useState([])
    const [shouldRefresh, setShouldRefresh] = useState(true)
    const [autoRefreshInterval, setAutoRefreshInterval] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    function refresh() {
        nextSource()
        setIsLoading(true)
        getData(sources, rssSource)
            .then(d => {
                setTitle(d.feed?.description)
                setData(d.items)
            })
            .then(() => {
                setShouldRefresh(false)
                setIsLoading(false)
            })
    }

    function nextSource() {
        const next = (rssSource + 1) % sources.length
        setRSSSource(next)
    }

    useEffect(() => {
        shouldRefresh && refresh()
    }, [shouldRefresh])

    useEffect(() => {
        if (autoRefreshInterval) {
            clearInterval(autoRefreshInterval)
            setAutoRefreshInterval(null)
        }
        setAutoRefreshInterval(setInterval(() => refresh(), 1000 * 10))
    }, [shouldRefresh])


    return (
        <div>
            <Row>
                <Col>
                    <h3 className='m-2'>{title}</h3>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-end'>
                    <Button
                        disabled={isLoading}
                        className='m-2'
                        onClick={() => setShouldRefresh(true)}>
                            Next Feed
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ListGroup className='m-2'>
                        {
                            data.map(el => (
                                <ListGroup.Item key={el.title} action href={el.link}>
                                    {el.title}
                                </ListGroup.Item>))
                        }
                    </ListGroup>
                </Col>
            </Row>
            {
                isLoading ?
                    <div className='d-flex w-100 align-items-center justify-content-center'>
                        <Loading />
                    </div>
                    :
                    null
            }
        </div>
    );
}

export default RSSFeed;
