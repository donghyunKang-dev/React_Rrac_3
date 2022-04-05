import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import { Button } from "../elements";
import Section from "../elements/Section";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";

const Main = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector(state => state.post.list);
    
    useEffect(() => {
        dispatch(postActions.getPostFB())
    }, [])

    return(
        <React.Fragment>
            <Section>
                {post_list.map((post) => {
                    return <Post key={post.id} {...post}/>
                })}
            </Section>
            <Button circle _onClick={() => {history.push('/write')}}>+</Button>
        </React.Fragment>
    )
}

export default Main;

