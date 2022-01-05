import React, { useState, useEffect } from 'react';
import { CardGroup, Card, Container, Button, Modal } from 'react-bootstrap';

interface IProps {
    articles: IState[]
}

interface IState {
    body: string;
    date: string;
    id: number;
    title: string;
}

const Content = (props: IProps) => {
    const [articles, setArticles] = useState<IState[]>(
        [
            {
                body: "loading...",
                date: "loading...",
                id: 0,
                title: "loading..."
            }
        ]
    )

    const [article, setArticle] = useState<IState>(
        {
            body: "loading...",
            date: "loading...",
            id: 0,
            title: "loading..."
        }
    )
    const getTodo = (id: number) => {
        fetch(`/articles/${id}`)
            .then(response => response.json())
            .then(result => setArticle(result))
    }

    useEffect(() => {
        setArticles(props.articles)
    }, [props])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = (id: number) => {
        handleShow()
        getTodo(id)
    }

    return (
        <Container className="mt-3">
            <CardGroup>

                {
                    articles.map((article: any) => (
                        <Card key={article.id}>
                            <Card.Img variant="top" src=
                                {article.id === 1 ? "https://miro.medium.com/max/1200/1*fD3qqMWNyfJ85XST9c1H2g.png" : article.id === 3 ? "https://miro.medium.com/max/724/1*D1TpfUof-8amlhN1E2A6JA.png" : "https://cdn-dfdnj.nitrocdn.com/DykXzvbXwWfcfEXVjMBCfagBizvBCYHs/assets/static/optimized/rev-5d79a8c/wp-content/uploads/2021/11/1pHsEux2h8wc3-yNCQNwz0A.jpeg"} />
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Button variant="primary" onClick={() => handleClick(article.id)}>
                                    See Detail
                                </Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Upload on {new Date(article.date + 'Z').toLocaleString()}</small>
                            </Card.Footer>
                        </Card>
                    ))
                }
            </CardGroup>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{article.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{article.body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Content;