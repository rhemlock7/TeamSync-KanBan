import {Input, Avatar, Popconfirm} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import {useState} from "react";
import {useMutation} from "@apollo/client";
import {ADD_COMMENT, REMOVE_COMMENT} from "../../utils/mutations";
import Auth from "../../utils/auth";
const {TextArea} = Input;

function CommentSection({commentsDB}) {
  const comments = commentsDB.comments;
  // console.log('Comments:', comments)

  const [commentText, setCommentText] = useState("");

  const projectAuthor = Auth.getProfile().authenticatedPerson.username;

  // Mutations
  const [AddComment] = useMutation(ADD_COMMENT, {
    variables: {
      cardId: commentsDB._id,
      commentText: commentText,
      commentAuthor: projectAuthor,
    },
    // refetchQueries: [QUERY_ONE_PROJECT, 'projectId']
  });

  const [RemoveComment] = useMutation(REMOVE_COMMENT, {
    // variables: { cardId: commentsDB._id, commentId: $commentId }
    // refetchQueries: [QUERY_ONE_PROJECT, 'projectId']
  });

  // Helper functions
  function handleCommentInput(e) {
    setCommentText(e.target.value);
  }

  function handleRemoveComment(commentId) {
    RemoveComment({variables: {cardId: commentsDB._id, commentId: commentId}});
  }

  function handleAddComment(e) {
    e.preventDefault();
    AddComment();
  }

  return (
    <section className="my-4">
      <h3>Comments</h3>
      <form onSubmit={handleAddComment}>
        <TextArea
          placeholder="Add comments here..."
          rows={2}
          text={commentText}
          onChange={handleCommentInput}
        />
        <div className="">
          <button className="mr-2" type="submit">
            Add Comment
          </button>
        </div>
      </form>

      <div>
        {comments.map((comment) => (
          <div
            className="bg-gray-200 p-3 my-4 drop-shadow-lg"
            key={comment._id}
          >
            <div className="flex justify-between items-center">
              {/* Title and start time */}
              <div className="flex justify-start items-center">
                <Avatar style={{backgroundColor: "#007EA7"}} size="small">
                  {comment.commentAuthor.charAt(0).toUpperCase()}
                </Avatar>
                <h3 className="text-xl ml-2 ">{comment.commentAuthor}</h3>
                <p className="ml-2">{comment.createdAt}</p>
              </div>
              {/* Icons */}
              <div className="flex justify-start items-center">
                <div className="cursor-pointer">
                  <EditOutlined />
                </div>
                <div className="cursor-pointer">
                  <Popconfirm
                    title="Delete the comment?"
                    description="Are you sure to delete this comment?"
                    icon={<QuestionCircleOutlined style={{color: "red"}} />}
                    okText="Delete"
                    okType="danger"
                    onConfirm={() => handleRemoveComment(comment._id)}
                  >
                    <DeleteOutlined />
                  </Popconfirm>
                </div>
              </div>
            </div>
            {/* Comment Body */}
            <div className="mt-1">
              <p>{comment.commentText}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommentSection;
