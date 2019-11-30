import React from 'react';
import {Form} from 'react-bootstrap';

const CommentForm=(props)=>{
    return(
        <div className="comment-form">
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3" placeholder="Thêm bình luận"/>
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <div className="b-block">
                    <button className="my-btn">Bình luận</button>
                    </div>
                </div>
                </Form>
        </div>
    );
}

export default CommentForm;