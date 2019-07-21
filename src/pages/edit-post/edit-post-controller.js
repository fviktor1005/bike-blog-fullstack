import React, {PureComponent} from "react";
import {Form as FinalForm} from "react-final-form";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {POSTS_ACTIONS, POSTS_SERVICE} from "Modules/posts";
import { getPost } from './edit-post-selectors';
import EditPost from "./edit-post";

class EditPostController extends PureComponent {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getPost(id);
    }

    onSubmit = values => {
        const { id } = this.props.match.params;
        POSTS_SERVICE.updatePost(id, {...values, tags: (values.tags || '').split(",")}).then(() =>
            this.props.history.push("/")
        );
    };

    validate = () => {
    };

    render() {
        return (
            <FinalForm
                onSubmit={this.onSubmit}
                validate={this.validate}
                initialValues={this.props.post}
                render={props => <EditPost {...props} />}
            />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    post: getPost,
});

export default connect(
    mapStateToProps,
    { getPost: POSTS_ACTIONS.getPost }
)(EditPostController);
